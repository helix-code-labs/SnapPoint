import { ICONS, handleLineClick } from '../../constants';

const Pricing = () => (
    <section id="pricing" className="py-24 bg-white relative">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Break-even Calculator */}
            <div className="bg-brand-teal/5 border border-brand-teal/20 rounded-2xl p-6 mb-12 text-center max-w-2xl mx-auto">
                <p className="text-brand-teal font-bold text-lg mb-2">💡 ความคุ้มค่าที่คุณจับต้องได้</p>
                <p className="text-stone-600 text-sm">เพียงขายกาแฟเพิ่มได้แค่ <span className="font-bold text-stone-900 underline">13 แก้ว/เดือน</span> ก็คุ้มค่าระบบแล้ว (คิดจากกำไร 15 บาท/แก้ว)</p>
            </div>

            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-stone-900">ราคาที่แฟร์ที่สุดสำหรับร้านเล็ก</h2>
                <p className="text-stone-500 mt-4">เริ่มต้นทดลองใช้ฟรี 30 วัน ไม่มีข้อผูกมัด</p>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start justify-center">
                
                {/* Starter Plan */}
                <div className="flex-1 w-full max-w-sm bg-white border-2 border-brand-teal rounded-3xl p-8 shadow-2xl relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                    <div className="absolute top-0 right-0 bg-brand-teal text-white text-xs font-bold px-4 py-1 rounded-bl-xl">แนะนำ</div>
                    <h3 className="text-xl font-bold text-stone-800 mb-2">Starter Plan</h3>
                    <p className="text-sm text-stone-500 mb-6">สำหรับร้านที่ต้องการระบบที่ "เวิร์ค" ทันที</p>
                    
                    <div className="flex items-baseline gap-1 mb-2">
                        <span className="text-5xl font-bold text-stone-900">199</span>
                        <span className="text-stone-500 font-medium">บาท / เดือน</span>
                    </div>
                    <p className="text-xs text-brand-teal mb-8 font-semibold bg-teal-50 inline-block px-2 py-1 rounded">🔥 โปรโมชั่น: สแกนได้ไม่จำกัด</p>

                    <div className="space-y-4 mb-8">
                        {[
                            "ทดลองใช้ฟรี 30 วันแรก",
                            "สแกนสะสมแต้มได้ไม่จำกัด",
                            "สมาชิกสูงสุด 1,000 คน",
                            "ระบบ Auto-Reply เสียงแจ้งเตือน",
                            "Dashboard ดูยอดรายวัน"
                        ].map((feat, i) => (
                            <div key={i} className="flex items-center gap-3 text-sm text-stone-600">
                                <ICONS.Check className="w-5 h-5 text-brand-teal flex-shrink-0" aria-hidden="true" />
                                {feat}
                            </div>
                        ))}
                    </div>

                    <button onClick={handleLineClick} className="w-full py-4 bg-brand-dark text-white rounded-xl font-bold hover:bg-stone-800 transition-colors shadow-lg focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2">
                        เริ่มต้นใช้งานฟรี 30 วัน
                    </button>
                    <p className="text-center text-[10px] text-stone-400 mt-3">หลังจากนั้น 199 บาท/เดือน (ยกเลิกได้ตลอด)</p>
                    
                    <div className="mt-4 bg-teal-50 border border-teal-100 rounded-lg p-3 text-center">
                        <p className="text-[10px] text-brand-teal font-semibold">🔒 ผู้สมัครช่วง Launch รับราคา 199฿ ตลอดชีพ</p>
                    </div>
                </div>

                {/* Add-ons */}
                <div className="flex-1 w-full max-w-sm bg-stone-50 rounded-3xl p-8 border border-stone-200">
                    <h3 className="text-xl font-bold text-stone-800 mb-4">Add-ons Store</h3>
                    <p className="text-sm text-stone-500 mb-6">เลือกซื้อเพิ่มได้ตามใจเมื่อร้านโตขึ้น</p>
                    
                    <div className="space-y-3">
                        {[
                            { name: "เปลี่ยนธีม & โลโก้", price: "+49", desc: "Custom Branding" },
                            { name: "ลบโลโก้ SnapPoint", price: "+99", desc: "White Label" },
                            { name: "ระบบระดับสมาชิก", price: "+119", desc: "Membership Tiers" },
                            { name: "ดึงข้อมูล Excel", price: "+129", desc: "Data Export" }
                        ].map((addon, i) => (
                            <div key={i} className="flex justify-between items-center bg-white p-3 rounded-xl border border-stone-100 shadow-sm hover:border-brand-teal/50 transition-colors cursor-pointer">
                                <div>
                                    <p className="font-bold text-stone-700 text-xs">{addon.name}</p>
                                    <p className="text-[10px] text-stone-400">{addon.desc}</p>
                                </div>
                                <span className="text-xs font-bold text-brand-teal bg-teal-50 px-2 py-1 rounded">{addon.price} บ.</span>
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-xs text-stone-400 mt-6">* ไม่บังคับซื้อ จ่ายเท่าที่ใช้</p>
                </div>
            </div>
            </div>
    </section>
);

export default Pricing;
