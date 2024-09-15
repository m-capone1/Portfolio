const ExCard = ({title, img, alt}) => {
    return (
        <section className="bg-header text-secondAccent mt-6 mb-12 rounded-md h-auto w-1/5 hover:text-background hover:bg-accent transition duration-700 ease-in-out shadow-card flex flex-col justify-center items-center lg:text-lg">
            <h3 className="font-bold text-md px-4 py-4">
                {title}
            </h3>
            <img src={img} alt={alt} className="w-1/2 pb-4"></img>
        </section>
    )
}

export default ExCard;