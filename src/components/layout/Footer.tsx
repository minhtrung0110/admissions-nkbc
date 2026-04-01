import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full py-8 mt-auto bg-surface-container-low border-t border-outline-variant/20">
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-8 max-w-7xl mx-auto gap-4">
        <div className="flex items-center gap-4 text-center md:text-left">
          <p className="text-xs text-on-surface-variant max-w-md">
            © 2026 Trường PTNK TDTT Bình Chánh. Tất cả quyền được bảo lưu. <br className="md:hidden" />
            Website đăng ký dự tuyển lớp 10 trực tuyến.
          </p>
        </div>
        <div className="flex gap-6 text-xs text-on-surface-variant">
          <Link href="#" className="hover:underline transition-all">Liên hệ</Link>
          <Link href="#" className="hover:underline transition-all">Chính sách bảo mật</Link>
        </div>
      </div>
    </footer>
  );
}
