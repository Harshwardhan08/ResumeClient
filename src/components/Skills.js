import React, { useState, useEffect } from "react";
import './Skills.css';

const Skills = () => {
    const languages = [
        {
            name: 'English',
            level: '95%'
        },
        {
            name: 'Hindi',
            level: '95%'
        }
    ]
    const [skills] = useState([
        {
            name: 'JavaScript',
            level: '95%'
        },
        {
            name: 'React.js',
            level: '95%'
        },
        {
            name: 'Node.js',
            level: '85%'
        },
        {
            name: 'Golang',
            level: '60%'
        },
        {
            name: 'Java',
            level: '60%'
        },
        {
            name: 'C#',
            level: '70%'
        },
        {
            name: 'Express.js',
            level: '80%'
        },
        {
            name: 'MongoDB',
            level: '80%'
        },
        {
            name: 'MySQL',
            level: '90%'
        },
        {
            name: 'Azure',
            level: '60%'
        },
        {
            name: 'Jenkins',
            level: '80%'
        },
        {
            name: 'Nginx',
            level: '60%'
        }
    ]);

    const observer = new IntersectionObserver(intersections => {
        intersections.forEach(({
            target,
            isIntersecting
        }) => {
            target.classList.toggle('animate', isIntersecting);
        });
    }, {
        threshold: 0
    });

    useEffect(() => {
        document.querySelectorAll('.skill-per').forEach(div => {
            observer.observe(div);
        });
    })

    return (
        <div className='skills-page' id='skills'>
            <div className='skills-content'>
                <div className='skills-title'>
                    {"<Skill & Languages />"}
                </div>
                {skills.map((skill, index) => (
                    <div className="skills-content-text" key={`skill-${index}`}>
                        <div className="skill-name">
                            {skill.name}
                        </div>
                        <div className="skill-bar">
                            <span className={`skill-per`} style={{ width: skill.level }}>
                            </span>
                        </div>
                    </div>
                ))}
                <br/>
                <br/>
                {languages.map((language, index) => (
                    <div className="skills-content-text" key={`language-${index}`}>
                        <div className="skill-name">
                            {language.name}
                        </div>
                        <div className="skill-bar">
                            <span className={`skill-per`} style={{ width: language.level }}>
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills;