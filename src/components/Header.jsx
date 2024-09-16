import pdf from '../assets/documents/resume.pdf';
import logo from '../assets/logo/logo.png';

const Header = ({scrollToSection, myStory, contact, projects}) => {

    const onResumeClick = () => {
        window.open(pdf);
    }

    return (
        <header className='flex flex-row'>
            <div className="flex justify-end z-10 bg-background w-full items-center gap-3 py-4 px-8 text-base font-medium md:text-lg lg:text:xl fixed">
                <div onClick={() => scrollToSection(myStory)} className="cursor-pointer text-accent">
                    My Story
                </div>
                <div onClick={() => scrollToSection(projects)} className="cursor-pointer text-accent">
                    Projects
                </div>
                <div onClick={() => scrollToSection(contact)} className="cursor-pointer text-accent">
                    Contact Me 
                </div>
                {/* <div className="cursor-pointer text-accent">
                    Fun Stuff
                </div> */}
                <button onClick = {onResumeClick} className="cursor-pointer text-secondAccent px-2 py-1 border-2 rounded-md hover:bg-middle">
                    Resume
                </button>
            </div>
        </header>
    );
}

export default Header;