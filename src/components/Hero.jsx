import { useState } from "react";
import { ReactTyped } from "react-typed";
import lightbulb from '../assets/images/lightbulb.png';
import linkedin from '../assets/images/linkedin.png';
import instagram from '../assets/images/instagram.png';
import github from '../assets/images/github.png';

const Hero = ({scrollToSection, contact}) => {
    const [firstTyped, setFirstTyped] = useState(false);

    return (
        <section className="flex flex-col justify-center items-center pt-24 pb-12 px-4 text-white-100 md:pt-32 md:pb-16">
            <h1 className="text-2xl md:text-4xl lg:text-6xl whitespace-pre"> 
                <ReactTyped 
                    strings={["Hi! I'm "]} 
                    typeSpeed={100}
                    showCursor={false}
                />
                    <ReactTyped 
                        strings={["Maddy Capone "]} 
                        typeSpeed={100}
                        startDelay={900}
                        cursorChar=">"
                        onComplete={() => setFirstTyped(true)}
                        className = 'pl-2 text-secondAccent'
                    />
            </h1>
            <div className="text-base mt-4 lg:text-2xl">
                {firstTyped && (
                    <ReactTyped 
                        strings={["I'm passionate about solving problems and creating solutions to make people's lives easier. "]} 
                        typeSpeed={40} 
                    />
                    )}
            </div>
            <img src={lightbulb} className='w-40 my-8 md:w-48 lg:w-60 drop-shadow-glow transition-transform duration-300 hover:scale-105'></img>
            <button onClick={() => scrollToSection(contact)} className='border-2 p-2 rounded-md text-secondAccent hover:bg-middle'>
                Get in Touch
            </button>
            <div className="flex flex-row gap-4 mt-4">
                <img src={linkedin} alt="linkedin" className="w-8 h-auto"></img>
                <img src={github} alt="github" className="w-8 h-auto"></img>
                <img src={instagram} alt="instagram" className="w-8 h-auto"></img>
            </div>
        </section>
    );
}

export default Hero;