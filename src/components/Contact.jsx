import { useState } from "react";
import emailjs from '@emailjs/browser';

const Contact = ({ contact }) => {
    const [formData, setFormData] = useState({
        from_name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
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
                setFormData({ from_name: '', email: '', message: '' });
            })
            .catch((error) => {
                console.error('FAILED...', error);
                alert('Failed to send message.');
            });
    }

    const inputClass = "bg-surface-dark border border-white/10 text-white rounded-lg px-4 py-3 outline-none text-sm placeholder:text-slate-600 focus:border-primary/50 transition-colors w-full";

    return (
        <section className="relative max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-24 py-24 border-t border-white/5">
            <div className="flex flex-col gap-4 mb-12">
                <h2 ref={contact} className="text-4xl md:text-5xl font-bold tracking-tighter uppercase">
                    Get in <span className="text-primary neon-glow">Touch</span>
                </h2>
                <div className="h-1 w-24 bg-primary rounded-full"></div>
            </div>

            <form className="floating-card rounded-xl p-8 max-w-2xl" onSubmit={handleSubmit}>
                <div className="flex flex-col lg:flex-row gap-4 mb-4">
                    <div className="flex flex-col gap-2 w-full">
                        <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Name</label>
                        <input
                            type="text"
                            name="from_name"
                            placeholder="Your name"
                            className={inputClass}
                            value={formData.from_name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                        <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Your email"
                            className={inputClass}
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-2 mb-6">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Message</label>
                    <textarea
                        name="message"
                        placeholder="Your message"
                        className={`${inputClass} resize-none h-32`}
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-primary text-background-dark font-bold py-3 px-10 rounded-full text-xs uppercase tracking-widest hover:brightness-110 transition-all shadow-primary-glow"
                >
                    Send Message
                </button>
            </form>
        </section>
    );
}

export default Contact;
