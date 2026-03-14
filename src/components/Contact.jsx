import { useState } from "react";
import emailjs from '@emailjs/browser';
import linkedin from '../assets/images/linkedin.png';
import github from '../assets/images/github.png';

const Contact = ({ contact }) => {
    const [formData, setFormData] = useState({
        from_name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState(null); // { type: 'success' | 'error', message: string }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (status) setStatus(null);
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
            .then(() => {
                setStatus({ type: 'success', message: 'Message sent! I\'ll get back to you soon.' });
                setFormData({ from_name: '', email: '', message: '' });
            })
            .catch((error) => {
                const msg = error?.text || error?.message || 'Something went wrong. Please try again.';
                setStatus({ type: 'error', message: msg });
            });
    }

    const socialLinks = [
        {
            label: 'LinkedIn',
            href: 'https://www.linkedin.com/in/madeline-capone/',
            icon: linkedin,
            alt: 'linkedin',
        },
        {
            label: 'GitHub',
            href: 'https://github.com/m-capone1',
            icon: github,
            alt: 'github',
        },
    ];

    return (
        <section className="relative max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-24 py-24 border-t border-white/5">
            {/* Ambient blobs */}
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-primary/10 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 -left-20 w-96 h-96 bg-accent-pink/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="relative z-10 max-w-2xl mx-auto">
                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 ref={contact} className="text-5xl md:text-6xl font-bold tracking-tighter italic leading-tight pb-1">
                        Say <span className="holographic-text pr-2">Hello</span>
                    </h2>
                    <div className="flex items-center justify-center gap-3 mt-5">
                        <div className="h-px w-8 bg-gradient-to-r from-transparent to-primary/40"></div>
                        <p className="text-primary/70 text-[10px] font-bold tracking-[0.25em] uppercase">Open for collaborations</p>
                        <div className="h-px w-8 bg-gradient-to-l from-transparent to-primary/40"></div>
                    </div>
                </div>

                {/* Social link buttons */}
                <div className="flex flex-col gap-3 mb-12">
                    {socialLinks.map(({ label, href, icon, alt }) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="pearlescent-btn flex items-center justify-between group px-6 py-4 rounded-2xl transition-all duration-300 hover:brightness-110 active:scale-[0.97]"
                        >
                            <div className="flex items-center gap-4">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/40">
                                    <img src={icon} alt={alt} className="w-5 h-auto" />
                                </div>
                                <span className="text-background-dark text-base font-bold tracking-tight">{label}</span>
                            </div>
                            <svg className="w-4 h-4 text-background-dark/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                            </svg>
                        </a>
                    ))}
                </div>

                {/* Divider label */}
                <p className="text-primary/50 text-sm font-bold tracking-[0.4em] uppercase mb-5">Send a Message</p>

                {/* Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="glow-input flex-1 border border-primary/10 rounded-2xl bg-white/[0.03] overflow-hidden">
                            <input
                                type="text"
                                name="from_name"
                                placeholder="Name"
                                className="bg-transparent w-full text-white px-5 py-4 outline-none placeholder:text-primary/50 tracking-wider text-sm font-medium"
                                value={formData.from_name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="glow-input flex-1 border border-primary/10 rounded-2xl bg-white/[0.03] overflow-hidden">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="bg-transparent w-full text-white px-5 py-4 outline-none placeholder:text-primary/50 tracking-wider text-sm font-medium"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="glow-input border border-primary/10 rounded-2xl bg-white/[0.03] overflow-hidden">
                        <textarea
                            name="message"
                            placeholder="Type your message here..."
                            rows="5"
                            className="bg-transparent w-full text-white px-5 py-4 outline-none placeholder:text-primary/50 tracking-wider text-sm font-medium resize-none"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    {status && (
                        <p className={`text-sm font-medium tracking-wide ${status.type === 'success' ? 'text-primary' : 'text-red-400'}`}>
                            {status.message}
                        </p>
                    )}
                    <button
                        type="submit"
                        className="mt-2 h-14 bg-primary text-background-dark font-black text-xs uppercase tracking-[0.3em] rounded-2xl hover:brightness-110 active:scale-[0.98] transition-all shadow-primary-glow"
                    >
                        Send Signal
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
