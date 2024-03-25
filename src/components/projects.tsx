import "./components.scss";
import arrow from '../assets/arrow.png'
import candyGamble from '../assets/candygamble.jpg'
import creativeIa from '../assets/creativeIa.jpg'
import gifEcommerse from '../assets/gifEcoomerse.gif'

const Projects = () => {

  const handleOnClick = () => {
    window.location.href = '#contact';
  }

  const redirectToGithub = () => {
    window.open('https://github.com/agoss-snm/CandyGamble', '_blank');
  }

  const redirectToLiveDemo = () => {
    window.open('https://agoss-snm.github.io/CandyGamble/index.html', '_blank');
  }


  const redirectToLiveDemoCreative = () =>{
    window.open('https://creativestuddio.netlify.app/', '_blank');
  }

  const redirectToCreativefront= ()=> {
    window.open('https://github.com/agoss-snm/frontend-CreativeStudio', '_blank')
  }

  const redirectToCreativeBack=()=>{
    window.open('https://github.com/agoss-snm/backend-CreativeStudio', '_blank')
  }

  const redirectToEcommerseGitHub=()=>{
    window.open('https://github.com/agoss-snm/ShoStore?tab=readme-ov-file', '_blank')
  }
  const redirectToEccomerseLive=()=>[
    window.open('https://shostore.netlify.app/', '_blank')
  ]

  return (
    <div className="container">
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src={candyGamble}
                alt="Project 1"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Project One</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={redirectToGithub}
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={redirectToLiveDemo}
              >
                Live Demo
              </button>
            </div>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src={creativeIa}
                alt="Project 2"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Project Two</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={redirectToCreativefront}
              >
                Github FrontEnd
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={redirectToCreativeBack}
              >
                Github Backend
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={redirectToLiveDemoCreative}
              >
                Live Demo
              </button>
            </div>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src={gifEcommerse}
                alt="Project 3"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Project Three</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={redirectToEcommerseGitHub}
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={redirectToEccomerseLive}
              >
                Live Demo
              </button>
            </div>
          </div>
        </div>
      </div>
      <img
        src={arrow}
        alt="Arrow icon"
        className="icon arrow"
        onClick={handleOnClick}
      />
    </section>




    </div>
  );
};

export default Projects;
