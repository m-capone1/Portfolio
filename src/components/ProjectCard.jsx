import { useState } from "react";

const ProjectCard = ({ title, img, alt, description, techStack, isDeployed, isCode, linkSite, linkCode, codeLabel = "See Code" }) => {
    const [nextImg, setNextImg] = useState(img[0]);

    const onClickImg = () => {
        const index = img.indexOf(nextImg);
        setNextImg(index >= img.length - 1 ? img[0] : img[index + 1]);
    }

    const onClickSite = () => window.open(linkSite, '_blank');
    const onClickCode = () => window.open(linkCode, '_blank');

    return (
        <section className="floating-card gradient-glow rounded-xl p-6 md:p-8 flex flex-col gap-6 mx-4 mb-12">
            <h3 className="text-2xl font-bold tracking-tight text-white">{title}</h3>

            <p className="text-slate-400 text-sm leading-relaxed font-light">{description}</p>

            <img
                className="rounded-lg cursor-pointer lg:w-3/4 mx-auto hover:opacity-90 transition-opacity"
                onClick={onClickImg}
                src={nextImg}
                alt={alt}
            />
            {img.length > 1 && (
                <p className="text-xs text-slate-500 text-center -mt-4 uppercase tracking-widest">Click image to cycle screenshots</p>
            )}

            <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                    <span
                        key={index}
                        className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-primary/20"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            <div className="flex gap-6">
                {isDeployed && (
                    <button
                        onClick={onClickSite}
                        className="text-xs font-bold uppercase tracking-widest text-primary hover:opacity-70 transition-opacity"
                    >
                        Visit Site →
                    </button>
                )}
                {isCode && (
                    <button
                        onClick={onClickCode}
                        className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-primary transition-colors"
                    >
                            {codeLabel} →
                    </button>
                )}
            </div>
        </section>
    );
}

export default ProjectCard;
