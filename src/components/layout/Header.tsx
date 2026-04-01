import Link from 'next/link';
import { Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="full-width top-0 sticky z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant/10">
      <nav className="flex justify-between items-center px-6 md:px-8 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <Link href="/">
            <span className="text-lg md:text-xl font-bold text-tertiary tracking-tighter">PTNK TDTT BÌNH CHÁNH</span>
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-8 font-medium text-sm tracking-tight text-on-surface-variant">
          <Link href="/" className="hover:text-primary transition-colors duration-300">
            Trang chủ
          </Link>
          <Link href="/enroll" className="hover:text-primary transition-colors duration-300">
            Đăng ký dự tuyển
          </Link>
          <Link href="/lookup" className="hover:text-primary transition-colors duration-300">
            Tra cứu
          </Link>
        </div>
        <button className="md:hidden text-primary p-2" aria-label="Menu">
          <Menu className="w-6 h-6" />
        </button>
      </nav>
    </header>
  );
}
