import { handleLineClick, ICONS } from '../../constants';

const ReadyToStart = () => (
    <section className="py-20 bg-brand-teal relative overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" aria-hidden="true"></div>
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-brand-amber/20 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                พร้อมเปลี่ยน "ลูกค้าขาจร" ให้เป็น "ขาประจำ" หรือยัง?
            </h2>
            <p className="text-teal-100 text-lg mb-10 max-w-2xl mx-auto">
                เริ่มต้นใช้งานฟรี 30 วัน ไม่มีข้อผูกมัด เลิกใช้เมื่อไหร่ก็ได้ <br className="hidden sm:inline" />
                ติดตั้งเสร็จใน 5 นาที โดยที่คุณไม่ต้องมีความรู้เรื่อง Tech
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button 
                    onClick={handleLineClick} 
                    className="px-8 py-4 bg-white text-brand-teal rounded-xl font-bold text-lg shadow-xl hover:bg-teal-50 transition-transform hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-teal flex items-center gap-2"
                >
                    <ICONS.Smartphone className="w-5 h-5" aria-hidden="true" />
                    เริ่มต้นใช้งานฟรี 30 วัน
                </button>
            </div>
            <p className="mt-6 text-sm text-teal-200/80">
                * สิทธิ์ราคา 199฿/เดือน ตลอดชีพ สงวนสิทธิ์สำหรับผู้สมัครช่วง Launch เท่านั้น
            </p>
        </div>
    </section>
);

export default ReadyToStart;
