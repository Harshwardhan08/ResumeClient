import React from 'react';
import './Education.css';

const Education = () => {
    return (
        <div className='education-page' id='education'>
            <div className='education-content'>
                <div className='education-title'>
                    {"<Education />"}
                </div>
                <div className='edu'>
                    <div>
                        <div className='edu-year'>
                            2022 - 2024
                        </div>
                        <div className='edu-school' onClick={() => window.open('https://www.ufl.edu/')}>
                            University of Florida - Gainesville, FL; Class of 2024
                        </div>
                        <div>
                            Master of Science; Computer Science
                        </div>
                        <div>
                            GPA: 3.74/4.0
                        </div>
                    </div>
                    <div>
                        <div className='edu-year'>
                            2013 - 2017
                        </div>
                        <div className='edu-school' onClick={() => window.open('http://www.ipu.ac.in/')}>
                            GGSIPU - New Delhi, Delhi, India
                        </div>
                        <div>
                            Bachelor of Technology; Computer Science
                        </div>
                    </div>
                </div>
            </div>
            <div className='experience-content'>
                <div className='experience-title'>
                    {"<Experience />"}
                </div>
                <div className='exp'>
                    <div>
                        <div className='exp-year'>
                            Apr. 2022 - Present
                        </div>
                        <div className='exp-company' onClick={() => window.open('https://virtualreviewassist.net/')}>
                            Virtual Review Assist; Software Engineer/ Research Assistant
                        </div>
                    </div>
                    <div>
                        <div className='exp-year'>
                            Dec. 2019 - Dec. 2021
                        </div>
                        <div className='exp-company' onClick={() => window.open('https://www.bold.com/')}>
                            BOLD Technologies; Software Engineer
                        </div>
                    </div>
                    <div>
                        <div className='exp-year'>
                            Feb. 2018 - Dec. 2019
                        </div>
                        <div className='exp-company' onClick={() => window.open('https://successive.tech/')}>
                            Successive Digital; Software Engineer
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education;