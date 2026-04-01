"use client";

import { useFormContext } from "react-hook-form";
import { EnrollmentFormData } from "@/lib/schema";
import { ArrowRight } from "lucide-react";

export default function Step1Student({ onNext }: { onNext: () => void }) {
  const { register, formState: { errors } } = useFormContext<EnrollmentFormData>();

  return (
    <div className="bg-surface-container-lowest rounded-2xl p-6 md:p-12 shadow-sm border border-outline-variant/10">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Left Column: Visual/Context */}
        <div className="md:w-1/3 flex flex-col gap-6">
          <div className="h-48 md:h-64 rounded-xl overflow-hidden relative shadow-inner">
            <img
              alt="Student Athletics"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtj0ASQCLnIvvcDQYOW8chj64l2y0ZlOLnTwYvyluKFBrlpl72eN0EdN1ZHaqPoiZN4sl2sU8w_WsxXJxDmlomtpXxtssUcX5NAGgINyTRcmO9MawlJUfzQMx5SVtia9widBWVG6r6hEJY_ynV8usZgH7moeB4bwOiEgWvcWEqXDEvF302ygLn7TygODK1qGUAkZY5AZj6mbriyuDnSOsdQ7i6RE2EGAqSNGhgSeChQixE4f_kTDific5_Dt9h9X4ZW4fuN-gyw9U"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="font-headline font-bold text-2xl leading-tight drop-shadow-md">Bước 1</h3>
              <p className="text-sm text-blue-100 mt-1 font-medium">Hồ sơ cá nhân</p>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="font-headline font-extrabold text-3xl text-primary tracking-tight">Thông tin học sinh</h2>
            <p className="text-on-surface-variant text-base leading-relaxed bg-surface-container-low p-4 rounded-lg border-l-4 border-primary/40">
              Vui lòng cung cấp chính xác các thông tin cơ bản của học sinh để bắt đầu quá trình xét tuyển năng khiếu TDTT.
            </p>
          </div>
        </div>

        {/* Right Column: Form Fields */}
        <div className="md:w-2/3">
          <div className="space-y-8">
            {/* Full Name */}
            <div className="group">
              <label className="block text-xs font-bold text-primary uppercase tracking-widest mb-2 transition-colors group-focus-within:text-tertiary">
                Họ và tên *
              </label>
              <input
                {...register("student.fullName")}
                className="w-full bg-surface-container-low border-none border-b-2 border-outline-variant/30 focus:border-primary focus:ring-0 rounded-t-md px-4 pt-4 pb-3 font-medium placeholder:text-outline/50 transition-all hover:bg-surface-container"
                placeholder="VD: Nguyễn Văn A"
                type="text"
              />
              {errors.student?.fullName && (
                <p className="text-error text-sm mt-1">{errors.student.fullName.message}</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Gender */}
              <div>
                <label className="block text-xs font-bold text-primary uppercase tracking-widest mb-4">
                  Giới tính *
                </label>
                <div className="flex gap-8 px-2 py-3 bg-surface-container-low rounded-lg border-b-2 border-outline-variant/30">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      {...register("student.gender")}
                      value="Nam"
                      className="w-5 h-5 text-primary focus:ring-primary border-outline-variant rounded-full"
                      type="radio"
                    />
                    <span className="text-sm font-semibold group-hover:text-primary transition-colors">Nam</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      {...register("student.gender")}
                      value="Nữ"
                      className="w-5 h-5 text-primary focus:ring-primary border-outline-variant rounded-full"
                      type="radio"
                    />
                    <span className="text-sm font-semibold group-hover:text-primary transition-colors">Nữ</span>
                  </label>
                </div>
                {errors.student?.gender && (
                  <p className="text-error text-sm mt-1">{errors.student.gender.message}</p>
                )}
              </div>

              {/* DOB */}
              <div className="group">
                <label className="block text-xs font-bold text-primary uppercase tracking-widest mb-2 group-focus-within:text-tertiary">
                  Sinh ngày *
                </label>
                <input
                  {...register("student.dob")}
                  className="w-full bg-surface-container-low border-none border-b-2 border-outline-variant/30 focus:border-primary focus:ring-0 rounded-t-md px-4 pt-4 pb-3 font-medium transition-all hover:bg-surface-container"
                  type="date"
                />
                {errors.student?.dob && (
                  <p className="text-error text-sm mt-1">{errors.student.dob.message}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Place of Birth */}
              <div className="group">
                <label className="block text-xs font-bold text-primary uppercase tracking-widest mb-2 group-focus-within:text-tertiary">
                  Nơi sinh (Tỉnh/TP)
                </label>
                <input
                  {...register("student.birthPlace")}
                  className="w-full bg-surface-container-low border-none border-b-2 border-outline-variant/30 focus:border-primary focus:ring-0 rounded-t-md px-4 pt-4 pb-3 font-medium placeholder:text-outline/50 transition-all hover:bg-surface-container"
                  placeholder="TP. Hồ Chí Minh"
                  type="text"
                />
              </div>

              {/* Ethnicity */}
              <div className="group">
                <label className="block text-xs font-bold text-primary uppercase tracking-widest mb-2 group-focus-within:text-tertiary">
                  Dân tộc
                </label>
                <select
                  {...register("student.ethnicity")}
                  className="w-full bg-surface-container-low border-none border-b-2 border-outline-variant/30 focus:border-primary focus:ring-0 rounded-t-md px-4 pt-4 pb-3 font-medium transition-all hover:bg-surface-container"
                >
                  <option value="Kinh">Kinh</option>
                  <option value="Hoa">Hoa</option>
                  <option value="Khmer">Khmer</option>
                  <option value="Khác">Khác</option>
                </select>
              </div>
            </div>

            {/* Permanent Address */}
            <div className="group">
              <label className="block text-xs font-bold text-primary uppercase tracking-widest mb-2 group-focus-within:text-tertiary">
                Địa chỉ thường trú *
              </label>
              <input
                {...register("student.address")}
                className="w-full bg-surface-container-low border-none border-b-2 border-outline-variant/30 focus:border-primary focus:ring-0 rounded-t-md px-4 pt-4 pb-3 font-medium placeholder:text-outline/50 transition-all hover:bg-surface-container"
                placeholder="Số nhà, đường, phường/xã, quận/huyện..."
                type="text"
              />
              {errors.student?.address && (
                <p className="text-error text-sm mt-1">{errors.student.address.message}</p>
              )}
            </div>

            {/* Current Residence */}
            <div className="group">
              <label className="block text-xs font-bold text-primary uppercase tracking-widest mb-2 group-focus-within:text-tertiary">
                Nơi ở hiện nay
              </label>
              <input
                {...register("student.currentLiving")}
                className="w-full bg-surface-container-low border-none border-b-2 border-outline-variant/30 focus:border-primary focus:ring-0 rounded-t-md px-4 pt-4 pb-3 font-medium placeholder:text-outline/50 transition-all hover:bg-surface-container"
                placeholder="Nhập nếu khác địa chỉ thường trú..."
                type="text"
              />
            </div>

            {/* Action Buttons */}
            <div className="pt-8 flex justify-end">
              <button
                type="button"
                onClick={onNext}
                className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-10 py-5 rounded-xl font-bold flex items-center gap-3 hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-primary/20"
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
