import pdf from '../assets/documents/resume.pdf';
import logo from '../assets/logo/logo.png';

const Header = ({ scrollToSection, myStory, skills, contact, projects }) => {
    const onResumeClick = () => {
        window.open(pdf);
    }

    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-4xl px-6">
            <div className="glass-nav rounded-full px-8 py-3 flex items-center justify-between">
                <img src={logo} alt="MC logo" className="h-8 w-auto" />
                <div className="hidden sm:flex items-center gap-8">
                    <span
                        onClick={() => scrollToSection(myStory)}
                        className="cursor-pointer text-sm font-medium text-slate-300 hover:text-primary transition-colors uppercase tracking-wider"
                    >
                        My Story
                    </span>
                    <span
                        onClick={() => scrollToSection(skills)}
                        className="cursor-pointer text-sm font-medium text-slate-300 hover:text-primary transition-colors uppercase tracking-wider"
                    >
                        Skills
                    </span>
                    <span
                        onClick={() => scrollToSection(projects)}
                        className="cursor-pointer text-sm font-medium text-slate-300 hover:text-primary transition-colors uppercase tracking-wider"
                    >
                        Projects
                    </span>
                    <span
                        onClick={() => scrollToSection(contact)}
                        className="cursor-pointer text-sm font-medium text-slate-300 hover:text-primary transition-colors uppercase tracking-wider"
                    >
                        Contact
                    </span>
                </div>
                <button
                    onClick={onResumeClick}
                    className="bg-primary text-background-dark px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-all shadow-primary-glow"
                >
                    Resume
                </button>
            </div>
        </nav>
    );
}

export default Header;
