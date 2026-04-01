"use client";

import { useFormContext } from "react-hook-form";
import { EnrollmentFormData } from "@/lib/schema";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Step2Academic({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const { register, formState: { errors } } = useFormContext<EnrollmentFormData>();

  return (
    <div className="bg-surface-container-lowest rounded-2xl p-6 md:p-12 shadow-sm border border-outline-variant/10">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="md:w-1/3 flex flex-col gap-6">
          <div className="h-48 md:h-64 rounded-xl overflow-hidden relative shadow-inner">
            <img
              alt="Academic Athletics"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGlac45_oaf4GTLCYEilQIv5-IAX40iyt5CV2it8HJYX5zYpg3wrOBzFFXdu9XKkZZZNGEKfTSJk-kRT_Nj1XK3zPRvANDJtgzl99jTOdc3eKlqp_WV_8uUFmTdLOQA4xcozw3d63CcuwdhESIQjkEbvWWr1-plUDPJYgK-soNowoaNOnN_1ah-lw_JLEb4jquSodw3Z65MVpFto2w_fzRXHdDPfKsHlP3R7ud_39W3f_zLtJ2uIjPjLR7rMq8fROJHzbalwxC7WA"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="font-headline font-bold text-2xl leading-tight drop-shadow-md">Bước 2</h3>
              <p className="text-sm text-blue-100 mt-1 font-medium">Học lực & Thể chất</p>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="font-headline font-extrabold text-3xl text-primary tracking-tight">Lịch sử học tập</h2>
            <p className="text-on-surface-variant text-base leading-relaxed bg-surface-container-low p-4 rounded-lg border-l-4 border-primary/40">
              Các thông số về học bạ lớp 9 và chỉ số hình thể đóng vai trò quan trọng trong việc đánh giá tổng quan.
            </p>
          </div>
        </div>

        <div className="md:w-2/3">
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group">
                <label className="block text-xs font-bold text-primary uppercase tracking-widest mb-2">Trường THCS (Lớp 9) *</label>
                <input
                  {...register("academic.schoolName")}
                  className="w-full bg-surface-container-low border-b-2 border-outline-variant/30 focus:border-primary focus:ring-0 rounded-t-md px-4 pt-4 pb-3 transition-colors"
                  placeholder="THCS Bình Lợi"
                  type="text"
                />
                {errors.academic?.schoolName && <p className="text-error text-sm mt-1">{errors.academic.schoolName.message}</p>}
              </div>

              <div className="group">
                <label className="block text-xs font-bold text-primary uppercase tracking-widest mb-2">Quận/Huyện *</label>
                <select
                  {...register("academic.district")}
                  className="w-full bg-surface-container-low border-b-2 border-outline-variant/30 focus:border-primary focus:ring-0 rounded-t-md px-4 pt-4 pb-3 transition-colors"
                >
                  <option value="">Chọn Quận/Huyện</option>
                  <option value="Bình Chánh">Huyện Bình Chánh</option>
                  <option value="Quận 8">Quận 8</option>
                  <option value="Quận 7">Quận 7</option>
                  <option value="Khác">Khác</option>
                </select>
                {errors.academic?.district && <p className="text-error text-sm mt-1">{errors.academic.district.message}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group">
                <label className="block text-xs font-bold text-primary uppercase tracking-widest mb-2">Xếp loại Học Lực *</label>
                <select
                  {...register("academic.academicPerformance")}
                  className="w-full bg-surface-container-low border-b-2 border-outline-variant/30 focus:border-primary focus:ring-0 rounded-t-md px-4 pt-4 pb-3 transition-colors"
                >
                  <option value="">Chọn loại</option>
                  <option value="Giỏi">Giỏi</option>
                  <option value="Khá">Khá</option>
                  <option value="Trung Bình">Trung Bình</option>
                </select>
                {errors.academic?.academicPerformance && <p className="text-error text-sm mt-1">{errors.academic.academicPerformance.message}</p>}
              </div>

              <div className="group">
                <label className="block text-xs font-bold text-primary uppercase tracking-widest mb-2">Xếp loại Hạnh Kiểm *</label>
                <select
                  {...register("academic.conduct")}
                  className="w-full bg-surface-container-low border-b-2 border-outline-variant/30 focus:border-primary focus:ring-0 rounded-t-md px-4 pt-4 pb-3 transition-colors"
                >
                  <option value="">Chọn loại</option>
                  <option value="Tốt">Tốt</option>
                  <option value="Khá">Khá</option>
                  <option value="Trung Bình">Trung Bình</option>
                </select>
                {errors.academic?.conduct && <p className="text-error text-sm mt-1">{errors.academic.conduct.message}</p>}
              </div>

              <div className="group">
                <label className="block text-xs font-bold text-primary uppercase tracking-widest mb-2">Năm Tốt Nghiệp</label>
                <input
                  {...register("academic.gradYear")}
                  className="w-full bg-surface-container-low border-b-2 border-outline-variant/30 focus:border-primary focus:ring-0 rounded-t-md px-4 pt-4 pb-3 transition-colors"
                  type="text"
                />
              </div>
            </div>

            <div className="pt-6 border-t border-outline-variant/20">
              <h3 className="font-bold text-lg text-primary mb-6">Chỉ số hình thể</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group">
                  <label className="block text-xs font-bold text-primary uppercase tracking-widest mb-2">Chiều cao (m) *</label>
                  <div className="flex bg-surface-container-low rounded-t-md border-b-2 border-outline-variant/30 focus-within:border-primary transition-colors">
                    <input
                      {...register("academic.height", { valueAsNumber: true })}
                      step="0.01"
                      className="w-full bg-transparent border-none focus:ring-0 px-4 pt-4 pb-3"
                      placeholder="1.65"
                      type="number"
                    />
                    <span className="flex items-center px-4 font-bold text-outline">m</span>
                  </div>
                  {errors.academic?.height && <p className="text-error text-sm mt-1">{errors.academic.height.message}</p>}
                </div>

                <div className="group">
                  <label className="block text-xs font-bold text-primary uppercase tracking-widest mb-2">Cân nặng (kg) *</label>
                  <div className="flex bg-surface-container-low rounded-t-md border-b-2 border-outline-variant/30 focus-within:border-primary transition-colors">
                    <input
                      {...register("academic.weight", { valueAsNumber: true })}
                      className="w-full bg-transparent border-none focus:ring-0 px-4 pt-4 pb-3"
                      placeholder="55"
                      type="number"
                    />
                    <span className="flex items-center px-4 font-bold text-outline">kg</span>
                  </div>
                  {errors.academic?.weight && <p className="text-error text-sm mt-1">{errors.academic.weight.message}</p>}
                </div>
              </div>
            </div>

            <div className="pt-8 flex justify-between">
              <button
                type="button"
                onClick={onPrev}
                className="bg-surface-container-highest text-primary font-bold px-8 py-4 rounded-xl flex items-center gap-2 hover:bg-surface-container-low transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Quay lại
              </button>
              <button
                type="button"
                onClick={onNext}
                className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-10 py-4 rounded-xl font-bold flex items-center gap-3 hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-primary/20"
              >
                Tiếp tục
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
