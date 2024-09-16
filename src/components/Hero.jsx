import { useState } from "react";
import { ReactTyped } from "react-typed";
import linkedin from '../assets/images/linkedin.png';
import instagram from '../assets/images/instagram.png';
import github from '../assets/images/github.png';
import background from '../assets/images/background.jpg';

const Hero = ({scrollToSection, contact}) => {
    const [firstTyped, setFirstTyped] = useState(false);

    return (
        <section style={{backgroundImage: `url(${background})`, backgroundSize:'cover', backgroundPosition:'center'}}>
            <section className="flex flex-col justify-center items-center pt-24 pb-12 px-4 text-white-100 md:pt-32 md:pb-16">
                <h1 className="text-2xl mt-32 md:text-4xl lg:text-6xl whitespace-pre"> 
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
                <button onClick={() => scrollToSection(contact)} className='border-2 p-2 rounded-md text-secondAccent mt-8 hover:bg-accent'>
                    Get in Touch
                </button>
                <div className="flex flex-row gap-4 m-8">
                    <a href="https://www.linkedin.com/in/madeline-capone/" target="_blank" rel="noopener noreferrer">
                        <img src={linkedin} alt="linkedin" className="w-8 h-auto"></img>
                    </a>
                    <a href="https://github.com/m-capone1" target="_blank" rel="noopener noreferrer">
                        <img src={github} alt="github" className="w-8 h-auto"></img>
                    </a>
                    <a href="https://www.instagram.com/maddycapone/" target="_blank" rel="noopener noreferrer">
                        <img src={instagram} alt="instagram" className="w-8 h-auto"></img>
                    </a>
                </div>
            </section>
        </section>
    );
}

export default Hero;