import Card from './ExCard';
import computer from '../assets/images/computer-white.png';
import software from '../assets/images/devops-white.png';
import wrench from '../assets/images/wrench-white.png';
import coffee from '../assets/images/coffee-white.svg';
import { useState } from 'react';

const About = ({ myStory }) => {
    const [readMore, setReadMore] = useState(false);

    return (
        <section ref={myStory} className="relative max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-24 pt-10 pb-24 border-t border-white/5">
            <div className="flex flex-col gap-4 mb-10">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase">
                    My <span className="text-primary neon-glow">Story</span>
                </h2>
                <div className="h-1 w-24 bg-primary rounded-full"></div>
            </div>

            <div className="text-lg text-slate-400 leading-relaxed max-w-3xl">
                Thanks for stopping by! I'm a software developer with two years of professional experience building and shipping software with TypeScript, PHP, AWS, Jenkins, and Git. I'm driven by growth and I'm always looking to level up my skills, take on new challenges, and bring ideas to life from start to finish.
            </div>
            <div className="text-lg text-slate-400 mt-4 leading-relaxed max-w-3xl">
                Outside of work, personal projects are where I push my boundaries. If you'd like to hear more about how I got here, keep reading below.
            </div>

            <button
                onClick={() => setReadMore(p => !p)}
                className="cursor-pointer text-primary text-xs hover:opacity-70 py-4 uppercase tracking-widest font-bold transition-opacity"
            >
                {readMore ? '− Show less' : '+ Read more about my journey'}
            </button>

            {readMore && (
                <div className="text-lg text-slate-400 max-w-3xl leading-relaxed space-y-4 mb-4">
                    <p>
                        My journey into programming began during a mandatory introductory C++ course for my Mechanical Engineering degree. I didn't expect much from it since coding wasn't something I thought would become important in my life or my career. I vividly remember feeling frustrated that I couldn't solve one of the weekly programming projects. No matter how much time I spent on it, I couldn't figure it out.
                    </p>
                    <p>
                        <strong className="text-white">When I finally cracked the problem — something clicked for me.</strong> That moment taught me a lot about perseverance, hard work, and the satisfaction that follows solving a complex issue. Programming quickly became more than just a requirement for my degree — it became a passion.
                    </p>
                    <p>
                        Although I have a background and expertise in Mechanical Engineering, it is my long-term goal to fully transition into the software engineering industry. The constant learning process and problem-solving required in programming motivate me to push the boundaries of what I can do. Embracing challenges, whether in tech or in life, has become part of who I am.
                    </p>
                </div>
            )}

            <div className="flex flex-wrap gap-6 mt-12">
                <Card title="Software Engineer" img={software} alt="software-engineer" />
                <Card title="Frontend" img={computer} alt="frontend" />
                <Card title="Backend" img={wrench} alt="backend" />
                <Card title="Entrepreneur" img={coffee} alt="entrepreneur" />
            </div>
        </section>
    );
}

export default About;
