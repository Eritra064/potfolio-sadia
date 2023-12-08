import { projects } from "./ProjectList";

const Projects = () => {
    return ( 
        <div className="projects-page">
        <div className="project-left-side">
          {/* <h1>Projects</h1> */}
          {projects.map((project) => (
            <div className="project-preview" key={project.id}>
              <h2>{project.title}</h2>
              <p>Tech used: {project.stack}</p>
              <a href={project.link}>Visit</a>
            </div>
          ))}
        </div>
        <div className="project-right-side">
          {/* Icons go here */}
          <h3 className="skills">Skills</h3>
          <div className="skil-icons">
          <img src="./images/html-5.png" alt="HTML Icon" />
          <img src="./images/css-3.png" alt="CSS Icon" />
          <img src="./images/js.png" alt="JavaScript Icon" />
          <img src="./images/atom.png" alt="React Icon" />
          <img src="./images/nodejs.png" alt="NodeJs Icon" />
          <img src="./images/wordpress.png" alt="WordPress Icon" />
          <img src="./images/sql-server.png" alt="SQL Icon" />
          {/* Add more icons as needed */}
          </div>
        </div>
      </div>
     );
}
 
export default Projects;