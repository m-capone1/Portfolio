import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProjectCard from '../components/ProjectCard';
import hypertask from '../assets/images/hypertask.png';
import knee from '../assets/images/knee.png';
import oneHealth from '../assets/images/onehealth.png';
import portfolio from '../assets/images/portfolio.png';
import hypertaskBoard from '../assets/images/hypertask-board.png';
import hypertaskLogin from '../assets/images/hypertask-login.png';
import riopelleVeer from '../assets/images/riopelle-veer.png';
import riopelleVeer2 from '../assets/images/riopelle-veer-2.png';

const CustomDot = ({ onClick, active }) => {
    return (
        <button
            className={`h-2 rounded-full mx-1 transition-all duration-300 ${active ? 'bg-primary w-6' : 'bg-white/20 w-2'}`}
            onClick={onClick}
        />
    );
};

const morningRiotImgs = ['/morning-riot-home.png', '/morning-riot-shop.png'];

const Projects = ({ projects }) => {
    const responsive = {
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1, slidesToSlide: 1 },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 1, slidesToSlide: 1 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1, slidesToSlide: 1 },
    };

    return (
        <section className="relative max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-24 py-24 border-t border-white/5">
            <div className="flex flex-col gap-4 mb-12">
                <h2 ref={projects} className="text-4xl md:text-5xl font-bold tracking-tighter uppercase">
                    Selected <span className="text-primary neon-glow">Projects</span>
                </h2>
                <div className="h-1 w-24 bg-primary rounded-full"></div>
            </div>

            <Carousel
                responsive={responsive}
                customDot={<CustomDot />}
                showDots={true}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                keyBoardControl={true}
                transitionDuration={500}
            >
                <ProjectCard
                    title={"Morning Riot"}
                    img={morningRiotImgs}
                    alt="Morning Riot"
                    description="Morning Riot is a custom e-commerce backend built for a coffee roasting business — essentially a Shopify from scratch. It handles product catalog, order management, Stripe payments, and transactional email via Resend. Built with NestJS and PostgreSQL, the REST API includes modules for products, orders, payments, and users, with admin-protected endpoints and a full Stripe Payment Intents + Webhooks flow with real-time stock validation."
                    techStack={["NestJS", "TypeScript", "PostgreSQL", "Stripe", "Docker", "Resend"]}
                    isDeployed={true}
                    isCode={true}
                    linkSite="https://www.morningriot.ca"
                    linkCode="https://github.com/m-capone1/morning-riot"
                />
                <ProjectCard
                    title={"Riopelle-Veer Realty"}
                    img={[riopelleVeer, riopelleVeer2]}
                    alt="Riopelle-Veer"
                    description="WORK IN PROGRESS — Riopelle-Veer Realty is a local realty website using JavaScript, Next.js, and Tailwind CSS. This project is an ongoing redesign aimed at bringing the client's vision to life by creating a modern, user-friendly interface that aligns with their design goals. The site enhances the overall user experience while maintaining responsiveness and seamless navigation across all devices."
                    techStack={["Next.js", "JavaScript", "Tailwind"]}
                    isDeployed={false}
                    isCode={true}
                    linkSite=""
                    linkCode="https://github.com/m-capone1/Riopelle-Veer-Realty.git"
                />
                <ProjectCard
                    title={"HyperTask"}
                    img={[hypertask, hypertaskBoard, hypertaskLogin]}
                    alt="Hypertask"
                    description="HyperTask is an AI-powered tool designed to streamline project management workflows. It uses AI to automate card creation, making task management more efficient by suggesting tasks based on project goals. HyperTask also offers real-time project insights, personalized recommendations, and summaries to help users make decisions and track progress. Chart.js provides visual representations of project metrics and performance."
                    techStack={["React", "JavaScript", "SCSS", "Node.js", "MySQL", "Chart.js", "OpenAI API"]}
                    isDeployed={true}
                    isCode={true}
                    linkSite="https://hyper-task.vercel.app"
                    linkCode="https://github.com/m-capone1/HyperTask.git"
                />
                <ProjectCard
                    title={"Portfolio"}
                    img={[portfolio]}
                    alt="Portfolio"
                    description="I created my portfolio website to introduce myself and the projects I have built on my software engineering journey. The portfolio highlights my skills, creative projects, and the technologies I have worked with. It provides details of each project and a link to the site if deployed, or a case study detailing the process and learning outcomes."
                    techStack={["React", "JavaScript", "Tailwind"]}
                    isDeployed={true}
                    isCode={true}
                    linkSite="http://www.madelinecapone.ca"
                    linkCode="https://github.com/m-capone1/Portfolio.git"
                />
                <ProjectCard
                    title={"OneHealth"}
                    img={[oneHealth]}
                    alt="OneHealth"
                    description="OneHealth is a health application developed during a 24-hour hackathon in partnership with Microsoft, designed to address a lack of trust in AI among Canadians. The team built a platform that empowers Canadians by providing easy access to their own medical records, with AI offering clear explanations of what they are seeing — reducing confusion around complex medical information."
                    techStack={["React", "JavaScript", "Open AI API"]}
                    isDeployed={false}
                    isCode={true}
                    linkSite=""
                    linkCode="https://github.com/m-capone1/OneHealth.git"
                />
                <ProjectCard
                    title={"3D-Printed Knee Brace with Strain Detection"}
                    img={[knee]}
                    alt="knee strain measurement"
                    description="This project combines software, mechanical, and electrical engineering to create a 3D-printed knee brace designed to assess ligament strain and determine if a patient's knee requires further medical intervention. Equipped with stretch resistance sensors, the brace detects strain on the lateral and medial ligaments. I programmed the Arduino Nano in C++ to process real-time sensor data. The structure was designed in SolidWorks and 3D-printed."
                    techStack={["C++", "3D Design", "Arduino", "SolidWorks"]}
                    isDeployed={false}
                    isCode={true}
                    linkSite=""
                    linkCode="https://www.upwork.com/freelancers/~01bcd5143a6b59b915?p=1520925573338427392"
                />
            </Carousel>
        </section>
    );
}

export default Projects;
