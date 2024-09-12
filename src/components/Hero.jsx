import { useState } from "react";
import { ReactTyped } from "react-typed";
import lightbulb from '../assets/images/lightbulb.png'

const Hero = () => {
    const [firstTyped, setFirstTyped] = useState(false);

    return (
        <section className="flex flex-col justify-center items-center py-24 px-4 text-white-100 md:py-36">
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
            <button className='border-2 p-2 rounded-md text-secondAccent hover:bg-middle'>
                Get in Touch
            </button>
        </section>
    );
}

export default Hero;