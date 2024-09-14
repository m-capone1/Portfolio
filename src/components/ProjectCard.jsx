
const ProjectCard = ({title, img, alt, description}) => {
    return (
        <section className="flex flex-col font-bold mt-6 mb-12 mx-4 text-white-100 rounded-md h-auto w-3/5flex shadow-card flex-col justify-center items-center">
            <h3 className="text-2xl px-4 py-4 lg:text-3xl">
                {title}
            </h3>
            <p className="px-4 pb-4 font-normal">{description}</p>
            <img className="lg:w-3/4" src= {img} alt={alt}></img>
            <section className="w-full flex flex-col items-start gap-2 p-4 text-accent lg:text-xl">
                <button>Visit Site</button>
                <button>View Case Study</button>
            </section>
        </section>
    )
}

export default ProjectCard;