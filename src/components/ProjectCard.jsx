import { useState, useEffect } from "react";

const ProjectCard = ({title, img, alt, description, techStack}) => {
    const [nextImg, setNextImg] = useState(img[0]);

    const onClickImg = () => {
        let indexOfCurrentImg = img.indexOf(nextImg);

        if(indexOfCurrentImg >= img.length-1 ) {
            setNextImg(img[0]);
        } else {
            setNextImg(img[indexOfCurrentImg + 1]);
        }
    }

    return (
        <section className="flex flex-col font-semibold mt-6 mb-12 mx-4 text-white-100 rounded-md h-auto w-3/5flex shadow-card flex-col justify-center items-center">
            <h3 className="text-2xl px-4 py-4 lg:text-3xl text-accent ">
                {title}
            </h3>
            <p className="px-4 pb-4 font-normal">{description}</p>
            <img className="lg:w-3/4 cursor-pointer" onClick = {onClickImg} src= {nextImg} alt={alt}></img>
            <ul className="flex flex-row gap-4 font-thin text-secondAccent">
                {
                    techStack.map((tech, index) => (
                    <li key={index} className="bg-middle px-4 py-2 mt-4 rounded-3xl hover:bg-header">{tech}</li>
                    ))
                }
            </ul>
            <section className="w-full flex flex-col items-start gap-2 p-4 text-accent lg:text-xl">
                <button className="hover:underline">Visit Site</button>
                <button className="hover:underline">View Case Study</button>
            </section>
        </section>
    )
}

export default ProjectCard;