"use client";

import { useFormContext } from "react-hook-form";
import { EnrollmentFormData } from "@/lib/schema";
import { ArrowLeft, CheckCircle, ShieldCheck, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Step5Review({ onPrev, isSubmitting }: { onPrev: () => void, isSubmitting: boolean }) {
  const { getValues } = useFormContext<EnrollmentFormData>();
  const data = getValues();

  const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="bg-surface-container-low rounded-xl p-6 border border-outline-variant/10 shadow-sm relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/3 group-hover:scale-110 transition-transform"></div>
      <h3 className="font-headline font-bold text-lg text-primary mb-6 flex items-center gap-2 border-b-2 border-primary/10 pb-3">
        {title}
      </h3>
      <div className="space-y-4">
        {children}
      </div>
    </div>
  );

  const Item = ({ label, value }: { label: string, value?: string | number }) => (
    <div className="flex flex-col sm:flex-row sm:justify-between border-b border-outline-variant/10 pb-3 last:border-0 last:pb-0">
      <span className="text-secondary font-medium text-sm tracking-wide">{label}</span>
      <span className="font-bold text-on-surface-variant text-right max-w-sm break-words">
        {value || <span className="text-outline italic">Chưa cập nhật</span>}
      </span>
    </div>
  );

  return (
    <div className="bg-surface-container-lowest rounded-2xl p-6 md:p-12 shadow-sm border border-outline-variant/10">
      
      <div className="text-center mb-10 max-w-2xl mx-auto space-y-4">
        <div className="w-20 h-20 mx-auto bg-tertiary-container rounded-full flex items-center justify-center text-white shadow-lg shadow-tertiary/20 mb-6">
          <ShieldCheck className="w-10 h-10" />
        </div>
        <h2 className="font-headline font-extrabold text-3xl md:text-4xl text-primary tracking-tight">Xác nhận đơn dự tuyển</h2>
        <p className="text-on-surface-variant text-lg">
          Vui lòng kiểm tra kỹ mọi thông tin trước khi nộp. Sau khi hoàn tất bấm nộp, bạn vẫn có thể sử dụng lại mã hồ sơ để điều chỉnh nếu cần.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        <Section title="1. Thông tin cá nhân">
          <Item label="Họ và tên" value={data.student?.fullName} />
          <Item label="Giới tính" value={data.student?.gender} />
          <Item label="Ngày sinh" value={data.student?.dob} />
          <Item label="Dân tộc" value={data.student?.ethnicity} />
          <Item label="Địa chỉ" value={data.student?.address} />
        </Section>

        <Section title="2. Học tập & Hình thể">
          <Item label="Trường THCS" value={data.academic?.schoolName} />
          <Item label="Học lực lớp 9" value={data.academic?.academicPerformance} />
          <Item label="Hạnh kiểm lớp 9" value={data.academic?.conduct} />
          <Item label="Chiều cao" value={`${data.academic?.height}m`} />
          <Item label="Cân nặng" value={`${data.academic?.weight}kg`} />
        </Section>
        
        <Section title="3. Nguyện vọng đăng ký">
          <Item label="Môn dự tuyển" value={data.application?.major} />
          <div className="flex flex-col border-b border-outline-variant/10 pb-3 mt-4">
            <span className="text-secondary font-medium text-sm tracking-wide mb-2">Thành tích (Nếu có)</span>
            <span className="font-medium text-on-surface-variant bg-surface-container-lowest p-4 rounded-lg border border-outline-variant/20 italic">
              {data.application?.achievements || "Không có ghi chú"}
            </span>
          </div>
          <Item label="File đính kèm" value={data.application?.file ? data.application.file.name : "Chưa có file"} />
        </Section>

        <Section title="4. Phụ huynh / Người giám hộ">
          <Item label="Họ tên Cha" value={data.parents?.father?.name} />
          <Item label="SĐT Cha" value={data.parents?.father?.contact} />
          <Item label="Họ tên Mẹ" value={data.parents?.mother?.name} />
          <Item label="SĐT Mẹ" value={data.parents?.mother?.contact} />
        </Section>
      </div>

      <div className="bg-amber-50 dark:bg-amber-950/20 p-6 rounded-xl border border-amber-200 dark:border-amber-800/30 flex gap-4 mb-10 text-amber-900 dark:text-amber-200">
        <AlertTriangle className="w-6 h-6 shrink-0 text-amber-600 dark:text-amber-400 mt-1" />
        <div className="text-sm space-y-2">
          <p className="font-bold">Cam kết tính trung thực</p>
          <p>
            Tôi xin cam đoan những lời khai trên đây là hoàn toàn đúng sự thật. Nếu sai, tôi xin chịu hoàn toàn trách nhiệm và chấp nhận mọi hình thức xử lý của hội đồng tuyển sinh.
          </p>
        </div>
      </div>

      <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-6 border-t border-outline-variant/20">
        <button
          type="button"
          onClick={onPrev}
          disabled={isSubmitting}
          className="w-full sm:w-auto bg-surface-container-highest text-primary font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-surface-container-low transition-colors disabled:opacity-50"
        >
          <ArrowLeft className="w-5 h-5" /> Để tôi kiểm tra lại
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto bg-gradient-to-r from-primary to-primary-container text-on-primary px-12 py-5 rounded-xl font-bold flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-primary/30 disabled:opacity-70 disabled:scale-100 disabled:cursor-wait"
        >
          {isSubmitting ? "Đang xử lý..." : "Nộp đơn xét tuyển chính thức"}
          {!isSubmitting && <CheckCircle className="w-5 h-5" />}
        </button>
      </div>
    </div>
  );
}
