import { handleLineClick } from '../../constants';

const Navbar = () => (
    <nav className="fixed w-full z-[999] bg-white/80 backdrop-blur-md border-b border-stone-200">
        <a href="#main-content" className="skip-link">ข้ามไปยังเนื้อหาหลัก</a>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
                <button onClick={() => window.scrollTo(0,0)} className="flex items-center gap-2 cursor-pointer bg-transparent border-0 p-0 hover:opacity-80 transition focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 rounded" aria-label="กลับไปด้านบนสุดของหน้า">
                    <div className="w-8 h-8 bg-brand-teal rounded-lg flex items-center justify-center text-white font-brand font-bold text-xl shadow-md" aria-hidden="true">S</div>
                    <span className="font-brand text-xl font-bold text-stone-800 tracking-tight">SnapPoint</span>
                </button>
                <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-stone-600">
                    <a href="#how-it-works" className="hover:text-brand-teal transition">วิธีใช้งาน</a>
                    <a href="#features" className="hover:text-brand-teal transition">จุดเด่น</a>
                    <a href="#pricing" className="hover:text-brand-teal transition">ราคา</a>
                </div>
                <button onClick={handleLineClick} className="bg-brand-dark hover:bg-stone-700 text-white px-5 py-2 rounded-full text-sm font-bold transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2">
                    ทดลองฟรี 30 วัน
                </button>
            </div>
        </div>
    </nav>
);

export default Navbar;
