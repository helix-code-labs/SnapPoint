const Footer = () => (
    <footer className="bg-stone-50 border-t border-stone-200 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-brand-teal rounded-lg flex items-center justify-center text-white font-brand font-bold text-xl shadow-md" aria-hidden="true">S</div>
                    <span className="font-brand text-xl font-bold text-stone-800 tracking-tight">SnapPoint</span>
                </div>
                <div className="text-stone-500 text-sm flex flex-col md:flex-row items-center gap-4">
                    <span>© {new Date().getFullYear()} SnapPoint. All rights reserved.</span>
                    <span className="hidden md:inline text-stone-300">|</span>
                    <span>
                        Made with ❤️ by <a href="https://helix-code-labs.github.io/" target="_blank" rel="noopener noreferrer" className="font-bold text-brand-teal hover:underline hover:text-teal-700 transition-colors">Helix Code Labs</a>
                    </span>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
