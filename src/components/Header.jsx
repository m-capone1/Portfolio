import pdf from '../assets/documents/resume.pdf';

const Header = () => {

    const onResumeClick = () => {
        window.open(pdf);
    }

    return (
        <header className="flex justify-end items-center gap-3 pt-4 mr-4 text-base font-medium md:text-lg lg:text:xl ">
            <div className="cursor-pointer text-accent">
                About Me
            </div>
            <div className="cursor-pointer text-accent">Projects</div>
            <div className="cursor-pointer text-accent">
                Fun Stuff
            </div>
            <button onClick = {onResumeClick} className="cursor-pointer text-secondAccent px-2 py-1 ml-8 border-2 rounded-md hover:bg-middle">
                Resume
            </button>
        </header>
    );
}

export default Header;