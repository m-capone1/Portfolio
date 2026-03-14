import { useState } from "react";
import { ReactTyped } from "react-typed";
import linkedin from '../assets/images/linkedin.png';
import instagram from '../assets/images/instagram.png';
import github from '../assets/images/github.png';

const Hero = ({ scrollToSection, contact }) => {
    const [firstTyped, setFirstTyped] = useState(false);

    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden">
            {/* Ambient glow blobs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-pink/10 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="relative z-10 flex flex-col items-center text-center gap-6 max-w-3xl">
                <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs">
                    Full-Stack Developer &amp; Engineer
                </span>

                <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tighter">
                    <ReactTyped
                        strings={["Hi, I'm"]}
                        typeSpeed={100}
                        showCursor={false}
                    />
                    {' '}
                    <span className="text-primary neon-glow">
                        <ReactTyped
                            strings={["Maddy Capone"]}
                            typeSpeed={100}
                            startDelay={900}
                            cursorChar="_"
                            onComplete={() => setFirstTyped(true)}
                        />
                    </span>
                </h1>

                <div className="text-slate-400 text-lg md:text-xl max-w-xl leading-relaxed font-light min-h-[2rem]">
                    {firstTyped && (
                        <ReactTyped
                            strings={["I turn ideas into deployed products, from design to the last line of code."]}
                            typeSpeed={30}
                            showCursor={false}
                        />
                    )}
                </div>

                <div className="flex flex-wrap gap-4 mt-4 justify-center items-center">
                    <button
                        onClick={() => scrollToSection(contact)}
                        className="bg-primary hover:brightness-110 text-background-dark font-bold py-3 px-10 rounded-full transition-all shadow-primary-glow uppercase tracking-widest text-xs"
                    >
                        Get in Touch
                    </button>

                    <div className="flex items-center gap-3">
                        <a
                            href="https://www.linkedin.com/in/madeline-capone/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 hover:border-primary/50 hover:bg-primary/10 transition-all"
                        >
                            <img src={linkedin} alt="linkedin" className="w-5 h-auto" />
                        </a>
                        <a
                            href="https://github.com/m-capone1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 hover:border-primary/50 hover:bg-primary/10 transition-all"
                        >
                            <img src={github} alt="github" className="w-5 h-auto" />
                        </a>
                        <a
                            href="https://www.instagram.com/maddycapone/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 hover:border-primary/50 hover:bg-primary/10 transition-all"
                        >
                            <img src={instagram} alt="instagram" className="w-5 h-auto" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
