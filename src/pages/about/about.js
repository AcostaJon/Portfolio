import Header from "../../components/header";
import Footer from "../../components/footer";
import "./_about.scss";
import "../../sass/index.scss";

function Content(props) {
  return (
    <div id="content_bg">
      <div id="content">
        <div className="background_desc">
          <h2>Background</h2>
          <p>
            Hello, my name is Jonathan Acosta and I’m a Front End Web Developer from palm beach, Fl. I've traveled to many places and worked for
            several different companies. I’ve been a logistics worker and a cook but my passion has always been with technology. I’m thrilled to begin
            a career as a developer and will always look for new ways to improve my skills.
          </p>
        </div>
        <div className="education_desc">
          <h2>Education</h2>
          <ul>
            <li>(2022) Front End Web Tech Degree TeamTreehouse</li>
            <li>(2017-2019) Associates of arts (A.A) Palm Beach State College</li>
          </ul>
        </div>
        <a href="https://teamtreehouse.com/ja17" target="_blank" rel="noreferrer">
          <svg
            version="1.1"
            id="treehouse_logo"
            x="0px"
            y="0px"
            width="100px"
            height="100px"
            viewBox="0 0 100 100"
            enable-background="new 0 0 100 100"
          >
            <path
              d="M49.165,39.829c-4.657,3.569-9.147,7.375-14.374,10.134c-0.805,0.424-1.617,0.818-2.504,1.064
	c-2.403,0.664-4.022,2.848-3.995,5.316c0.027,2.404,1.728,4.602,4.035,5.211c2.397,0.632,5.021-0.336,6.117-2.566
	c1.441-2.941,3.917-4.77,6.447-6.576c0.98-0.698,1.347-0.599,2.136,0.34c0.879-1.788,1.739-3.531,2.602-5.285
	c0.268,0.158,0.206,0.327,0.168,0.455c-1.433,4.971-2.683,9.996-4.333,14.9c-0.362,1.081-0.887,1.932-1.946,2.604
	c-2.8,1.774-3.509,5.462-1.78,8.305c1.687,2.773,5.243,3.746,8.16,2.229c2.886-1.498,4.159-5.016,2.731-7.971
	c-0.511-1.059-0.546-2.004-0.267-3.055c0.733-2.781,1.176-5.658,2.691-8.183c0.67-1.116,1.462-2.126,2.563-2.85
	c1.274-0.842,2.244-0.669,3.166,0.536c1.108,1.451,1.659,3.041,1.506,4.908c-0.209,2.553,1.348,4.816,3.712,5.617
	c2.311,0.787,4.852-0.047,6.253-2.044c1.464-2.086,1.402-4.719-0.332-6.697c-1.985-2.269-4.128-4.39-5.936-6.815
	c-3.092-4.147-3.367-8.433-0.753-12.913c1.425-2.437,2.8-4.904,4.218-7.347c1.265-2.175,2.849-4.059,5.091-5.302
	c1.893-1.051,3.756-1.246,5.676,0.016c1.229,0.809,2.566,1.455,3.838,2.201c2.888,1.695,4.422,4.222,4.429,7.576
	c0.021,10.938,0.021,21.873-0.001,32.806c-0.008,3.282-1.496,5.829-4.325,7.442c-9.868,5.629-19.764,11.21-29.668,16.776
	c-2.933,1.648-5.955,1.656-8.891,0.013c-9.965-5.585-19.925-11.18-29.85-16.836c-2.759-1.572-4.228-4.072-4.234-7.291
	c-0.019-11.027-0.018-22.059,0-33.087c0.006-3.18,1.436-5.686,4.159-7.238c10.054-5.743,20.144-11.43,30.264-17.06
	c2.595-1.441,5.385-1.381,8.061-0.079c1.551,0.752,3.02,1.671,4.515,2.532c1.19,0.682,1.715,1.797,1.872,3.101
	c0.279,2.302-0.282,4.427-1.402,6.418c-1.368,2.434-2.693,4.899-4.153,7.278c-2.641,4.301-6.46,6.925-11.48,7.723
	c-3.206,0.506-6.39,0.077-9.571-0.28c-2.353-0.267-4.523,0.997-5.311,3.159c-0.802,2.211,0.017,4.577,2.016,5.828
	c1.977,1.233,4.445,0.929,6.099-0.826c1.041-1.099,2.44-1.039,3.743-1.266c1.015-0.178,2.056-0.212,3.09-0.27
	c0.37-0.021,0.655-0.187,0.957-0.345c1.556-0.818,3.106-1.635,4.657-2.458C49.074,39.732,49.12,39.778,49.165,39.829z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

function About() {
  return (
    <div id="about_page">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default About;
