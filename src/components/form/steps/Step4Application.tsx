"use client";

import { useFormContext } from "react-hook-form";
import { EnrollmentFormData } from "@/lib/schema";
import { ArrowLeft, ArrowRight, Upload } from "lucide-react";
import { useState } from "react";

export default function Step4Application({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const { register, setValue, watch, formState: { errors } } = useFormContext<EnrollmentFormData>();
  const [fileName, setFileName] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert("File quá lớn. Vui lòng chọn file dưới 2MB.");
        e.target.value = "";
        return;
      }
      setFileName(file.name);
      setValue("application.file", file);
    }
  };

  const MAJORS = [
    "Điền kinh", "Bóng đá", "Bóng rổ", "Bóng bàn", "Bơi lội", 
    "Cầu lông", "Taekwondo", "Karatedo", "Vovinam", "Khác"
  ];

  return (
    <div className="bg-surface-container-lowest rounded-2xl p-6 md:p-12 shadow-sm border border-outline-variant/10">
      <div className="space-y-4 mb-8">
        <h2 className="font-headline font-extrabold text-3xl text-primary tracking-tight">Đăng ký Năng khiếu</h2>
        <p className="text-on-surface-variant text-base bg-surface-container-low p-4 rounded-lg border-l-4 border-primary/40">
          Chọn bộ môn chuyên sâu và cung cấp minh chứng cho thành tích thể thao nếu có.
        </p>
      </div>

      <div className="space-y-10">
        <div className="group">
          <label className="block text-sm font-bold text-primary uppercase tracking-widest mb-4">Môn đăng ký dự tuyển học năng khiếu *</label>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {MAJORS.map(major => (
              <label key={major} className="flex items-center gap-3 p-4 border rounded-xl cursor-pointer hover:bg-surface-container-low transition-colors has-[:checked]:bg-primary-fixed has-[:checked]:border-primary">
                <input
                  type="radio"
                  value={major}
                  {...register("application.major")}
                  className="w-5 h-5 text-primary border-outline-variant focus:ring-primary focus:ring-offset-0"
                />
                <span className="font-medium">{major}</span>
              </label>
            ))}
          </div>
          {errors.application?.major && <p className="text-error text-sm mt-2">{errors.application.major.message}</p>}
        </div>

        <div className="group">
          <label className="block text-sm font-bold text-primary uppercase tracking-widest mb-2 font-headline">Ghi chú thành tích TDTT (Nếu có)</label>
          <textarea
            {...register("application.achievements")}
            rows={4}
            className="w-full bg-surface-container-low border-b-2 border-outline-variant/30 focus:border-primary focus:ring-0 rounded-t-md px-4 py-4"
            placeholder="Kể tên các giải thưởng, huy chương đạt được (Cấp quận, thành phố, quốc gia...)"
          ></textarea>
        </div>

        <div className="group">
          <label className="block text-sm font-bold text-primary uppercase tracking-widest mb-2">Đính kèm minh chứng (Max 2MB)</label>
          <div className="border-2 border-dashed border-outline-variant/40 rounded-xl p-8 text-center hover:bg-surface-container transition-colors relative">
            <input
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={handleFileChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <div className="pointer-events-none flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-primary-fixed flex items-center justify-center text-primary">
                <Upload className="w-8 h-8" />
              </div>
              <p className="font-bold text-primary">Kéo thả bản chụp giấy chứng nhận vào đây hoặc Click để tải lên</p>
              <p className="text-sm text-on-surface-variant">Hỗ trợ PDF, JPG, PNG tối đa 2MB</p>
              {fileName && (
                <div className="mt-4 px-4 py-2 bg-on-primary-container text-primary-fixed text-sm rounded-lg inline-flex font-medium">
                  Đã tải lên: {fileName}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="pt-8 flex justify-between border-t border-outline-variant/20">
          <button
            type="button"
            onClick={onPrev}
            className="bg-surface-container-highest text-primary font-bold px-8 py-4 rounded-xl flex items-center gap-2 hover:bg-surface-container-low transition-colors"
          >
            <ArrowLeft className="w-5 h-5" /> Quay lại
          </button>
          <button
            type="button"
            onClick={onNext}
            className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-10 py-4 rounded-xl font-bold flex items-center gap-3 hover:scale-[1.02] active:scale-95 transition-all shadow-lg"
          >
            Tiếp tục <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
