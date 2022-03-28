import Header from "../../components/header";
import Footer from "../../components/footer";
import Employeedir from "../../images/employeedir.png";
import userdash from "../../images/userDashboard.png";
import webapp from "../../images/webapp.png";
import photogallery from "../../images/photoGallery.png";
import responsive from "../../images/responsive.png";
import signUpForm from "../../images/signUpForm.png";
import projectsImg from "../../images/projects.png";
import userResume from "../../images/userResume.png";
import "./_projects.scss";
// project-8 Employee Directory
function Project1(props) {
  return (
    <div className="project project-1">
      <div className="project_imgBox">
        <img src={Employeedir} alt="" />
        <div className="languages_container">
          <ul className="languages">
            <li>HTML</li>
            <li>CSS</li>
            <li>JS</li>
          </ul>
        </div>
      </div>
      <div className="project_descBox">
        <h1>Employee Directory</h1>
        <p>Manipulating a Random-User-Generator API to build a prototype for an Awesome Startup employee directory.</p>
        <div id="project_btns">
          <button>
            <a href="https://github.com/AcostaJon/techdegree-project-8" target="_blank" rel="noreferrer">
              View Code
            </a>
          </button>
          <button>
            <a href="fewprojects/techdegree-project-8" target="_blank" rel="noreferrer">
              View Project
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
// project-7 User Dashboard
function Project2(props) {
  return (
    <div className="project project-2">
      <div className="project_imgBox">
        <img src={userdash} alt="" />
        <div>
          <ul className="languages">
            <li>HTML</li>
            <li>CSS</li>
            <li>JS</li>
          </ul>
        </div>
      </div>
      <div className="project_descBox">
        <h1>User Dashboard</h1>
        <p>
          A custom back-end dashboard for your client. Includes dynamic bar, pie, and line chart, social media statistics, new member
          directory/activity feed, a user messenger, and more...
        </p>
        <div id="project_btns">
          <button>
            <a href="https://github.com/AcostaJon/techdegree-project-7" target="_blank" rel="noreferrer">
              View Code
            </a>
          </button>
          <button>
            <a href="fewprojects/techdegree-project-7" target="_blank" rel="noreferrer">
              View Project
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

function Project3(props) {
  return (
    <div className="project project-3">
      <div className="project_imgBox">
        <img src={webapp} alt="" />
        <div>
          <ul className="languages">
            <li>HTML</li>
            <li>CSS</li>
            <li>JS</li>
          </ul>
        </div>
      </div>
      <div className="project_descBox">
        <h1>Wheel Of Success</h1>
        <p>
          Ever play Wheel of Fortune? Try to guess a random phrase by choosing letters from an on-screen keyboard. Keep guessing letters until you
          win. Just remember you only get 5 strikes and you are out.
        </p>
        <div id="project_btns">
          <button>
            <a href="https://github.com/AcostaJon/techdegree-project-6" target="_blank" rel="noreferrer">
              View Code
            </a>
          </button>
          <button>
            <a href="fewprojects/techdegree-project-6" target="_blank" rel="noreferrer">
              View Project
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

function Project4(props) {
  return (
    <div className="project project-4">
      <div className="project_imgBox">
        <img src={photogallery} alt="" />
        <div>
          <ul className="languages">
            <li>HTML</li>
            <li>CSS</li>
            <li>JS</li>
          </ul>
        </div>
      </div>
      <div className="project_descBox">
        <h1>Photo Gallery</h1>
        <p>Simplistic photo gallery for a photographer to show off his/her work. Contains a search bar for filtering images.</p>
        <div id="project_btns">
          <button>
            <a href="https://github.com/AcostaJon/techdegree-project-5" target="_blank" rel="noreferrer">
              View Code
            </a>
          </button>
          <button>
            <a href="fewprojects/techdegree-project-5" target="_blank" rel="noreferrer">
              View Project
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

function Project5(props) {
  return (
    <div className="project project-5">
      <div className="project_imgBox">
        <img src={responsive} alt="" />
        <div>
          <ul className="languages">
            <li>HTML</li>
            <li>CSS</li>
            <li>JS</li>
            <li>Sass</li>
          </ul>
        </div>
      </div>
      <div className="project_descBox">
        <h1>A Web Style Guide</h1>
        <p>
          This Guide shows off its responsive design. Witness all sorts of elements in various sizes by adjusting the browser to a different width and
          height.
        </p>
        <div id="project_btns">
          <button>
            <a href="https://github.com/AcostaJon/techdegree-project-4" target="_blank" rel="noreferrer">
              View Code
            </a>
          </button>
          <button>
            <a href="fewprojects/techdegree-project-4" target="_blank" rel="noreferrer">
              View Project
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

function Project6(props) {
  return (
    <div className="project project-6">
      <div className="project_imgBox">
        <img src={signUpForm} alt="" />
        <div>
          <ul className="languages">
            <li>HTML</li>
            <li>CSS</li>
            <li>JS</li>
          </ul>
        </div>
      </div>
      <div className="project_descBox">
        <h1>Newsletter Signup Form</h1>
        <p>
          Email marketing can be a very effective way to cultivate relationships with your followers. Whether that’s through an email popup,
          designated landing page, or other type of design.
        </p>
        <div id="project_btns">
          <button>
            <a href="https://github.com/AcostaJon/My-techdegree-project-3" target="_blank" rel="noreferrer">
              View Code
            </a>
          </button>
          <button>
            <a href="fewprojects/techdegree-project-3" target="_blank" rel="noreferrer">
              View Project
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

function Project7(props) {
  return (
    <div className="project project-7">
      <div className="project_imgBox">
        <img src={projectsImg} alt="" />
        <div>
          <ul className="languages">
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>
      </div>
      <div className="project_descBox">
        <h1>Student Portfolio</h1>
        <p>A student displaying his/her portfolio. Contains 3 different sections: bio, portfolio and contact.</p>
        <div id="project_btns">
          <button>
            <a href="https://github.com/AcostaJon/techdegree-project-2" target="_blank" rel="noreferrer">
              View Code
            </a>
          </button>
          <button>
            <a href="fewprojects/techdegree-project-2" target="_blank" rel="noreferrer">
              View Project
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

function Project8(props) {
  return (
    <div className="project project-9">
      <div className="project_imgBox">
        <img src={userResume} alt="" />
        <div>
          <ul className="languages">
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>
      </div>
      <div className="project_descBox">
        <h1>User Resume</h1>
        <p>An overview of a job applicant's qualifications, relevant work history, skills and goals for a position in a particular industry.</p>
        <div id="project_btns">
          <button>
            <a href="https://github.com/AcostaJon/techdegree-project-1" target="_blank" rel="noreferrer">
              View Code
            </a>
          </button>
          <button>
            <a href="fewprojects/techdegree-project-1" target="_blank" rel="noreferrer">
              View Project
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="titleProjectsPage_container">
      <h1>
        <i class="fas fa-code"></i>
      </h1>
      <h1>Apps I've Built</h1>
      <p>All apps are fully responsive to mobile, tablet and desktop views.</p>
    </div>
  );
}

function ProjectsContainer(props) {
  return (
    <div id="projects_container">
      <Title />
      <Project1 />
      <Project2 />
      <Project3 />
      <Project4 />
      <Project5 />
      <Project6 />
      <Project7 />
      <Project8 />
    </div>
  );
}

function Projects() {
  return (
    <div id="projects_page">
      <Header />
      <ProjectsContainer />
      <Footer />
    </div>
  );
}

export default Projects;
