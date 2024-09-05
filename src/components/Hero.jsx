import { useState } from "react";
import { ReactTyped } from "react-typed";

const Hero = () => {
    const [firstTyped, setFirstTyped] = useState(false);

    return (
        <section className="flex flex-col justify-center items-center py-48 px-4 text-white-100 md:py-60">
            <h1 className="text-2xl md:text-4xl lg:text-6xl"> 
                <ReactTyped 
                    strings={["Hi! I'm Maddy Capone"]} 
                    typeSpeed={100} 
                    cursorChar=">"
                    onComplete={() => setFirstTyped(true)}
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
        </section>
    );
}

export default Hero;