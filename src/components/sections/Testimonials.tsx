import { ICONS } from '../../constants';

const Testimonials = () => (
    <section className="py-24 bg-stone-50 border-t border-stone-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <span className="text-brand-teal font-bold tracking-widest text-sm uppercase">Success Stories</span>
                <h2 className="text-3xl font-bold text-stone-900 mt-2">เสียงตอบรับจากเจ้าของร้านตัวจริง</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {/* Real Testimonial */}
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 relative">
                    <div className="absolute -top-4 -left-2 text-6xl text-brand-teal opacity-20 font-serif">"</div>
                    <p className="text-stone-600 mb-6 italic leading-relaxed">
                        "เริ่มใช้ SnapPoint มา 2 เดือน ลูกค้าประจำกลับมาซื้อซ้ำบ่อยขึ้น เพราะเขาสนุกกับการสะสมแต้มที่ง่ายและรวดเร็ว ไม่ต้องพกบัตรให้ยุ่งยาก"
                    </p>
                    <div className="flex items-center gap-4 border-t border-stone-100 pt-4">
                        <div className="w-12 h-12 bg-stone-200 rounded-full overflow-hidden flex items-center justify-center">
                            <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Ton" alt="คุณต้น" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <p className="font-bold text-sm text-stone-900">คุณต้น</p>
                            <p className="text-xs text-stone-500">เจ้าของร้าน Slow Bar Café</p>
                        </div>
                    </div>
                </div>

                {/* Placeholder 1 */}
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 relative opacity-80">
                    <div className="absolute top-4 right-4">
                        <span className="bg-brand-amber/10 text-brand-amber text-[10px] font-bold px-2 py-1 rounded-full border border-brand-amber/20">Waiting for you</span>
                    </div>
                    <div className="h-24 flex items-center justify-center mb-6 text-stone-300">
                        <ICONS.Coffee className="w-12 h-12 opacity-20" aria-hidden="true" />
                    </div>
                    <p className="text-stone-400 text-center text-sm mb-6">
                        "พื้นที่สำหรับเรื่องราวความสำเร็จของคุณ... มาร่วมเป็นส่วนหนึ่งของร้านค้า Pilot ที่เติบโตไปด้วยกัน"
                    </p>
                    <div className="flex items-center justify-center border-t border-stone-100 pt-4">
                        <p className="text-sm font-bold text-stone-300">Your Story Here</p>
                    </div>
                </div>

                {/* Placeholder 2 */}
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 relative opacity-80">
                    <div className="absolute top-4 right-4">
                        <span className="bg-brand-amber/10 text-brand-amber text-[10px] font-bold px-2 py-1 rounded-full border border-brand-amber/20">Waiting for you</span>
                    </div>
                    <div className="h-24 flex items-center justify-center mb-6 text-stone-300">
                        <ICONS.Zap className="w-12 h-12 opacity-20" aria-hidden="true" />
                    </div>
                    <p className="text-stone-400 text-center text-sm mb-6">
                        "เปลี่ยนลูกค้าขาจรให้เป็นขาประจำด้วยเครื่องมือที่ออกแบบมาเพื่อร้านเล็กโดยเฉพาะ"
                    </p>
                    <div className="flex items-center justify-center border-t border-stone-100 pt-4">
                        <p className="text-sm font-bold text-stone-300">Your Story Here</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Testimonials;
