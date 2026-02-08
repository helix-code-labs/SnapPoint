import { ICONS } from '../../constants';

const PainPoints = () => (
    <section id="pain-points" className="py-24 bg-stone-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-bold text-stone-900 mb-4">ทำไมร้านส่วนใหญ่ ถึงทำระบบสมาชิกไม่สำเร็จ?</h2>
                <p className="text-stone-500 text-lg">อุปสรรคเดิมๆ ที่ทำให้คุณเสียโอกาสสร้างลูกค้าประจำ</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { icon: <ICONS.XCircle className="w-10 h-10 text-red-400" aria-hidden="true" />, title: "POS แพงเกินจำเป็น", desc: "เครื่องละ 2-3 หมื่นบาท เกินความจำเป็นสำหรับร้านขนาดเล็กที่ยอดขายยังไม่นิ่ง" },
                    { icon: <ICONS.Smartphone className="w-10 h-10 text-red-400" aria-hidden="true" />, title: "แอปทั่วไปยุ่งยาก", desc: "ต้องคอยหยิบมือถือมาสแกนให้ลูกค้า ตอนยุ่งๆ ทำไม่ทัน ลูกค้าก็ไม่อยากโหลดแอปใหม่" },
                    { icon: <ICONS.ShieldCheck className="w-10 h-10 text-red-400" aria-hidden="true" />, title: "ลูกค้ามักลืมพก", desc: "บัตรกระดาษต้นทุนจม พิมพ์ทิ้งพิมพ์ขว้าง ลูกค้าทำหายก็จบกัน เก็บ Data ไม่ได้" }
                ].map((item, idx) => (
                    <div key={idx} className="p-8 rounded-3xl bg-white border border-stone-100 hover:shadow-lg transition-all text-center md:text-left">
                        <div className="mb-4 inline-block bg-red-50 p-3 rounded-2xl shadow-sm">{item.icon}</div>
                        <h3 className="text-xl font-bold text-stone-900 mb-3">{item.title}</h3>
                        <p className="text-stone-600 leading-relaxed text-sm">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default PainPoints;
