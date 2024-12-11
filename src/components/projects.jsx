import projectsData from "./projectsData";
import "./projects.css";

export default function Projects() {
  return (
    <div className="projects-container" id="project">
     <p className="html">&lt;h1&gt;</p>
      <h1> My Projects <p className="html">&lt;/h1&gt;</p></h1>
      <div className="projects">
        {projectsData.map((project) => (
          <div
            className="project"
            key={project.id}
          >
            <h2 className="project-name">{project.name}</h2>
            <p className="project-description">{project.description}</p>
            <p className="project-technologies">
              <strong>Technologies:</strong> {project.technologies.join(", ")}
            </p>
            <p className="project-link">
               <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{textDecoration:"none",color:"white"}}
              >
                Live Demo
              </a>{" "}
              |{" "}<a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{textDecoration:"none",color:"white"}}
              >
                Source
              </a>
             
            </p>
           
          </div>
        ))}
      </div>
    </div>
  );
}
