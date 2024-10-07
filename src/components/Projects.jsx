import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProjectCard from '../components/ProjectCard';
import hypertask from '../assets/images/hypertask.png';
import knee from '../assets/images/knee.png';
import oneHealth from '../assets/images/onehealth.png';
import portfolio from '../assets/images/portfolio.png';
import hypertaskBoard from '../assets/images/hypertask-board.png';
import hypertaskLogin from '../assets/images/hypertask-login.png';

const CustomDot = ({ onClick, active }) => {
  return (
    <button
    className={`w-3 h-3 rounded-full border-2 border-white 
    ${active ? 'bg-secondAccent' : 'bg-transparent'} 
    ${active ? 'border-blue-500' : 'border-gray-500'} mx-1`}
    onClick={onClick}
    />
  );
};

const Projects = ({projects}) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

  return (
    <section className="flex flex-col mx-6 md:mx-8 lg:mx-16 xl:mx-24">
      <h2 ref={projects} className="text-3xl text-secondAccent py-2">Projects</h2>
      <Carousel 
        responsive={responsive}
        customDot={<CustomDot />} 
        showDots={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        keyBoardControl={true}
        transitionDuration={500}>
        <ProjectCard 
          title={"Riopelle-Veer Realty"} 
          img={[]} 
          alt="Riopelle-Veer"
          description="WORK IN PROGRESS - Riopelle-Veer Realty is a a local realty website using JavaScript, Next.js, and Tailwind CSS as my main tech stack. This project is an ongoing redesign aimed at bringing the client's vision to life by creating a modern, user-friendly interface that aligns with their design goals. The site will enhance the overall user experience while maintaining responsiveness and seamless navigation across all devices. As this project is still a work in progress, you can follow along with its development on my GitHub to see how it evolves."
          techStack = {["Next.js", "JavaScript", "Tailwind"]}
          isDeployed= {false}
          isCode={true}
          linkSite=""
          linkCode="https://github.com/m-capone1/Riopelle-Veer-Realty.git"
        />
        <ProjectCard 
          title={"HyperTask"} 
          img={[hypertask, hypertaskBoard, hypertaskLogin]} 
          alt="Hypertask"
          description="HyperTask is an AI-powered tool designed to streamline project management workflow processes. It uses AI to automate the card creation process, making task management more efficient by suggesting tasks based on project goals. Additionally, HyperTask offers real-time project insights, personalized project recommendations, and summaries to help users make decisions and track project progress. For data visualization, HyperTask uses Chart.js to provide users with charts and graphs, offering visual representations of project metrics and performance."
          techStack = {["React", "JavaScript", "SCSS", "Node.js", "MySQL", "Chart.js", "OpenAI API"]}
          isDeployed= {true}
          isCode={true}
          linkSite="https://hyper-task.vercel.app"
          linkCode="https://github.com/m-capone1/HyperTask.git"
        />
        <ProjectCard 
          title={"Portfolio"} 
          img={[portfolio]} 
          alt="Portfolio"
          description ="I created my portfolio website to introduce myself and the projects I have built so far on my software engineering journey. The portfolio highlights my skills, creative projects, and the technologies I have worked with. The website provides details of each project I have completed, and a link to the site if it has been deployed. If no site has been deployed, I have provided a case study of the application detailing the process and learning outcomes."
          techStack = {["React", "JavaScript", "Tailwind"]}
          isDeployed= {true}
          isCode={true}
          linkSite="http://www.madelinecapone.ca"
          linkCode="https://github.com/m-capone1/Portfolio.git"
        />
        <ProjectCard 
          title={"OneHealth"} 
          img={[oneHealth]} 
          alt="OneHealth"
          description="OneHealth is a health application developed during a 24-hour hackathon in partnership with Microsoft, designed to address a problem space that Microsoft is facing: the lack of trust in AI among Canadians. Through extensive research, the team decided that building trust in AI can be achieved by presenting it in a way that is both educational and useful to Canadian users. The overall goal of OneHealth is to empower Canadians by providing them with easy access to their own medical records. When users view their records, the AI offers clear explanations of what they are seeing. This feature aims to enhance user understanding, reduce confusion around complex medical information, and gain Canadian trust in AI’s role in healthcare."
          techStack= {["React", "JavaScript", "Open AI API"]}
          isDeployed= {false}
          isCode={true}
          linkSite=""
          linkCode="https://github.com/m-capone1/OneHealth.git"
        />
        <ProjectCard 
          title={"3D-Printed Knee Brace with Strain Detection"} 
          img={[knee]} 
          alt="knee strain measurement"
          description ="This project combines software, mechanical, and electrical engineering to create a 3D-printed knee brace designed to assess ligament strain to determine if a patient's knee requires further medical intervention. The knee brace is equipped with strech resistance sensors capable of detecting the strain on the lateral and medial ligaments of the knee. I programmed the Arduino Nano using C++ to process real-time strain data from the sensors. The brace's structure was designed using SolidWorks and then 3D-printed. Testing was conducted with the device under different scenarios and data was collected to be analyzed. "
          techStack = {["C++", "3D Design", "Arduino", "SolidWorks"]}
          isDeployed= {false}
          isCode={true}
          linkSite=""
          linkCode="https://www.upwork.com/freelancers/~01bcd5143a6b59b915?p=1520925573338427392"
        />
      </Carousel>;
    </section>
  );
}

export default Projects;