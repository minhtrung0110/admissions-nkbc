"use client";

import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { enrollmentSchema, EnrollmentFormData, defaultValues } from "@/lib/schema";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Check } from "lucide-react";
import { submitApplication } from "@/app/actions";

import Step1Student from "./steps/Step1Student";
import Step2Academic from "./steps/Step2Academic";
import Step3Parents from "./steps/Step3Parents";
import Step4Application from "./steps/Step4Application";
import Step5Review from "./steps/Step5Review";

const STEPS = [
  { id: 1, title: "Thông tin" },
  { id: 2, title: "Học tập" },
  { id: 3, title: "Gia đình" },
  { id: 4, title: "Năng khiếu" },
  { id: 5, title: "Review" },
];

export default function MultiStepForm() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const methods = useForm<any>({
    resolver: zodResolver(enrollmentSchema),
    defaultValues,
    mode: "onTouched"
  });

  const { trigger, handleSubmit, getValues } = methods;

  const handleNext = async () => {
    let fieldsToValidate: string[] = [];

    if (currentStep === 1) {
      fieldsToValidate = [
        "student.fullName",
        "student.gender",
        "student.dob",
        "student.address"
      ];
    } else if (currentStep === 2) {
      fieldsToValidate = [
        "academic.schoolName",
        "academic.district",
        "academic.academicPerformance",
        "academic.conduct",
        "academic.weight",
        "academic.height"
      ];
    } else if (currentStep === 3) {
      fieldsToValidate = [
        "parents.father.name",
        "parents.father.contact",
        "parents.mother.name",
        "parents.mother.contact"
      ];
    } else if (currentStep === 4) {
      fieldsToValidate = ["application.major"];
    }

    const isStepValid = await trigger(fieldsToValidate as any);

    if (isStepValid) {
      setCurrentStep((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      toast.error("Vui lòng điền đầy đủ thông tin bắt buộc.");
    }
  };

  const handlePrev = () => {
    setCurrentStep((prev) => prev - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    try {
      toast.loading("Đang xử lý hồ sơ...", { id: "submit" });
      
      const formData = new FormData();
      formData.append("data", JSON.stringify(data));
      if (data.application?.file) {
        formData.append("file", data.application.file);
      }
      
      const result = await submitApplication(formData);
      
      if (result.success && result.id) {
        toast.success("Nộp hồ sơ thành công!", { id: "submit" });
        router.push(`/result/${result.id}`);
      } else {
        toast.error(result.error || "Có lỗi xảy ra, vui lòng thử lại sau.", { id: "submit" });
      }
    } catch (error) {
      console.error(error);
      toast.error("Lỗi hệ thống, vui lòng thử lại.", { id: "submit" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex-grow flex flex-col items-center py-12 px-4 bg-surface-container-low w-full">
      <div className="max-w-4xl w-full">
        {/* Progress Timeline */}
        <div className="mb-12 relative px-4 md:px-12">
          <div className="flex justify-between items-center w-full relative z-10">
            {STEPS.map((step, index) => {
              const isActive = step.id === currentStep;
              const isCompleted = step.id < currentStep;

              return (
                <div key={step.id} className="flex flex-col items-center gap-3 relative bg-surface-container-low px-2">
                  <div
                    className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center font-bold text-sm md:text-lg transition-all duration-300
                      ${isActive ? "bg-primary text-on-primary ring-4 ring-primary/20 shadow-md" : ""}
                      ${isCompleted ? "bg-primary text-on-primary" : ""}
                      ${!isActive && !isCompleted ? "bg-surface-container-highest text-on-surface-variant opacity-60" : ""}
                    `}
                  >
                    {isCompleted ? <Check className="w-5 h-5 md:w-6 md:h-6" /> : step.id}
                  </div>
                  <span className={`hidden md:block text-xs font-semibold uppercase tracking-widest ${isActive || isCompleted ? "text-primary" : "text-on-surface-variant opacity-60"}`}>
                    {step.title}
                  </span>
                </div>
              );
            })}
          </div>
          
          {/* Default Background Track */}
          <div className="absolute top-5 md:top-6 left-12 right-12 h-1 bg-surface-container-highest z-0"></div>
          {/* Active Track */}
          <div 
            className="absolute top-5 md:top-6 left-12 h-1 bg-primary z-0 transition-all duration-500 ease-out"
            style={{ width: `calc(${(currentStep - 1) / (STEPS.length - 1) * 100}% - 4rem)` }}
          ></div>
        </div>

        {/* Form Content */}
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {currentStep === 1 && <Step1Student onNext={handleNext} />}
            {currentStep === 2 && <Step2Academic onNext={handleNext} onPrev={handlePrev} />}
            {currentStep === 3 && <Step3Parents onNext={handleNext} onPrev={handlePrev} />}
            {currentStep === 4 && <Step4Application onNext={handleNext} onPrev={handlePrev} />}
            {currentStep === 5 && <Step5Review onPrev={handlePrev} isSubmitting={isSubmitting} />}
          </form>
        </FormProvider>

        {/* Extra Info Cards below Step */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-primary/5 p-6 rounded-xl flex gap-4 items-start border-l-4 border-primary shadow-sm hover:shadow-md transition-shadow">
            <span className="material-symbols-outlined text-primary">info</span>
            <div className="text-sm">
              <p className="font-bold text-primary mb-1">Lưu ý</p>
              <p className="text-on-surface-variant leading-relaxed">Hồ sơ sẽ được lưu tạm tự động sau mỗi bước để không bị mất dữ liệu.</p>
            </div>
          </div>
          <div className="bg-tertiary/5 p-6 rounded-xl flex gap-4 items-start border-l-4 border-tertiary shadow-sm hover:shadow-md transition-shadow">
            <span className="material-symbols-outlined text-tertiary">security</span>
            <div className="text-sm">
              <p className="font-bold text-tertiary mb-1">Bảo mật</p>
              <p className="text-on-surface-variant leading-relaxed">Thông tin cá nhân được bảo vệ theo quy định của nhà trường.</p>
            </div>
          </div>
          <div className="bg-secondary/5 p-6 rounded-xl flex gap-4 items-start border-l-4 border-secondary shadow-sm hover:shadow-md transition-shadow">
            <span className="material-symbols-outlined text-secondary">support_agent</span>
            <div className="text-sm">
              <p className="font-bold text-secondary mb-1">Hỗ trợ</p>
              <p className="text-on-surface-variant leading-relaxed">Hotline: (028) 1234 5678 nếu gặp khó khăn khi đăng ký.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
