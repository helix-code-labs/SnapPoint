import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ICONS } from '../../constants';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const faqs = [
        { q: "ต้องซื้ออุปกรณ์เพิ่มไหม?", a: "ไม่ต้องเลยครับ ใช้แค่มือถือเครื่องเดิมของคุณ และกระดาษ QR Code ที่เราให้ไฟล์ไปพิมพ์แปะหน้าร้าน จบใน 5 นาทีครับ" },
        { q: "ลูกค้าต้องโหลดแอปไหม?", a: "ไม่ต้องโหลดครับ ลูกค้าใช้ LINE ที่มีอยู่แล้วสแกนได้เลย นี่คือหัวใจสำคัญที่ทำให้ลูกค้าไม่ปฏิเสธที่จะสะสมแต้มกับร้านคุณ" },
        { q: "ทำไมราคาถูกจัง มีอะไรแอบแฝงไหม?", a: "ไม่มีแอบแฝงครับ เราตัดฟีเจอร์ซับซ้อนของ POS ใหญ่ออก เหลือแค่สิ่งที่คุณต้องใช้จริงๆ คือ \"ระบบสะสมแต้มที่ทำงานได้เลย\" ราคานี้จ่ายจบ ครบทุกฟีเจอร์พื้นฐานครับ" },
        { q: "อนาคตจะขึ้นราคาไหม?", a: "ไม่เพิ่มครับ สำหรับลูกค้าที่สมัครในช่วง Launch Period นี้ คุณได้รับสิทธิ์ \"Grandfathering\" คือล็อคราคา 199 บาทตลอดไป ไม่ว่าร้านจะโตขึ้นแค่ไหนก็ตาม" }
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
