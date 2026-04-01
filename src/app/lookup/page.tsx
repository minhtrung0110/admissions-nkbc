"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, Info, Clock, CheckCircle, Headphones, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export default function LookupPage() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm.trim()) {
      toast.error("Vui lòng nhập mã hồ sơ!");
      return;
    }
    // TODO: Connect with actual Supabase lookup logic
    // Currently, just routing to a result page for prototyping
    router.push(`/result/${searchTerm}`);
  };

  return (
    <div className="flex-grow flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-12 pb-24 px-6 md:px-8 overflow-hidden bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 relative z-10">
            <span className="inline-block px-4 py-1 rounded-full bg-primary-fixed text-on-primary-fixed-variant text-xs font-bold tracking-widest uppercase mb-6 shadow-sm border border-primary-fixed-dim/30">
              Hệ thống tuyển sinh
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-primary mb-6 leading-[1.1] font-headline">
              Tra cứu <br /> <span className="text-tertiary">Trạng thái hồ sơ</span>
            </h1>
            <p className="text-lg text-on-surface-variant max-w-xl mb-10 leading-relaxed">
              Vui lòng nhập mã hồ sơ đã được cấp sau khi hoàn tất thủ tục đăng ký trực tuyến để kiểm tra tiến độ xử lý đơn tuyển sinh của bạn.
            </p>
            
            {/* Search Input Area */}
            <form onSubmit={handleSearch} className="relative max-w-2xl group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary-container/10 blur-2xl rounded-xl group-focus-within:opacity-100 transition-opacity opacity-50"></div>
              <div className="relative flex flex-col sm:flex-row gap-4 p-2 bg-surface-container-lowest rounded-xl shadow-lg shadow-primary/5 border border-outline-variant/20">
                <div className="flex-grow relative">
                  <Info className="absolute left-4 top-1/2 -translate-y-1/2 text-outline w-5 h-5" />
                  <Input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Nhập mã hồ sơ (Ví dụ: NK26-...)"
                    className="w-full pl-12 pr-4 h-14 bg-surface-container-low border-none focus-visible:ring-0 focus-visible:bg-surface-container-lowest text-primary font-medium text-lg transition-all rounded-lg placeholder:text-outline/60"
                  />
                </div>
                <Button type="submit" className="h-14 bg-gradient-to-r from-primary to-primary-container text-white px-8 rounded-lg font-bold text-lg hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 shadow-md">
                  <Search className="w-5 h-5" />
                  Tra cứu
                </Button>
              </div>
            </form>
            
          </div>
          
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 relative transform rotate-2 border border-outline-variant/10">
              <img
                alt="Student looking at status"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdmAdArTqqdkhW_H1hmvjwBs6dk4BX848tPLWcrIBoWDxnCaMTSQuPfu87DCUyozbGX1V1yVg_-d8X5HbEYG_V2DzryHuyACCkStKmTgkG1931w8JAaTaEyjCy6MBtijVcJkV7K8zHeAIbjGgR5Bq8o8Vjb0AUL7e0Kc5GS56o8uCqeorUm24bofBdUuRSUMicmNAC90UUj79IGXIDYD54o1OaT4ZOysHXRVe2HUINT5ESLpUPEbdOSGXb4A4K6zWkk3ltN0qC2I8"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
            </div>
            
            {/* Status Card Decoration */}
            <div className="absolute -left-12 bottom-12 bg-surface-container-lowest p-6 rounded-xl shadow-xl shadow-black/5 border border-outline-variant/20 min-w-[240px] transform -rotate-3">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-on-surface-variant font-medium">Trạng thái mới</p>
                  <p className="text-sm font-bold text-primary">Đã tiếp nhận</p>
                </div>
              </div>
              <div className="h-1.5 w-full bg-surface-container-low rounded-full overflow-hidden">
                <div className="h-full bg-green-500 w-1/3"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Status Tracking Section */}
      <section className="px-6 md:px-8 pb-24 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-2 font-headline">Quy trình xử lý hồ sơ</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-container rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface-container-low p-8 rounded-2xl relative overflow-hidden group shadow-sm">
              <span className="absolute -right-4 -bottom-4 text-9xl font-black text-on-surface opacity-5">01</span>
              <div className="w-14 h-14 rounded-xl bg-primary-fixed flex items-center justify-center text-primary mb-6 shadow-sm">
                <CheckCircle className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Đã nộp hồ sơ</h3>
              <p className="text-on-surface-variant leading-relaxed">Hồ sơ của bạn đã được tiếp nhận trên hệ thống điện tử.</p>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-2xl border border-primary/10 relative overflow-hidden group shadow-md">
              <span className="absolute -right-4 -bottom-4 text-9xl font-black text-on-surface opacity-5">02</span>
              <div className="w-14 h-14 rounded-xl bg-secondary-container flex items-center justify-center text-primary mb-6 shadow-sm">
                <Clock className="w-7 h-7 animate-pulse" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Đang xét duyệt</h3>
              <p className="text-on-surface-variant leading-relaxed">Các hội đồng đang kiểm tra tính hợp lệ và năng khiếu của thí sinh.</p>
            </div>
            <div className="bg-surface-container-low p-8 rounded-2xl relative overflow-hidden group shadow-sm">
              <span className="absolute -right-4 -bottom-4 text-9xl font-black text-on-surface opacity-5">03</span>
              <div className="w-14 h-14 rounded-xl bg-tertiary-fixed flex items-center justify-center text-tertiary mb-6 shadow-sm">
                <CheckCircle className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Thông báo kết quả</h3>
              <p className="text-on-surface-variant leading-relaxed">Kết quả chính thức sẽ được công bố tại đây kèm theo hướng dẫn.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-8 pb-24 bg-surface">
        <div className="max-w-7xl mx-auto rounded-3xl p-10 lg:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 bg-gradient-to-r from-primary to-primary-container shadow-xl">
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 font-headline">Gặp khó khăn trong việc tra cứu?</h2>
            <p className="text-blue-100 text-lg leading-relaxed mb-8">
              Đội ngũ hỗ trợ tuyển sinh luôn sẵn sàng giải đáp các thắc mắc của bạn về mã hồ sơ và quy trình xét tuyển.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="secondary" className="bg-white text-primary hover:bg-surface-container px-8 py-6 rounded-lg font-bold flex items-center gap-2">
                <Headphones className="w-5 h-5" />
                Hotline Hỗ trợ
              </Button>
              <Button variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white/10 px-8 py-6 rounded-lg font-bold flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Gửi Email
              </Button>
            </div>
          </div>
          <div className="relative z-10 hidden md:flex items-center justify-center">
            <div className="w-48 h-48 rounded-full border-8 border-white/10 flex items-center justify-center shadow-inner">
              <Headphones className="text-white w-20 h-20 opacity-80" />
            </div>
          </div>
          
          {/* Abstract patterns */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-tertiary/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl"></div>
        </div>
      </section>
    </div>
  );
}
