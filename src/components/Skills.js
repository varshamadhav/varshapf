import React, { useRef, useState } from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faCss3, faJs, faVuejs, faLaravel } from '@fortawesome/free-brands-svg-icons';
import CustomHook from './CustomHook';

function Skills() {
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);
const [listSkills] = useState([
  {
    name: 'HTML',
    des: "Detail-oriented HTML Developer with deep expertise in semantic markup, accessibility standards, and modern HTML5 features including Canvas, Web Storage, and custom data attributes. Demonstrated success in crafting clean, maintainable code that ensures cross-browser compatibility and optimal SEO performance, while maintaining WCAG compliance for enhanced user accessibility.",
    icon: faHtml5
  },
  {
    name: 'CSS',
    des: "Experienced CSS Developer with advanced proficiency in CSS3, Flexbox, Grid, animations, and Sass/SCSS for creating stunning, responsive web interfaces across all devices. Proven track record of implementing complex layouts, custom UI components, and modern CSS frameworks while maintaining clean, scalable code that reduces load times and enhances user experience.",
    icon: faCss3
  },
  {
    name: 'Javascript',
    des: "Expert JavaScript Developer with advanced proficiency in ES6+, DOM manipulation, asynchronous programming, and modern frameworks, consistently delivering high-performance web applications and interactive user experiences. Demonstrated expertise in writing clean, modular code while leveraging JavaScript best practices, design patterns, and APIs to create efficient, scalable solutions that drive business results.",
    icon: faJs},
  {
    name: 'ReactJs',
    des:"Accomplished React.js Developer with extensive experience in building dynamic, scalable web applications using modern React features including Hooks, Context API, and custom components, while ensuring optimal performance and code reusability. Proven track record in implementing Redux for state management, integrating RESTful APIs, and creating responsive user interfaces that deliver exceptional user experiences with a focus on component-based architecture.",
    icon: faReact
  },
  {
    name: 'VueJs',
    des: "Skilled Vue.js Developer with expertise in building sophisticated single-page applications using Vue 3, Composition API, Vuex for state management, and Vue Router for seamless navigation and dynamic user experiences. Demonstrated success in developing reusable components, implementing complex reactive systems, and utilizing Vue's ecosystem tools like Nuxt.js while maintaining high code quality and application performance.",
    icon: faVuejs
  },
  {
    name: 'Laravel',
    des: "Expert Laravel Developer with deep proficiency in building robust, scalable web applications using MVC architecture, Eloquent ORM, Blade templating, and Laravel's extensive ecosystem of tools and packages. Demonstrated success in implementing complex authentication systems, RESTful APIs, database migrations, and real-time features using Laravel WebSockets, while maintaining clean code practices and optimal application performance.",
    icon: faLaravel
  }
]);
  return (
    <section className='skills' ref={scrollTab}>
       <div className="title" ref={(el) => el && divs.current.push(el)}>
        My Skills
       </div>
       <div className="des" ref={(el) => el && divs.current.push(el)}>
        {/* 20 */}
       
       </div>
       <div className="list">
        {
          listSkills.map((value, key) => (
            <div className={'item '} key={key} ref={(el) => el && divs.current.push(el)}>
              <FontAwesomeIcon icon={value.icon} />
              <h3>{ value.name }</h3>
              <div className="des">{value.des}</div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Skills

