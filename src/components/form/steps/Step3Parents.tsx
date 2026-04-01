"use client";

import { useFormContext } from "react-hook-form";
import { EnrollmentFormData } from "@/lib/schema";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Step3Parents({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const { register, formState: { errors } } = useFormContext<EnrollmentFormData>();

  const ParentForm = ({ title, prefix }: { title: string, prefix: "father" | "mother" }) => (
    <div className="space-y-6">
      <h3 className="font-bold text-lg text-primary border-b-2 border-outline-variant/20 pb-2">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="group">
          <label className="block text-xs font-bold text-primary uppercase tracking-widest mb-1">Họ và tên *</label>
          <input
            {...register(`parents.${prefix}.name` as any)}
            className="w-full bg-surface-container-low border-b-2 border-outline-variant/30 focus:border-primary focus:ring-0 rounded-t-md px-4 py-3"
            type="text"
          />
          {errors.parents?.[prefix]?.name && <p className="text-error text-sm mt-1">{errors.parents[prefix]?.name?.message}</p>}
        </div>
        <div className="group">
          <label className="block text-xs font-bold text-primary uppercase tracking-widest mb-1">Năm sinh</label>
          <input
            {...register(`parents.${prefix}.yob` as any)}
            className="w-full bg-surface-container-low border-b-2 border-outline-variant/30 focus:border-primary focus:ring-0 rounded-t-md px-4 py-3"
            type="text"
            placeholder="VD: 1980"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="group">
          <label className="block text-xs font-bold text-primary uppercase tracking-widest mb-1">Nghề nghiệp</label>
          <input
            {...register(`parents.${prefix}.job` as any)}
            className="w-full bg-surface-container-low border-b-2 border-outline-variant/30 focus:border-primary focus:ring-0 rounded-t-md px-4 py-3"
            type="text"
          />
        </div>
        <div className="group">
          <label className="block text-xs font-bold text-primary uppercase tracking-widest mb-1">Cơ quan công tác</label>
          <input
            {...register(`parents.${prefix}.workplace` as any)}
            className="w-full bg-surface-container-low border-b-2 border-outline-variant/30 focus:border-primary focus:ring-0 rounded-t-md px-4 py-3"
            type="text"
          />
        </div>
      </div>
      <div className="group">
        <label className="block text-xs font-bold text-primary uppercase tracking-widest mb-1">Địa chỉ thường trú</label>
        <input
          {...register(`parents.${prefix}.address` as any)}
          className="w-full bg-surface-container-low border-b-2 border-outline-variant/30 focus:border-primary focus:ring-0 rounded-t-md px-4 py-3"
          type="text"
        />
      </div>
      <div className="group">
        <label className="block text-xs font-bold text-primary uppercase tracking-widest mb-1">Điện thoại liên lạc *</label>
        <input
          {...register(`parents.${prefix}.contact` as any)}
          className="w-full bg-surface-container-low border-b-2 border-outline-variant/30 focus:border-primary focus:ring-0 rounded-t-md px-4 py-3"
          type="tel"
        />
        {errors.parents?.[prefix]?.contact && <p className="text-error text-sm mt-1">{errors.parents[prefix]?.contact?.message}</p>}
      </div>
    </div>
  );

  return (
    <div className="bg-surface-container-lowest rounded-2xl p-6 md:p-12 shadow-sm border border-outline-variant/10">
      <div className="space-y-4 mb-8">
        <h2 className="font-headline font-extrabold text-3xl text-primary tracking-tight">Thông tin Phụ huynh</h2>
        <p className="text-on-surface-variant text-base bg-surface-container-low p-4 rounded-lg border-l-4 border-primary/40">
          Vui lòng cung cấp chính xác thông tin liên lạc của Phụ huynh hoặc Người giám hộ hợp pháp.
        </p>
      </div>

      <div className="space-y-12">
        <ParentForm title="Cha (Hoặc người giám hộ)" prefix="father" />
        <ParentForm title="Mẹ (Hoặc người giám hộ)" prefix="mother" />

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
