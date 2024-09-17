import Card from './ExCard';
import model from '../assets/images/3d-white.png';
import computer from '../assets/images/computer-white.png';
import software from '../assets/images/devops-white.png';
import wrench from '../assets/images/wrench-white.png';
import { useState } from 'react';

const About = ({myStory}) => {
    const [readMore, setReadMore] = useState(false);

    const openReadMore = () => {
        setReadMore(prevState => !prevState);
    }

    return (
        <section ref={myStory} className="flex flex-col mx-6 md:mx-8 lg:mx-16 xl:mx-24">
            <h2 className="text-3xl text-secondAccent py-4 md:pt-12">
                My Story 
            </h2>
            <div className='text-lg text-white-100'>
               Thanks for stopping by! I'm a software developer with two years of experience working with Python and two years of self-taught JavaScript. I recently completed a software development bootcamp at BrainStation where I sharpened my fullstack tehcnical skills like HTML, CSS, JavaScript, React,Node.js/Express, and MySQL. I love being challenged and I consider myself a liffelong learner, and I can't wait to continue to learn more and more about programming each day!
            </div>
            <div className='text-lg text-white-100 mt-4'>
                If you'd like to hear more about my transition from Mechanical Engineering to Software Engineering, feel free to continue reading below.
            </div>
            <div onClick={openReadMore} className='cursor-pointer text-accent text-sm hover:opacity-50 py-4'>Click to read more about my journey...</div>
            {readMore && (<div className="text-lg text-white-100">
                <div className="py-2">
                    My journey into programming began during a mandatory introductory C++course that was required for my Mechanical Engineering degree. I didn’t expect much from it, since coding wasn’t something I thought would become important in my life or my career.
                    I vividly remember feeling really frustratred that I couldn't solve one of the weekly programming projects. No matter how much time I spent on it, I couldn’t figure it out. It was frustrating me so much so that I seriously considered giving up. I was convinced that maybe programming just wasn’t for me.
                </div>
                <div className="py-2">
                <strong className='text-secondAccent'>When I finally cracked the problem - something clicked for me.</strong> I think that first problem taught me a lot about perserverence, hard work, and the satisfaction that follows solving a complex problem. I then began to see programming differently. I found myself seeking out new challenges, excited by solving complex problems. 
                    Programming quickly became more than just a requirement for my degree - it became a passion. I get a thrill from problem solving and I welcome new challenges. It motivates me to be a better engineer and to learn more each and every day.
                </div>
                <div className="py-2">
                    Although I have a background and expertise in Mechanical Engineering, I use programming as a tool to streamline processes and it is my long-term goal to fully transition into the software engineering indistry. The constant learning process and problem solving required in programming motivates me to push the 
                    boundaries of what I can do. It’s no longer just about completing projects or fulfilling requirements; it’s about continuous improvement, both as an engineer and a learner. Embracing challenges, whether in tech or in life, has become part of who I am, and I can’t imagine a future without that thrill of discovery and growth.
                </div>
            </div>)}
            <div className='flex flex-col justify-center items-center md:flex-row md:justify-around'>
                <Card 
                    title = "Software Engineer" 
                    img = {software} 
                    alt="software-engineer"
                />
                <Card 
                    title = "Mechanical Engineer" 
                    img ={wrench} 
                    alt="mechanical-engineer"
                />
                <Card 
                    title = "3D Modelling" 
                    img ={model} 
                    alt="modeling"
                />
                <Card 
                    title = "Fullstack Development" 
                    img = {computer} 
                    alt="developer"
                />
            </div>
        </section>
    )
}

export default About;