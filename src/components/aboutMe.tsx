import "./components.scss";
import profileabout from '../assets/profileabout.jfif'
import experience from '../assets/experience.png'
import educational from '../assets/education.png'
import arrow from '../assets/arrow.png'

const AboutMe = () => {


  const handleOnClick = () => {
    window.location.href = '#experience';
  }


  return (
    <section id="about">
      <p className="section_text_p1">Get To Know More</p>
      <h1 className='title'>About Me</h1>
      <div className='section-container'>
        <div className='section_pic-container'>
            <img src={profileabout} alt="" className='about-pic'/>
        </div>

        <div className='about-details-container'>
            <div className="about-containers">
                <div className="details-container">
                    <img src={experience} alt="experience icon" className='icon'/>
                    <h3>Experience</h3>
                    <p>2+ years <br/> Frontend Development</p>
                </div>
                <div className='details-container'>
                  <img src={educational} alt="educational icon" className="icon" />
                  <h3>Education</h3>
                  <p>Bachelors Degree</p>
                </div>
            </div>

            <div className='text-container'>
              <p>Hello! My name is Agostina, I am a web developer.
Throughout my training, I have worked on various projects, both on my own and collaborating with other professionals.
  One of my most rewarding achievements was developing a website for a renewable energy company,
where I worked in collaboration with a UX/UI designer and another programmer.
  This experience taught me the importance of collaboration and how to integrate design and functionality to create different solutions to client needs.
In addition to my JavaScript and React skills, I also have experience working with projects in Java, Joomla, WordPress, c#, and relational databases such as my SQL.
I have worked with various CSS-related technologies and frameworks to deliver exceptional visual experiences. Some of the tools and technologies I have used include CSS and SCSS, Bootstrap, Styled Components, Material Design, Ant Design and Tailwind CSS.
My purpose is to continue growing as a web developer and contribute to the development of
innovative solutions that improve the user experience.
</p>
            </div>

        </div>
      </div>
      <img src={arrow} 
      alt="arrow icon" 
      className="icon arrow"
      onClick={handleOnClick}
      />
    </section>
  );
};

export default AboutMe;
