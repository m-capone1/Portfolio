import { useState} from "react";

const ProjectCard = ({title, img, alt, description, techStack, isDeployed, isCode, linkSite, linkCode}) => {
    const [nextImg, setNextImg] = useState(img[0]);

    const onClickImg = () => {
        let indexOfCurrentImg = img.indexOf(nextImg);

        if(indexOfCurrentImg >= img.length-1 ) {
            setNextImg(img[0]);
        } else {
            setNextImg(img[indexOfCurrentImg + 1]);
        }
    }

    const onClickSite = () => {
        window.open(linkSite, '_blank');
    }

    const onClickCode = () => {
        window.open(linkCode, '_blank');
    }

    return (
        <section className="flex flex-col font-semibold mt-6 mb-12 mx-4 text-white-100 rounded-md h-auto flex shadow-card flex-col justify-center items-center">
            <h3 className="text-2xl px-4 py-4 lg:text-3xl text-accent ">
                {title}
            </h3>
            <p className="px-4 pb-4 font-thin">{description}</p>
            <img className="lg:w-3/4 cursor-pointer" onClick = {onClickImg} src= {nextImg} alt={alt}></img>
            <ul className="flex flex-row flex-wrap justify-center mx-4 gap-4 font-thin text-secondAccent">
                {
                    techStack.map((tech, index) => (
                    <li key={index} className="bg-middle px-4 py-2 mt-4 rounded-3xl hover:bg-accent">{tech}</li>
                    ))
                }
            </ul>
            <section className="w-full flex flex-col items-start gap-2 p-4 text-accent lg:text-xl">
                {isDeployed && (<button onClick={onClickSite} className="hover:underline">Visit Site</button>)}
                {isCode && (<button onClick={onClickCode} className="hover:underline">See More</button>)}
            </section>
        </section>
    )
}

export default ProjectCard;