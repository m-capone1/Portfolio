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
          title={"HyperTask"} 
          img={[hypertask, hypertaskBoard, hypertaskLogin]} 
          alt="Hypertask"
          description ="An AI powered project management tool that streamlines streamline repetitive tasks."
          techStack = {["React", "JavaScript", "Node.js", "SCSS", "OpenAI API"]}
        />
        <ProjectCard 
          title={"Portfolio"} 
          img={[portfolio]} 
          alt="Portfolio"
          description =""
          techStack = {["React", "JavaScript", "Tailwind"]}
        />
        <ProjectCard 
          title={"OneHealth"} 
          img={[oneHealth]} 
          alt="OneHealth"
          description =""
          techStack = {["React", "JavaScript", "Open AI API"]}
        />
        <ProjectCard 
          title={"PriceSlueth"} 
          img={[hypertask]} 
          alt="PriceSlueth"
          description =""
          techStack = {["React", "TypeScript"]}
        />
        <ProjectCard 
          title={"Knee Strain Measurement"} 
          img={[knee]} 
          alt="knee strain measurement"
          description =""
          techStack = {["C++", "3D Design", "Arduino", "Mechanical Engineering"]}
        />
      </Carousel>;
    </section>
  );
}

export default Projects;