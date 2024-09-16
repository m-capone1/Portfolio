import pdf from '../assets/documents/resume.pdf';

const Header = ({ scrollToSection, myStory, contact, projects }) => {

    const onResumeClick = () => {
        window.open(pdf);
    }

    return (
        <header className='flex flex-row'>
            <div className="flex justify-end z-10 bg-background w-full items-center gap-3 py-4 px-8 font-medium fixed">
                <div className="hidden sm:flex gap-3">
                    <div onClick={() => scrollToSection(myStory)} className="cursor-pointer text-accent text-md md:text-lg lg:text-xl hover:text-middle">
                        My Story
                    </div>
                    <div onClick={() => scrollToSection(projects)} className="cursor-pointer text-accent text-md md:text-lg lg:text-xl hover:text-middle">
                        Projects
                    </div>
                    <div onClick={() => scrollToSection(contact)} className="cursor-pointer text-accent text-md md:text-lg lg:text-xl hover:text-middle">
                        Contact Me
                    </div>
                </div>
                <button onClick={onResumeClick} className="cursor-pointer text-secondAccent px-2 py-1 border-2 rounded-md hover:bg-middle">
                    Resume
                </button>
            </div>
        </header>
    );
}

export default Header;