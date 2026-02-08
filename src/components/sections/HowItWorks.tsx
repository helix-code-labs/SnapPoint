import { ICONS } from '../../constants';

const HowItWorks = () => (
    <section id="how-it-works" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16"><h2 className="text-3xl font-bold text-stone-900">เริ่มต้นง่ายๆ ใน 3 ขั้นตอน</h2><p className="text-stone-500 mt-4">ไม่ต้องมีความรู้เรื่อง Tech ก็ทำได้เอง</p></div>
            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { step: "1", title: "สมัครใช้งาน", desc: "ลงทะเบียนร้านค้า และตั้งค่าธีมสีร้านของคุณใน 2 นาที", icon: <ICONS.Smartphone className="w-8 h-8 text-brand-teal" aria-hidden="true"/> },
                    { step: "2", title: "ปริ้นท์ QR Code", desc: "ระบบจะสร้าง QR Code เฉพาะของร้านคุณ ให้คุณปริ้นท์แปะที่เคาน์เตอร์", icon: <ICONS.Printer className="w-8 h-8 text-brand-teal" aria-hidden="true"/> },
                    { step: "3", title: "เปิดร้านได้เลย", desc: "ลูกค้าสแกนปุ๊บ ระบบทำงานปั๊บ คุณแค่รอฟังเสียงแจ้งเตือน", icon: <ICONS.Zap className="w-8 h-8 text-brand-teal" aria-hidden="true"/> }
                ].map((item, i) => (
                    <div key={i} className="text-center p-6 rounded-2xl bg-stone-50 border border-stone-100">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-stone-100 relative">
                            <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-dark text-white rounded-full flex items-center justify-center font-bold text-sm">{item.step}</div>
                            {item.icon}
                        </div>
                        <h3 className="text-xl font-bold text-stone-800 mb-2">{item.title}</h3>
                        <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default HowItWorks;
