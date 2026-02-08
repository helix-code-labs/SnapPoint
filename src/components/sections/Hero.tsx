import { useState } from 'react';
import { motion } from 'framer-motion';
import { handleLineClick, THEMES } from '../../constants';
import PhoneMockup from '../demo/PhoneMockup';

const Hero = () => {
    const [currentTheme, setCurrentTheme] = useState(THEMES[0]);
    return (
        <section id="main-content" className="relative pt-32 pb-20 overflow-hidden bg-paper">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    <div className="flex-1 text-center lg:text-left z-10">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                            <span className="inline-block px-4 py-1.5 rounded-full bg-teal-50 text-brand-teal text-xs font-bold tracking-wider mb-6 border border-teal-100 uppercase">Micro-CRM for Solopreneurs</span>
                            <h1 className="text-4xl lg:text-6xl font-bold text-stone-900 leading-snug lg:leading-normal mb-6">ระบบสะสมแต้มที่รันเองได้<br/><span className="text-brand-teal">เจ้าของไม่ต้องยุ่ง แค่ฟังเสียง 'ติ๊ง'</span></h1>
                            <p className="text-lg text-stone-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">เปลี่ยนขาจรเป็นขาประจำด้วยระบบ Zero-Touch Loyalty ที่ออกแบบมาเพื่อร้านค้าขนาดเล็กโดยเฉพาะ ไม่ต้องใช้ POS ไม่ต้องกดมือถือ</p>
                            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                                <button onClick={handleLineClick} className="px-6 sm:px-7 lg:px-8 py-3.5 sm:py-4 bg-brand-teal hover:bg-teal-800 text-white rounded-xl font-bold text-base lg:text-lg shadow-xl shadow-teal-900/10 transition-colors transform hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 whitespace-nowrap">ทดลองฟรี 30 วัน</button>
                                <button onClick={() => document.querySelector('.phone-demo')?.scrollIntoView({behavior: 'smooth'})} className="px-6 sm:px-7 lg:px-8 py-3.5 sm:py-4 bg-white text-stone-700 border border-stone-200 hover:bg-stone-50 rounded-xl font-bold text-base lg:text-lg transition-colors flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 whitespace-nowrap">ดูตัวอย่าง</button>
                            </div>
                            <p className="mt-6 text-sm text-stone-400">* ติดตั้งเสร็จใน 5 นาที • ลูกค้าไม่ต้องโหลดแอปเพิ่ม</p>
                        </motion.div>
                    </div>
                    <div className="flex-1 relative w-full max-w-[320px] lg:max-w-none flex justify-center phone-demo">
                        <div className="absolute top-0 right-10 w-64 h-64 bg-teal-200/50 rounded-full blur-3xl animate-float" aria-hidden="true"></div>
                        <div className="absolute bottom-0 left-10 w-64 h-64 bg-amber-200/50 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}} aria-hidden="true"></div>
                        <PhoneMockup currentTheme={currentTheme} onThemeChange={setCurrentTheme} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
