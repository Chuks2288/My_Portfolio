import React, { useEffect, useState } from 'react';
import './Work.scss';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import { works } from '../../Data';



const Work = () => {

    const [activeFilter, setActiveFilter] = useState('All');
    const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
    // const [filterWork, setFilterWork] = useState([]);



    const handleWorkFilter = (work) => {
        setActiveFilter(work);
        setAnimateCard([{ y: 100, opacity: 0 }]);

        setTimeout(() => {
            setAnimateCard([{ y: 0, opacity: 1 }])

            if (work === "All") {
                setActiveFilter(works)
            } else {
                setActiveFilter(works.filter((work) => work.tags))
            }
        })
    }
    return (
        <>
            <h2 className='head-block'>My Creative <span>Portfolio </span> <br /> <span> Section</span> </h2>

            <div className="app__work-filter">
                {['UI/UX', 'Web App', 'Mobile App', 'React Js', 'All'].map((item, index) => (
                    <div
                        key={index}
                        onClick={() => handleWorkFilter(item)}
                        className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
                    >
                        {item}
                    </div>
                ))}
            </div>

            <motion.div
                animate={animateCard}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className='app__work-portfolio'
            >
                {works.map((item, index) => (
                    // {works.map((work, index) => (
                    <div className="app__work-item app__flex" key={index}>
                        <div className="app__work-img app__flex">
                            <img src={item.imgUrl} alt={item.imgUrl} />

                            <motion.div
                                whileHover={{ opacity: [0, 1] }}
                                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                                className='app__work-hover app__flex'
                            >
                                <a href={item.projectLink} target='_blank' rel='noreferrer'>
                                    <motion.div
                                        whileInView={{ opacity: [0, 1] }}
                                        whileHover={{ opacity: [1, 0.9] }}
                                        transition={{ duration: 0.25 }}
                                        className='app__flex'
                                    >
                                        < AiFillEye />
                                    </motion.div>
                                </a>
                                <a href={item.codeLink} target='_blank' rel='noreferrer'>
                                    <motion.div
                                        whileInView={{ opacity: [0, 1] }}
                                        whileHover={{ opacity: [1, 0.9] }}
                                        transition={{ duration: 0.25 }}
                                        className='app__flex'
                                    >
                                        < AiFillGithub />
                                    </motion.div>
                                </a>

                            </motion.div>
                        </div>

                        <div className="app__work-content app__flex">
                            <h4 className="bold-text">{item.title}</h4>
                            <p className="p-text" style={{ marginTop: 10 }}>{item.description}</p>

                            <div className="app__work-tag app__flex">
                                <p className='p-block'>{item.tags}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>
        </>
    )
}

// export default AppWrap(Work, 'work');



export default AppWrap(
    MotionWrap(Work, 'app__works'),
    'work',
    "app__blackbg"
);
