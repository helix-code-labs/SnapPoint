import React from 'react';
import { motion } from 'framer-motion';
import { THEMES } from '../../constants';
import type { Theme } from '../../types';
import DemoApp from './DemoApp';

interface PhoneMockupProps {
    currentTheme: Theme;
    onThemeChange: (theme: Theme) => void;
}

const PhoneMockup: React.FC<PhoneMockupProps> = ({ currentTheme, onThemeChange }) => {
    return (
        <div className="flex flex-col items-center gap-6">
            <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative border-stone-800 bg-stone-800 border-[10px] rounded-[2.5rem] h-[600px] w-[300px] shadow-2xl overflow-hidden" aria-hidden="true">
                <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white relative">
                    <DemoApp currentTheme={currentTheme} />
                </div>
            </motion.div>
            <div className="flex items-center gap-3 bg-white p-2 rounded-full shadow-lg border border-stone-100">
                <span className="text-xs font-bold text-stone-500 pl-2">ลองเปลี่ยนธีม:</span>
                {THEMES.map((theme) => (
                    <button key={theme.id} onClick={() => onThemeChange(theme)} className={`w-8 h-8 rounded-full border-2 transition-transform hover:scale-110 focus-visible:ring-2 focus-visible:ring-stone-400 focus-visible:ring-offset-2 ${theme.btnColor} ${currentTheme.id === theme.id ? 'ring-2 ring-offset-2 ring-stone-400 scale-110' : 'border-transparent opacity-80'}`} aria-label={`เปลี่ยนเป็นธีม ${theme.label}`} />
                ))}
            </div>
        </div>
    );
};

export default PhoneMockup;
