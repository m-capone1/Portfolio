import { useState } from "react";
import emailjs from '@emailjs/browser';

const Contact = ({ contact }) => {
    const [formData, setFormData] = useState({
        from_name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceID = 'service_b71412g';
        const templateID = 'template_hdcxybt';

        const templateParams = {
            from_name: formData.from_name,
            to_name: 'Maddy',
            message: formData.message,
            email: formData.email
        };

        emailjs.send(serviceID, templateID, templateParams, 'fbjHwKB6xUefr7i6t')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Message sent successfully!');
                setFormData({ from_name: '', email: '', message: '' })
            })
            .catch((error) => {
                console.error('FAILED...', error);
                alert('Failed to send message.');
            });
    }
    
    return (
        <section className="flex flex-col mx-6 md:mx-8 lg:mx-16 xl:mx-24">
            <h2 ref={contact} className="text-3xl text-secondAccent py-2">
                Contact Me
            </h2>
            <form className="text-white-100 mx-4 mb-4 shadow-card" onSubmit={handleSubmit}>
                <div className="flex flex-col lg:flex-row">
                    <div className="flex flex-col p-4 w-full">
                        <label>Name</label>
                        <input 
                            type="text"
                            name="from_name"
                            placeholder="Your name"
                            className="rounded-lg h-8 p-2 outline-none text-sm text-background"
                            value={formData.from_name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="flex flex-col p-4 w-full">
                        <label>Email</label>
                        <input 
                            type="email"
                            name="email"
                            placeholder="Your email"
                            className="rounded-lg h-8 p-2 outline-none text-sm text-background"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="flex flex-col p-4">
                    <label>Message</label>
                    <textarea 
                        name="message"
                        placeholder="Your message :)"
                        className="resize-none h-24 rounded-lg p-2 outline-none text-sm text-background"
                        value={formData.message}
                        onChange={handleChange}
                        required 
                    ></textarea>
                </div>
                <button className="bg-middle w-1/5 rounded-lg h-8 m-4" type="submit">
                    Send
                </button>
            </form>
        </section>
    );
}

export default Contact;