import { useRef } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import SkillNebula from "../components/SkillNebula";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from '../components/Footer';

const HomePage = () => {
  const myStory = useRef(null);
  const skills = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <section className="bg-background-dark">
      <Header
        scrollToSection={scrollToSection}
        myStory={myStory}
        skills={skills}
        projects={projects}
        contact={contact}
      />
      <Hero 
        scrollToSection={scrollToSection} 
        contact={contact}/>
      <About myStory={myStory}/>
      <SkillNebula skillsRef={skills}/>
      <Projects projects={projects}/>
      <Contact contact={contact}/>
      <Footer />
    </section>
  );
}
  
export default HomePage;