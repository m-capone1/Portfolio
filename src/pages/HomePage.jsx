import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import FunStuff from "../components/FunStuff";
import Contact from "../components/Contact";
import Footer from '../components/Footer';

const HomePage = () => {
    return (
      <section className="bg-background">
        <Header />
        <Hero />
        <About />
        <Projects />
        <FunStuff />
        <Contact />
        <Footer />
      </section>
    );
  }
  
  export default HomePage;