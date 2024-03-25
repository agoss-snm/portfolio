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
    <div className='container'>
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
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quis aperiam sunt doloribus commodi, impedit atque libero. Aut pariatur hic eveniet explicabo nisi perferendis vel deserunt sequi, voluptatibus modi fugit incidunt distinctio recusandae laboriosam, sapiente delectus quos saepe possimus ex laudantium autem quas temporibus quasi? Quidem nesciunt consequatur dicta, corrupti nobis ratione architecto nemo esse magnam assumenda ipsa accusantium quis perferendis voluptatem quisquam. Quod nobis reiciendis veritatis impedit nemo. Quasi minima, quis sapiente doloremque culpa repellendus cum? Hic ipsa necessitatibus corrupti dolor alias quod odio, possimus quisquam facilis minima autem adipisci sit saepe perferendis iusto laboriosam. Fugit, sit! Ea eveniet consequatur provident quae magni ratione aperiam asperiores libero neque. Doloribus atque saepe ab perferendis eos ea esse illo et illum?</p>
            </div>

        </div>
      </div>
      <img src={arrow} 
      alt="arrow icon" 
      className="icon arrow"
      onClick={handleOnClick}
      />
    </section>
    </div>
  );
};

export default AboutMe;
