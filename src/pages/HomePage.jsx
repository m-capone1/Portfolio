import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import FunStuff from "../components/FunStuff";

const HomePage = () => {
    return (
      <section className="bg-background">
        <Header />
        <Hero />
        <About />
        <Projects />
        <FunStuff />
      </section>
    );
  }
  
  export default HomePage;