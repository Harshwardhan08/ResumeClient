import React from "react";
import './Awards.css';

const Awards = () => {
    return (
        <div className='awards-page' id='about'>
            <div className='awards-content'>
                <div className='awards-title'>
                    {"<Awards />"}
                </div>
                <div className='awards'>
                    <div>
                        Research Assistantship
                    </div>
                    <div>
                        Perfect Evaluation at BOLD
                    </div>
                    <div>
                        Awarded for dedication & commitment
                    </div>
                </div>
            </div>
            <div className='experience-content'>
                <div className='experience-title'>
                    {"<Interests />"}
                </div>
                <div className='interests'>
                    <div>
                        <div>
                            Basketball
                        </div>
                        <div>
                            Travel
                        </div>
                        <div>
                            Fitness
                        </div>
                    </div>
                    <div>
                        <div>
                            Gastronomy
                        </div>
                        <div>
                            Travel
                        </div>
                        <div>
                            Fitness
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Awards;