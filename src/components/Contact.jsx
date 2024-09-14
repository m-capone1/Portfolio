
const Contact = () => {
    return (
        <section className="flex flex-col mx-6 md:mx-8 lg:mx-16 xl:mx-24">
            <h2 className="text-3xl text-secondAccent py-2">
                Contact Me
            </h2>
            <form className="flex flex-col text-white-100 gap-4 mb-4">
                <div className="flex flex-col">
                    <label>Name</label>
                    <input placeholder ="Your name" className="rounded-lg h-8 p-2 outline-none text-sm"></input>
                </div>
                <div className="flex flex-col">
                    <label>Email</label>
                    <input placeholder ="Your name" className="rounded-lg h-8 p-2 outline-none text-sm"></input>
                </div>
                <div className="flex flex-col">
                    <label>Message</label>
                    <textarea placeholder ="Your message :)" className="resize-none h-24 rounded-lg p-2 outline-none text-sm"></textarea>
                </div>
                <button>
                    Send
                </button>
            </form>
        </section>
    );
}

export default Contact;