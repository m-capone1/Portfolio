import { useRef } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import FunStuff from "../components/FunStuff";
import Contact from "../components/Contact";
import Footer from '../components/Footer';

const HomePage = () => {

  const myStory = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <section className="bg-background">
      <Header 
        scrollToSection={scrollToSection}
        myStory= {myStory}
        projects={projects}
        contact={contact}
      />
      <Hero 
        scrollToSection={scrollToSection} 
        contact={contact}/>
      <About myStory= {myStory}/>
      <Projects projects={projects}/>
      {/* <FunStuff /> */}
      <Contact contact={contact}/>
      <Footer />
    </section>
  );
}
  
export default HomePage;