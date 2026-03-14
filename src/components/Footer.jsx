const Footer = () => {
    return (
        <footer className="border-t border-white/5 py-10 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                <span className="font-display font-bold tracking-widest uppercase text-sm text-primary neon-glow">
                    MC
                </span>
                <p className="text-xs uppercase tracking-widest text-slate-600">
                    © {new Date().getFullYear()} Madeline Capone
                </p>
                <p className="text-xs text-slate-600">
                    maddycapone@gmail.com
                </p>
            </div>
        </footer>
    );
}

export default Footer;
