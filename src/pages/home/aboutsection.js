import { Link } from "react-router-dom";
function AboutSection(props) {
  return (
    <div id="about" className="section">
      <h3 id="about_title">ABOUT</h3>
      <h4 className="init_hide">
        Click here to view{" "}
        <Link className="init_hide" to="about" title="About page">
          ABOUT
        </Link>
      </h4>
    </div>
  );
}
export default AboutSection;
