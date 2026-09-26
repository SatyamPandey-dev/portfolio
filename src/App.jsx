import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Aboutme from "./components/Aboutme";
import Projects from "./components/Projects";
import Contactme from "./components/Contactme";
// }  #030316   bg-[#020211]

function App() {
  return (
    <div className="relative bg-[#020211] min-h-screen w-full">
      <Navbar />

      {/* Sections */}
      <section id="home">
        <Hero />
      </section>

      <section
        id="about"
        className="h-screen flex justify-center items-center text-4xl text-sky-400 m-0 "
      >
        <Aboutme />
      </section>

      <section
        id="projects"
        // className="h-screen flex justify-center items-center text-4xl text-sky-400"
      >
        <Projects />
      </section>

      <section
        id="contact"
        // className="h-screen flex justify-center items-center text-4xl text-sky-400"
      >
        <Contactme />
      </section>
    </div>
  );
}

export default App;
