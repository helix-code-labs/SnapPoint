import { ICONS } from '../../constants';

const Features = () => (
    <section id="features" className="py-24 bg-brand-dark text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" aria-hidden="true"></div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
            <div className="text-center mb-20"><span className="text-brand-teal font-bold tracking-widest text-sm uppercase">Why SnapPoint?</span><h2 className="text-3xl md:text-4xl font-bold mt-2">ทำงานอัตโนมัติ 100%</h2></div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                    <div className="flex gap-4">
                        <div className="bg-white/10 p-3 rounded-xl h-fit"><ICONS.Volume className="w-6 h-6 text-brand-teal" aria-hidden="true" /></div>
                        <div><h3 className="text-xl font-bold mb-2">Audio Feedback (ใช้หูแทนตา)</h3><p className="text-stone-400 text-sm leading-relaxed">เสียงแจ้งเตือน "ติ๊ง!" เมื่อลูกค้าสแกนสำเร็จ ให้คุณรู้ทันทีโดยไม่ต้องเงยหน้าจากแก้วกาแฟ</p></div>
                    </div>
                    <div className="flex gap-4">
                        <div className="bg-white/10 p-3 rounded-xl h-fit"><ICONS.Gift className="w-6 h-6 text-brand-teal" aria-hidden="true" /></div>
                        <div><h3 className="text-xl font-bold mb-2">Multi-tier Rewards</h3><p className="text-stone-400 text-sm leading-relaxed">ระบบรางวัลขั้นบันได (ครบ 5 ได้เล็ก, ครบ 10 ได้ใหญ่) กระตุ้นให้ลูกค้ากลับมาถี่ขึ้น</p></div>
                    </div>
                    <div className="flex gap-4">
                        <div className="bg-white/10 p-3 rounded-xl h-fit"><ICONS.Lock className="w-6 h-6 text-brand-teal" aria-hidden="true" /></div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">ระบบความปลอดภัย (รันเบื้องหลัง)</h3>
                            <ul className="text-stone-400 text-sm leading-relaxed list-disc list-inside">
                                <li>Digital Shutter ปิดรับสแกนเมื่อร้านปิด</li>
                                <li>แจ้งเตือน LINE เจ้าของร้านทุกยอด</li>
                                <li>ระบบ Cooldown ป้องกันการปั๊มแต้ม</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="bg-white/5 rounded-3xl p-8 border border-white/10 backdrop-blur-sm relative text-center">
                    <p className="text-lg italic text-stone-300 mb-6">"Slow Bar Café by คุณต้น เริ่มใช้ SnapPoint มา 2 เดือน ลูกค้าประจำกลับมาซื้อซ้ำบ่อยขึ้น เพราะเขาสนุกกับการสะสมแต้มที่ง่ายและรวดเร็ว"</p>
                    <div className="flex items-center justify-center gap-3">
                        <div className="w-10 h-10 bg-stone-700 rounded-full overflow-hidden flex items-center justify-center"><img src="https://api.dicebear.com/7.x/notionists/svg?seed=Ton" alt="Ton" /></div>
                        <div className="text-left">
                            <p className="font-bold text-sm">คุณต้น</p>
                            <p className="text-xs text-stone-500">เจ้าของร้านกาแฟ Slow Bar</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Features;
