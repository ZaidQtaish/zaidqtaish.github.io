import useGlowEffect from "./useGlowEffect.js";
import Menu from "./Menu.jsx";
import Experience from "./Experience.jsx";
import Project from "./Project.jsx";
import Education from "./Education.jsx";
import projectsList from "./projects.json";
function App() {
  useGlowEffect();
  const projectComponents = projectsList.map((project) => (
    <Project
      key={project.id}
      title={project.title}
      description={project.description}
      image={project.image}
      link={project.link}
      skills={project.skills}
    />
  ));
  return (
    <>
      <div className="container">
        <Menu />
        <div className="info">
          <Experience />
          <section id="projects">{projectComponents}</section>
          <Education />
        </div>
        <div className="social-flex social-mobile sub">
          <a href="https://github.com/ZaidQtaish" target="_blank">
            <i className="fa-brands fa-github fa-2xl"></i>
          </a>
          <a href="https://www.linkedin.com/in/zaid-qtaish/" target="_blank">
            <i className="fa-brands fa-linkedin fa-2xl"></i>
          </a>
          <a href="https://codepen.io/xFxdedFade" target="_blank">
            <i className="fa-brands fa-codepen fa-2xl"></i>
          </a>
          <a href="mailto: enderzaide@gmail.com" target="_blank">
            <i className="fa-solid fa-envelope fa-2xl"></i>
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
