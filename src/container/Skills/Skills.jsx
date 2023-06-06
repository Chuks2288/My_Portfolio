import React, { useEffect, useState } from 'react';
import './Skills.scss';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import { images } from '../../constants';
import { skills, experiences } from '../../Data';



const Skills = () => {





    return (
        <>
            <h2 className='head-text'>Skills & and experience</h2>

            <div className="app__skills-container">
                <motion.div className='app__skills-list'>
                    {skills.map((skill) => (
                        <motion.div
                            whileInView={{ opacity: [0, 1] }}
                            transition={{ duration: 0.5 }}
                            className='app__skills-item'
                            key={skill.id}
                        >
                            <div className="app__flex" style={{ backgroundColor: skill.bgColor }}>
                                <img src={skill.icon} alt={skill.id} />
                            </div>
                            <p className='p-text'>{skill.name}</p>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="app__skills-exp">
                    {experiences.map((experience) => (
                        <motion.div
                            className="app__skills-exp-item"
                            key={experience.year}
                        >
                            <div className="app__skills-exp-year">
                                <p className="bold-text">{experience.year}</p>
                            </div>
                            <motion.div className="app__skills-exp-works">
                                {experience.works.map((work) => (
                                    <>
                                        <motion.div
                                            whileInView={{ opacity: [0, 1] }}
                                            transition={{ duration: 0.5 }}
                                            className="app__skills-exp-work"
                                            data-tip
                                            data-for={work.name}
                                            key={work.name}
                                        >
                                            <h4 className="bold-text">{work.name}</h4>
                                            <p className="p-text">{work.company}</p>
                                        </motion.div>
                                        <ReactTooltip
                                            id={work.name}
                                            effect="solid"
                                            arrowColor="#fff"
                                            className="skills-tooltip"
                                        >
                                            {work.desc}
                                        </ReactTooltip>
                                    </>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    )
}



// export default AppWrap(Skills, 'skill');

export default AppWrap(
    MotionWrap(Skills, 'app__skills'),
    'skill',
    "app__whitebg"
);
