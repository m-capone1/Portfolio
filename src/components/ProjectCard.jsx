
const ProjectCard = ({title, img, alt}) => {
    return (
        <section className="mt-6 mb-12 mx-4 rounded-md h-auto w-3/5flex shadow-card flex-col justify-center items-center">
            <h3 className="text-white-100 text-sm px-4 py-4">
                {title}
            </h3>
            <img src= {img} alt={alt}></img>
        </section>
    )
}

export default ProjectCard;