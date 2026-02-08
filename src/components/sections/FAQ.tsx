import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ICONS } from '../../constants';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const faqs = [
        { q: "ต้องซื้ออุปกรณ์เพิ่มไหม?", a: "ไม่ต้องครับ ใช้มือถือเครื่องเดิมของคุณ + ปริ้นท์กระดาษ QR Code 1 แผ่นแปะหน้าร้าน ก็เริ่มใช้งานได้เลย" },
        { q: "ลูกค้าต้องโหลดแอปไหม?", a: "ไม่ต้องโหลดครับ ลูกค้าสแกนผ่าน LINE ที่มีอยู่แล้วได้เลย สะดวกและรวดเร็วมากลดโอกาสที่ลูกค้าจะปฏิเสธ" },
        { q: "ทำไมราคาถูกจัง มีอะไรแอบแฝงไหม?", a: "เราตั้งใจทำราคา Micro-CRM ให้ร้านเล็กเข้าถึงได้ โดยตัดฟีเจอร์ซับซ้อนออก เหลือแต่สิ่งที่จำเป็น ราคานี้ไม่มีบวกเพิ่ม ยกเว้นคุณต้องการฟีเจอร์เสริมในอนาคต" },
        { q: "อนาคตจะขึ้นราคาไหม?", a: "สำหรับลูกค้าที่สมัครในช่วง Launch Period นี้ เราการันตีล็อคราคา 199 บาทให้ตลอดไปครับ" }
    ];

    return (
        <section className="py-24 bg-stone-50">
            <div className="max-w-3xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-2xl font-bold text-stone-900">คำถามที่พบบ่อย</h2>
                </div>
                <div className="space-y-4">
                    {faqs.map((item, idx) => (
                        <div key={idx} className="bg-white rounded-xl border border-stone-200 overflow-hidden">
                            <button 
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full flex justify-between items-center p-5 text-left font-bold text-stone-800 hover:bg-stone-50 transition"
                            >
                                {item.q}
                                <ICONS.ChevronDown className={`w-5 h-5 transition-transform ${openIndex === idx ? 'rotate-180' : ''}`} aria-hidden="true" />
                            </button>
                            <AnimatePresence>
                                {openIndex === idx && (
                                    <motion.div 
                                        initial={{ height: 0, opacity: 0 }} 
                                        animate={{ height: 'auto', opacity: 1 }} 
                                        exit={{ height: 0, opacity: 0 }}
                                        className="px-5 pb-5 text-stone-600 text-sm leading-relaxed"
                                    >
                                        {item.a}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
