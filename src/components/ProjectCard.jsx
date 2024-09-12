
const ProjectCard = ({title, img, alt}) => {
    return (
        <section className="mt-6 mb-12 rounded-md h-32 w-1/5 hover:bg-accent transition duration-700 ease-in-out shadow-card flex flex-col justify-center items-center">
            <h3 className="text-white-100">
                {title}
            </h3>
            <img src={img} alt={alt} className="w-1/2"></img>
        </section>
    )
}

export default ProjectCard;