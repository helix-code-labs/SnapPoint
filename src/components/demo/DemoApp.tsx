import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ICONS } from '../../constants';
import type { Theme } from '../../types';

interface DemoAppProps {
    currentTheme: Theme;
}

interface Coupon {
    id: number;
    name: string;
    desc: string;
}

const DemoApp: React.FC<DemoAppProps> = ({ currentTheme }) => {
    const [stamps, setStamps] = useState(3);
    const [showNoti, setShowNoti] = useState(false);
    const [notiText, setNotiText] = useState("");
    const [view, setView] = useState<'card' | 'redeem'>('card');
    const [myCoupons, setMyCoupons] = useState<Coupon[]>([]);
    const ThemeIcon = currentTheme.icon;

    useEffect(() => {
        let isMounted = true;
        const runLoop = async () => {
            while(isMounted) {
                for(let i=3; i<=5; i++) {
                    if(!isMounted) return;
                    setStamps(i);
                    if (i === 5) {
                        setShowNoti(true);
                        setNotiText("🎉 ได้รับคูปองส่วนลด 5฿");
                        setMyCoupons(prev => { if(prev.some(c => c.id === 5)) return prev; return [...prev, { id: 5, name: 'ส่วนลด 5 บาท', desc: 'เมื่อครบ 5 แต้ม' }]; });
                        await new Promise(r => setTimeout(r, 2000));
                        setShowNoti(false);
                    } else if (i > 3) {
                        setShowNoti(true);
                        setNotiText(`เช็คอินสำเร็จ! (ครั้งที่ ${i}/10)`);
                        await new Promise(r => setTimeout(r, 1000));
                        setShowNoti(false);
                    } else {
                        await new Promise(r => setTimeout(r, 800));
                    }
                }
                await new Promise(r => setTimeout(r, 800));
                for(let i=6; i<=10; i++) {
                    if(!isMounted) return;
                    setStamps(i);
                    if (i === 10) {
                        setShowNoti(true);
                        setNotiText("🎉 ได้รับคูปองส่วนลด 10฿");
                        setMyCoupons(prev => { if(prev.some(c => c.id === 10)) return prev; return [...prev, { id: 10, name: 'ส่วนลด 10 บาท', desc: 'เมื่อครบ 10 แต้ม' }] });
                        await new Promise(r => setTimeout(r, 2500));
                        setShowNoti(false);
                    } else {
                        setShowNoti(true);
                        setNotiText(`เช็คอินสำเร็จ! (ครั้งที่ ${i}/10)`);
                        await new Promise(r => setTimeout(r, 1000));
                        setShowNoti(false);
                    }
                }
                setStamps(0);
                await new Promise(r => setTimeout(r, 1000));
                if(!isMounted) return;
                setView('redeem'); 
                await new Promise(r => setTimeout(r, 4000));
                if(!isMounted) return;
                setView('card');
                setMyCoupons([]); 
                setStamps(3);
                await new Promise(r => setTimeout(r, 1000));
            }
        }
        runLoop();
        return () => { isMounted = false; };
    }, []);

    return (
        <div className="h-full bg-stone-50 flex flex-col font-sans relative overflow-hidden text-stone-800 transition-colors duration-500">
            <div className="bg-stone-900 text-white px-4 py-1 text-[10px] flex justify-between items-center z-50">
                <span>12:30</span><div className="flex gap-1"><span>5G</span><span>100%</span></div>
            </div>
            <div className="bg-stone-800 text-white px-4 py-2.5 flex justify-between items-center z-50 shadow-sm">
                <span className="text-sm font-bold">X</span><span className="text-sm font-bold">SnapPoint Rewards</span><span className="text-sm">●●●</span>
            </div>
            <AnimatePresence>
                {showNoti && (
                    <motion.div initial={{ y: -60, opacity: 0 }} animate={{ y: 10, opacity: 1 }} exit={{ y: -60, opacity: 0 }} className="absolute top-12 left-4 right-4 bg-white/95 backdrop-blur p-3 rounded-xl shadow-lg z-[60] flex items-center gap-3 border border-stone-100" role="status" aria-live="polite">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${notiText.includes('คูปอง') ? currentTheme.secondary + ' text-white' : 'bg-green-100 text-green-600'}`} aria-hidden="true">
                            {notiText.includes('คูปอง') ? <ICONS.Gift className="w-5 h-5" aria-hidden="true" /> : <ICONS.Check className="w-5 h-5" aria-hidden="true" />}
                        </div>
                        <div><p className="font-bold text-xs text-stone-800">{notiText.includes('คูปอง') ? "Reward Unlocked!" : "Check-in"}</p><p className="text-[10px] text-stone-500">{notiText}</p></div>
                    </motion.div>
                )}
            </AnimatePresence>
            <AnimatePresence>
                {view === 'redeem' && (
                    <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }} className={`absolute inset-0 z-50 text-white flex flex-col items-center justify-center p-6 text-center ${currentTheme.primary}`}>
                        <div className="absolute top-4 right-4"><span className="text-2xl opacity-50">×</span></div>
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6 animate-pulse"><ICONS.Gift className="w-8 h-8 text-white" aria-hidden="true" /></div>
                        <h3 className="text-xl font-bold mb-2">คูปองส่วนลด 10 บาท</h3>
                        <p className={`text-sm mb-8 ${currentTheme.accent}`}>กรุณาแสดงหน้านี้ให้พนักงาน</p>
                        <div className="bg-black/30 rounded-2xl px-6 py-4 mb-4 backdrop-blur-sm w-full border border-white/10"><span className="text-4xl font-mono font-bold tracking-widest text-white shadow-sm">04:59</span></div>
                        <div className="text-xs mt-4 bg-black/20 px-3 py-1 rounded-full text-white/80">กำลังใช้งานคูปอง…</div>
                    </motion.div>
                )}
            </AnimatePresence>
            <div className="flex-1 overflow-y-auto no-scrollbar pb-24 bg-stone-50">
                <div className="bg-white p-4 pt-4 pb-4 border-b border-stone-100 flex items-center justify-between">
                    <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-stone-200 overflow-hidden border border-stone-100"><img src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix" alt="รูปโปรไฟล์สมาชิก" /></div><div><h3 className="font-bold text-stone-800 text-sm">สวัสดี, คุณลูกค้า</h3><div className="flex items-center gap-1"><div className={`w-2 h-2 rounded-full ${currentTheme.secondary}`} aria-hidden="true"></div><p className="text-[10px] text-stone-500">Member</p></div></div></div>
                    <button className="bg-stone-100 p-2 rounded-full text-stone-400 hover:bg-stone-200 transition focus-visible:ring-2 focus-visible:ring-stone-400 focus-visible:ring-offset-2" aria-label="ดูประวัติการใช้งาน"><ICONS.History className="w-4 h-4" aria-hidden="true" /></button>
                </div>
                <div className="p-4 space-y-4">
                    <motion.div key={currentTheme.id} initial={{ opacity: 0.8 }} animate={{ opacity: 1 }} className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden transition-opacity duration-500">
                        <div className={`p-4 flex justify-between items-center text-white bg-gradient-to-r ${currentTheme.bgGradient}`}><div><h2 className="font-bold text-sm">{currentTheme.name}</h2><p className={`text-[10px] ${currentTheme.accent}`}>Loyalty Card</p></div><ThemeIcon className="w-5 h-5 opacity-80" aria-hidden="true" /></div>
                        <div className="p-4">
                            <div className="flex justify-between items-center mb-3"><span className="text-[10px] text-stone-400 uppercase tracking-wider font-bold">Progress</span><span className={`text-xs font-bold ${currentTheme.textPrimary}`}>{stamps}/10 ครั้ง</span></div>
                            <div className="grid grid-cols-5 gap-3">
                                {[...Array(10)].map((_, i) => (
                                    <div key={i} className="flex flex-col items-center gap-1">
                                        <div className={`w-9 h-9 aspect-square shrink-0 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${i < stamps ? 'border-transparent' : 'border-dashed border-stone-200'} ${i === 4 || i === 9 ? 'bg-stone-50' : ''}`}>
                                            {i < stamps ? (<motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className={`w-9 h-9 aspect-square shrink-0 rounded-full flex items-center justify-center text-white shadow-sm ${currentTheme.primary}`}><ICONS.Check className="w-4 h-4" aria-hidden="true" /></motion.div>) : ((i === 4 || i === 9) && <ICONS.Gift className={`w-4 h-4 opacity-50 ${currentTheme.textSecondary}`} aria-hidden="true" />)}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-3 flex justify-between px-1">
                                <div className="text-[9px] text-stone-400 text-center w-1/2">ครบ 5 ครั้ง<br/><span className={`${currentTheme.textSecondary} font-bold`}>รับคูปอง 5฿</span></div>
                                <div className="text-[9px] text-stone-400 text-center w-1/2">ครบ 10 ครั้ง<br/><span className={`${currentTheme.textSecondary} font-bold`}>รับคูปอง 10฿</span></div>
                            </div>
                        </div>
                    </motion.div>
                    <div>
                        <div className="flex justify-between items-end mb-2 px-1"><h4 className="font-bold text-xs text-stone-600 uppercase tracking-wider">คูปองของฉัน ({myCoupons.length})</h4></div>
                        <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar min-h-[90px]">
                            <AnimatePresence mode="popLayout">
                                {myCoupons.length > 0 ? (
                                    myCoupons.map((coupon) => (
                                        <motion.div key={coupon.id} initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className={`min-w-[140px] bg-white p-3 rounded-xl border shadow-sm flex flex-col justify-between relative overflow-hidden`} style={{ borderColor: 'rgba(0,0,0,0.05)' }}>
                                            <div><div className={`w-7 h-7 text-white rounded-lg flex items-center justify-center mb-2 shadow-sm ${currentTheme.secondary}`}><ICONS.Gift className="w-4 h-4" aria-hidden="true" /></div><p className="text-xs font-bold text-stone-800">{coupon.name}</p><p className="text-[9px] text-stone-400">{coupon.desc}</p></div>
                                            <button className="mt-2 w-full py-1 bg-stone-800 text-white text-[10px] rounded font-bold">กดใช้</button>
                                        </motion.div>
                                    ))
                                ) : (
                                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full bg-white border-2 border-dashed border-stone-200 rounded-xl p-4 flex flex-col items-center justify-center text-stone-300"><ICONS.Gift className="w-5 h-5 mb-1 opacity-50" aria-hidden="true" /><span className="text-[10px]">ยังไม่มีคูปอง</span></motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t border-stone-200 z-40 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
                <button className="w-full py-3.5 bg-stone-800 text-white hover:bg-stone-900 rounded-xl font-bold shadow-lg transition-colors flex items-center justify-center gap-2 text-sm focus-visible:ring-2 focus-visible:ring-stone-400 focus-visible:ring-offset-2"><ICONS.Scan className="w-4 h-4" aria-hidden="true" /> สแกนเช็คอิน</button>
            </div>
        </div>
    );
};

export default DemoApp;
