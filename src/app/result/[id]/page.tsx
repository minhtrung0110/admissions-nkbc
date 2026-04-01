import Link from "next/link";
import { CheckCircle, Copy, Search, Home, Download, Mail, Calendar, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export default async function ResultPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  return (
    <div className="flex-grow flex items-center justify-center px-4 py-12 bg-surface">
      <div className="max-w-4xl w-full">
        {/* Asymmetric Bento-style Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Main Success Card */}
          <div className="md:col-span-8 bg-surface-container-lowest rounded-xl p-8 md:p-12 border-b-4 border-primary shadow-sm">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-full bg-primary-fixed flex items-center justify-center text-primary shrink-0 shadow-sm border border-primary-fixed-dim/30">
                <CheckCircle className="w-10 h-10" />
              </div>
              <div>
                <h1 className="text-3xl font-extrabold text-primary tracking-tight font-headline">Nộp đơn thành công!</h1>
                <p className="text-on-surface-variant font-medium mt-1">Hồ sơ của bạn đã được tiếp nhận chính thức.</p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-secondary mb-3 block">
                  Mã hồ sơ ứng tuyển (Application ID)
                </label>
                <div className="bg-surface-container-low rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 border border-outline-variant/20 shadow-inner">
                  <span className="text-4xl md:text-5xl font-black text-primary tracking-tighter truncate max-w-full">
                    {id}
                  </span>
                  <Button className="flex items-center gap-2 bg-primary text-on-primary px-6 py-6 rounded-lg font-bold hover:bg-primary-container transition-all shadow-md shrink-0">
                    <Copy className="w-4 h-4" />
                    Sao chép mã ID
                  </Button>
                </div>
              </div>

              <div className="prose prose-slate bg-surface-container-lowest/50 p-6 rounded-xl border border-outline-variant/10">
                <h3 className="text-lg font-bold text-primary flex items-center gap-2 mb-4">
                  <FileText className="w-5 h-5" />
                  Hướng dẫn tiếp theo:
                </h3>
                <ul className="space-y-4 text-on-surface-variant list-none p-0 m-0">
                  <li className="flex gap-3 leading-relaxed">
                    <Mail className="text-primary w-5 h-5 shrink-0 mt-0.5" />
                    <span>Chúng tôi sẽ liên lạc hoặc gửi xác nhận qua số điện thoại/email mà phụ huynh đã đăng ký.</span>
                  </li>
                  <li className="flex gap-3 leading-relaxed">
                    <Calendar className="text-primary w-5 h-5 shrink-0 mt-0.5" />
                    <span>Lịch xét duyệt hoặc sơ tuyển thi năng khiếu sẽ được thông báo cụ thể trên website.</span>
                  </li>
                  <li className="flex gap-3 leading-relaxed">
                    <FileText className="text-primary w-5 h-5 shrink-0 mt-0.5" />
                    <span>Vui lòng chuẩn bị sẵn bản cứng các giấy tờ như Học bạ, Giấy chứng nhận thành tích để nộp trực tiếp khi trúng tuyển.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* QR & Secondary Actions Column */}
          <div className="md:col-span-4 flex flex-col gap-6">
            
            {/* Action Buttons */}
            <div className="flex flex-col gap-3 h-full justify-between">
              {/* QR Card Placeholder */}
              <div className="bg-surface-container-lowest rounded-xl p-8 flex flex-col items-center justify-center text-center shadow-sm border border-outline-variant/10">
                <div className="relative w-48 h-48 mb-4 p-2 bg-white rounded-lg border-2 border-primary/10 flex items-center justify-center">
                   <div className="w-full h-full border-4 border-dashed border-outline-variant/30 flex items-center justify-center flex-col text-outline-variant">
                     <FileText className="w-12 h-12 mb-2" />
                     <span className="text-xs font-semibold">QR Code</span>
                   </div>
                </div>
                <p className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Mã tra cứu nhanh</p>
              </div>

              <div className="space-y-3 mt-auto">
                <Link href={`/lookup`} className="w-full bg-surface-container-highest text-primary font-bold py-6 rounded-xl flex items-center justify-center gap-2 hover:bg-primary-fixed transition-colors border-none shadow-sm">
                  <Search className="w-5 h-5" />
                  Tra cứu đơn khác
                </Link>
                <Link href="/" className="w-full border-2 border-primary text-primary font-bold py-6 rounded-xl flex items-center justify-center gap-2 hover:bg-primary hover:text-on-primary transition-all">
                  <Home className="w-5 h-5" />
                  Về trang chủ
                </Link>
                <Button className="w-full bg-tertiary-container text-white font-bold py-6 rounded-xl flex items-center justify-center gap-2 hover:bg-tertiary shadow-md">
                  <Download className="w-5 h-5" />
                  Tải file đối chiếu
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Motivational Message */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-surface-container-low rounded-full border border-primary/10 shadow-sm">
            <span className="text-tertiary font-bold font-headline tracking-wide">"Khẳng định bản lĩnh - Bứt phá giới hạn"</span>
          </div>
        </div>
      </div>
    </div>
  );
}
