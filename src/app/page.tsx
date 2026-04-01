import Link from "next/link";
import { ArrowRight, Search, Trophy, School, Dumbbell } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-primary-container">
        <div className="absolute inset-0 z-0">
          <img
            alt="Athletic students in action"
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2439c89AfMTFY57tdDkC_aGtUmAsbUKFD_Og-yW5xd9Zbucah9ek08NLWF3aTYkTEZHkmC3P9DuZG2rVjY_4WvMmE28eiHgiEC5HP0VIL9Jo7VrLHqTypm_t3E5qICsa3m5zmFXrZ7Lmlfq4ZCj64f1zIeVOLeoBcgR8WmsDGr8bUmjKv3UT18vQQVddsk0DKCsj0BzBKmm7rIPBTjnmm9nqSplQDweZ3_ckTkW0GC_P58x5wZZmjXN-tdTb3Xz8BPGfJnttAjRQ"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent opacity-80"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-tertiary-container text-on-tertiary-container font-medium text-sm w-fit border border-tertiary-container/50">
              <Trophy className="w-4 h-4" />
              <span>Tuyển sinh Khóa 2026 - 2029</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight font-headline drop-shadow-sm">
              Đăng ký dự tuyển lớp 10 <br />
              <span className="text-primary-fixed">Năng khiếu TDTT 2026</span>
            </h1>
            <p className="text-xl text-blue-100/90 max-w-xl leading-relaxed">
              Nơi ươm mầm những tài năng thể thao chuyên nghiệp song hành cùng nền tảng kiến thức học thuật vững chắc. Khẳng định bản lĩnh, bứt phá giới hạn.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/enroll" className="bg-gradient-to-r from-[#00236f] to-[#1e3a8a] text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 hover:scale-105 transition-transform shadow-xl shadow-primary/20">
                Bắt đầu đăng ký ngay
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/lookup" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                <Search className="w-5 h-5" />
                Tra cứu đơn đã nộp
              </Link>
            </div>
          </div>
          <div className="hidden lg:block relative">
            <div className="absolute -inset-4 bg-tertiary/20 rounded-xl blur-3xl"></div>
            <div className="relative bg-surface-container-lowest/5 backdrop-blur-xl border border-white/10 p-8 rounded-xl">
              <img
                alt="Student athlete portrait"
                className="rounded-lg shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 w-full object-cover aspect-[4/5]"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCo4P4CHddotmvvxYXV0PhXeTivgvBXGyq13ZOXJMBDiKjzDgVMtlrsfpRU2omI0U8S-VbHp3beM8ll1is0y9B8qzWev8fbCAqS8C6ZfN9lgmcryfPyCmzLPpOySylEqa93WCM9Wm84jxycdHw07IRROC9XZTHDUQqFJ6dcsY0KIfHhOCNYNb0Uv6dPTaV2TNVbgEH0gxQBbnszZ3RCQ_1LrJiuJehJEvU77QYllwNlamTPKV_REDQsFHo_4ekD1epSc31gfHYz4tk"
              />
              <div className="mt-6 flex justify-between items-end">
                <div>
                  <p className="text-white/60 text-sm uppercase tracking-widest font-medium">Hạng mục</p>
                  <h3 className="text-white text-2xl font-bold">15+ Bộ môn chuyên sâu</h3>
                </div>
                <div className="text-right">
                  <span className="text-4xl font-black text-tertiary-container">2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-surface px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-5 space-y-6">
              <h2 className="text-4xl font-extrabold text-primary font-headline tracking-tight">Về Trường PTNK TDTT Bình Chánh</h2>
              <div className="w-20 h-1.5 bg-tertiary rounded-full"></div>
              <p className="text-on-surface-variant text-lg leading-relaxed">
                Thành lập với sứ mệnh trở thành trung tâm đào tạo tài năng trẻ hàng đầu khu vực, chúng tôi cung cấp môi trường học tập hiện đại kết hợp chương trình huấn luyện thể thao chuyên nghiệp.
              </p>
              <p className="text-on-surface-variant text-lg leading-relaxed">
                Học sinh không chỉ được rèn luyện thể chất mà còn được bồi dưỡng kỹ năng sống và tư duy học thuật đỉnh cao để sẵn sàng cho tương lai.
              </p>
            </div>
            
            <div className="md:col-span-4 bg-surface-container-low p-8 rounded-xl flex flex-col justify-between hover:bg-surface-container-high transition-colors border border-outline-variant/20">
              <Dumbbell className="text-primary w-10 h-10" />
              <div className="mt-12">
                <h3 className="text-xl font-bold text-primary mb-2">Cơ sở vật chất</h3>
                <p className="text-on-surface-variant text-sm">Hệ thống nhà thi đấu, sân bãi và hồ bơi đạt chuẩn quốc gia.</p>
              </div>
            </div>
            
            <div className="md:col-span-3 bg-primary text-white p-8 rounded-xl flex flex-col justify-between shadow-xl shadow-primary/10">
              <Trophy className="text-tertiary-fixed w-10 h-10" />
              <div className="mt-12">
                <h3 className="text-xl font-bold mb-2">Thành tích</h3>
                <p className="text-blue-100/90 text-sm">Hơn 500 huy chương các cấp trong 5 năm qua.</p>
              </div>
            </div>
            
            <div className="md:col-span-7 relative h-64 rounded-xl overflow-hidden group">
              <img
                alt="Football stadium"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGlac45_oaf4GTLCYEilQIv5-IAX40iyt5CV2it8HJYX5zYpg3wrOBzFFXdu9XKkZZZNGEKfTSJk-kRT_Nj1XK3zPRvANDJtgzl99jTOdc3eKlqp_WV_8uUFmTdLOQA4xcozw3d63CcuwdhESIQjkEbvWWr1-plUDPJYgK-soNowoaNOnN_1ah-lw_JLEb4jquSodw3Z65MVpFto2w_fzRXHdDPfKsHlP3R7ud_39W3f_zLtJ2uIjPjLR7rMq8fROJHzbalwxC7WA"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-8 flex items-end">
                <h4 className="text-white text-2xl font-bold">Môi trường thi đấu chuyên nghiệp</h4>
              </div>
            </div>
            
            <div className="md:col-span-5 bg-tertiary-container text-on-tertiary-container p-8 rounded-xl flex items-center gap-6 shadow-md">
              <div className="bg-tertiary p-4 rounded-xl shadow-inner">
                <School className="text-white w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Đội ngũ Huấn luyện viên</h3>
                <p className="text-on-tertiary-container/80 text-sm mt-1">Các kiện tướng quốc gia và giáo viên tâm huyết.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Steps */}
      <section className="py-24 bg-surface-container-low border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl font-extrabold text-primary font-headline">Quy trình tuyển sinh đơn giản</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">Thực hiện theo các bước sau để chính thức gia nhập đội tuyển cho năm học 2026-2027.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-12">
            <div className="relative p-8 bg-surface rounded-2xl border-b-4 border-primary shadow-sm">
              <div className="absolute -top-6 left-8 w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center font-bold text-xl shadow-lg shadow-primary/20">1</div>
              <h3 className="text-xl font-bold text-primary mb-3 mt-4">Nộp hồ sơ trực tuyến</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">Điền đầy đủ thông tin cá nhân và đính kèm các chứng nhận thành tích thể thao (nếu có).</p>
            </div>
            <div className="relative p-8 bg-surface rounded-2xl border-b-4 border-tertiary shadow-sm mt-8 md:mt-0">
              <div className="absolute -top-6 left-8 w-12 h-12 bg-tertiary text-white rounded-xl flex items-center justify-center font-bold text-xl shadow-lg shadow-tertiary/20">2</div>
              <h3 className="text-xl font-bold text-primary mb-3 mt-4">Kiểm tra năng khiếu</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">Tham gia các bài kiểm tra thể lực chung và năng khiếu chuyên môn theo bộ môn đăng ký.</p>
            </div>
            <div className="relative p-8 bg-surface rounded-2xl border-b-4 border-primary shadow-sm mt-8 md:mt-0">
              <div className="absolute -top-6 left-8 w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center font-bold text-xl shadow-lg shadow-primary/20">3</div>
              <h3 className="text-xl font-bold text-primary mb-3 mt-4">Phỏng vấn & Nhập học</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">Phỏng vấn trực tiếp cùng Hội đồng tuyển sinh và hoàn tất thủ tục nhập học nếu trúng tuyển.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 md:px-8">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-primary to-primary-container rounded-3xl p-10 md:p-14 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-tertiary/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24 blur-2xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 font-headline leading-tight">Bạn đã sẵn sàng để trở thành <br className="hidden md:block"/>nhà vô địch tương lai?</h2>
            <p className="text-blue-100/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Hạn chót nhận hồ sơ dự tuyển lớp 10 cho năm học 2026 là ngày 30/05/2026. Đừng bỏ lỡ cơ hội bứt phá!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/enroll" className="bg-tertiary-container hover:bg-tertiary text-white px-10 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl shadow-tertiary/20">
                Đăng ký dự tuyển ngay
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
