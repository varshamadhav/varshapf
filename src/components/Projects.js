import React, { useState, useRef } from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonCircleQuestion, faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import CustomHook from './CustomHook';

function Projects() {
const [listProjects] = useState([
  {
    name: 'StayBnb',
    des: "Engineered a fully responsive Airbnb clone using HTML5, CSS3, and vanilla JavaScript, featuring dynamic property listings, interactive search filters, and a seamless booking interface. Implemented modern design principles with Flexbox/Grid layouts, custom animations, and DOM manipulation to create an intuitive user experience that mirrors Airbnb's core functionality while maintaining fast load times and cross-browser compatibility.",
    mission: 'Back-end Developer, system analysis and design',
    language: 'HTML5, CSS3,JS, React JS, SockerIO,...',
    images: '/project11.PNG'
  },
  {
    name: 'Online Edu Course Website',
    des:"Developed a comprehensive educational platform with HTML5, CSS3, and JavaScript that empowers students to access courses, track progress, and engage with interactive learning materials in a responsive interface. Created dynamic features including course filtering, user dashboard, video integration, and progress tracking system while implementing modern UI/UX principles for an intuitive learning experience, resulting in seamless navigation across all devices.",
    mission: 'Back-end Developer, system analysis and design',
    language: 'HTML5, CSS3, React JS, SockerIO,...',
    images: '/project22.PNG'
  },
  {
    name: 'FizzHub-A website for the soda company',
    des:"Crafted an engaging soda company website showcasing dynamic product displays with stunning CSS3 transitions, parallax scrolling effects, and interactive bottle animations that captivate users as they explore the beverage lineup. Implemented smooth hover effects, animated product reveals, and fluid page transitions using HTML5, CSS3, and JavaScript to create an immersive brand experience, resulting in an eye-catching showcase that brings the products to life through modern web animations.",
    language: 'HTML5, CSS3, React JS,',
    images: '/project3.PNG'
  },
]);
const divs = useRef([]);
const scrollTab = useRef();
CustomHook(scrollTab, divs);
  return (
    <section className='projects' ref={scrollTab}>
       <div className="title" ref={(el) => el && divs.current.push(el)}>
        My Projects
       </div>
       <div className="des" ref={(el) => el && divs.current.push(el)}>
        {/* 20 */}
       
       </div>
       <div className="list">
        {
          listProjects.map((value, key) => (
            <div className='item' key={key} ref={(el) => el && divs.current.push(el)}>
              <div className="images">
                <img src={value.images} alt="" />
              </div>
              <div className="content">
                <h3>{value.name}</h3>
                <div className="des">{value.des}</div>
                <div className="mission">
                    <div><FontAwesomeIcon icon={faPersonCircleQuestion} /></div>
                    <div>
                        <h4>Mission</h4>
                        <div className="des">{value.mission}</div>
                    </div>
                </div>
                <div className="mission">
                    <div><FontAwesomeIcon icon={faEarthAmericas} /></div>
                    <div>
                        <h4>Languages</h4>
                        <div className="des">{value.language}</div>
                    </div>
                </div>
              </div>
            </div>
          ))
        }
       </div>
    </section>
  )
}
export default Projects
