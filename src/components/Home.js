import React, { useRef } from 'react' 
import CustomHook from './CustomHook';
function Home() {
const scrollTab = useRef();
CustomHook(scrollTab);

return (
    <section ref={scrollTab} className='home'>
        <div className="content">
            <div className="name">
                MY NAME IS <span>Varsha</span>
            </div>
            <div className="des">
                {/* 30 */}
                I’m a web developer, someone who builds digital worlds through code. I love transforming concepts and ideas into interactive, visually appealing websites and apps. With each project, I dive deep into the details—structuring code, designing layouts, and fine-tuning elements to create seamless, engaging user experiences.
            </div>
            
            <a href="/democv.pdf" target="_blank" rel="noopener noreferrer" className='animation active '>
                Download My CV
            </a>
        </div>
        <div className="avatar">
            <div className="card">
                <img src="/avatar.jpeg" alt="" />
                <div className="info">
                    <div>Developer</div>
                    <div>Indian</div>
                    <div>03/12</div>
                    <div>Female</div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Home
