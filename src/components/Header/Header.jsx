
const Header = () => {
    return (
        <header className="flex justify-end gap-3 pt-4 mr-4 text-base font-medium md:text-lg lg:text:xl">
            <div className="cursor-pointer text-accent">
                About Me
            </div>
            <div className="cursor-pointer text-accent">Projects</div>
            <div className="cursor-pointer text-accent">
                Fun Stuff
            </div>
            <div className="cursor-pointer text-accent">
                Socials
            </div>
        </header>
    );
}

export default Header;