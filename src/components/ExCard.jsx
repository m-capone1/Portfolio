const ExCard = ({ title, img, alt }) => {
    return (
        <div className="floating-card rounded-xl p-6 flex flex-col justify-center items-center gap-4 w-40 md:w-44 hover:border-primary/30 border border-transparent transition-colors duration-300">
            <img src={img} alt={alt} className="w-10 h-auto opacity-80" />
            <h3 className="font-bold text-sm text-center text-white tracking-tight">{title}</h3>
        </div>
    );
}

export default ExCard;
