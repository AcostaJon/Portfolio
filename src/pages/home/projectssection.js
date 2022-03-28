import { Link } from "react-router-dom";
function ProjectsSection(props) {
  return (
    <div id="projects" className="section">
      <h3 id="projects_title">PROJECTS</h3>
      <h4 className="init_hide">
        Click here to view{" "}
        <Link className="init_hide" to="projects" title="Projects page">
          PROJECTS
        </Link>
      </h4>
    </div>
  );
}
export default ProjectsSection;
