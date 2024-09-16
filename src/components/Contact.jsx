
const Contact = ({contact}) => {
    return (
        <section className="flex flex-col mx-6 md:mx-8 lg:mx-16 xl:mx-24">
            <h2 ref={contact} className="text-3xl text-secondAccent py-2">
                Contact Me
            </h2>
            <form className="text-white-100 mx-4 mb-4 shadow-card">
                <div className="flex flex-col lg:flex-row">
                    <div className="flex flex-col p-4 w-full">
                        <label>Name</label>
                        <input placeholder ="Your name" className="rounded-lg h-8 p-2 outline-none text-sm text-background"></input>
                    </div>
                    <div className="flex flex-col p-4 w-full">
                        <label>Email</label>
                        <input placeholder ="Your name" className="rounded-lg h-8 p-2 outline-none text-sm text-background"></input>
                    </div>
                </div>
                <div className="flex flex-col p-4">
                    <label>Message</label>
                    <textarea placeholder ="Your message :)" className="resize-none h-24 rounded-lg p-2 outline-none text-sm text-background"></textarea>
                </div>
                <button className="bg-middle w-1/5 rounded-lg h-8 m-4">
                    Send
                </button>
            </form>
        </section>
    );
}

export default Contact;