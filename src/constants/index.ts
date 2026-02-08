import { Coffee, Gift, Scan, Check, Volume2, Printer, Zap, History, ChevronDown, XCircle, Smartphone, ShieldCheck, Lock } from 'lucide-react';

export const ICONS = {
    Coffee,
    Gift,
    Scan,
    Check,
    Volume: Volume2,
    Printer,
    Zap,
    History,
    ChevronDown,
    XCircle,
    Smartphone,
    ShieldCheck,
    Lock
};

export const THEMES = [
    { id: 'cafe', name: 'ร้านกาแฟของคุณ', label: 'Classic Cafe', primary: 'bg-brand-teal', secondary: 'bg-brand-amber', textPrimary: 'text-brand-teal', textSecondary: 'text-brand-amber', bgGradient: 'from-teal-700 to-emerald-900', icon: ICONS.Coffee, accent: 'text-teal-100', btnColor: 'bg-teal-600' },
    { id: 'sweet', name: 'Sweet Bakery', label: 'Sweet Pastel', primary: 'bg-pink-500', secondary: 'bg-rose-400', textPrimary: 'text-pink-600', textSecondary: 'text-rose-500', bgGradient: 'from-pink-500 to-rose-600', icon: ICONS.Gift, accent: 'text-pink-100', btnColor: 'bg-pink-500' },
    { id: 'dark', name: 'Dark Roast Bar', label: 'Modern Dark', primary: 'bg-stone-800', secondary: 'bg-orange-600', textPrimary: 'text-stone-800', textSecondary: 'text-orange-600', bgGradient: 'from-stone-800 to-black', icon: ICONS.Coffee, accent: 'text-stone-300', btnColor: 'bg-stone-800' }
];

export const handleLineClick = () => {
    // Open LINE OA in new tab
    window.open('https://line.me/R/ti/p/@530jwhdc', '_blank');
    console.log('User clicked CTA -> LINE OA');
};
