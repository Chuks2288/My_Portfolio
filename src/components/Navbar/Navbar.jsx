import React, { useState } from 'react';
import './Navbar.scss';
import { images } from '../../constants';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import jsPDF from 'jspdf';


export default function Navbar() {


    const PDF_FILE_URL = "https://docs.google.com/document/d/1VXrFbu5Y35j1ZxWWqFwJdtqlKNI_vDB_8TdZkc4UYZ4/edit?pli=1#/file_pdf.pdf";

    const [toggle, setToggle] = useState(false);

    // const resume = 'https://docs.google.com/document/d/1qxTAhO8hENN98lt5tJIf79RlP1cTXzakU4ZWDyDNNkM/edit#heading=h.y7d3xdxnr44m';


    // const pdfGenerate = () => {
    //     const doc = new jsPDF('landscape', 'px', 'a4', 'false')
    //     doc.addImage(images.Resume, 'PNG', 65, 20, 500, 400);
    //     doc.addPage();
    //     doc.setFont('Helvertica', 'bold');
    //     doc.text(60, 60, 'Name');

    //     doc.save('a.pdf');
    // }

    const downloadFileAtURL = (url) => {
        const fileName = url.split("/").pop();
        const aTag = document.createElement("a");
        aTag.href = url;
        aTag.setAttribute("download", fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    }


    return (
        <nav className='app__navbar'>
            <div className="app__navbar-logo">
                <img src={images.Chuks} alt="Chuks" />

            </div>
            <ul className='app__navbar-links'>
                {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                    <li className='app__flex p-text' key={`link-${item}`} >
                        <div />
                        <a href={`#${item}`}>{item}</a>
                    </li>
                ))}
            </ul>
            <div className="chuks__resume">

                <button onClick={() => {
                    downloadFileAtURL(PDF_FILE_URL)
                }}>
                    MY RESUME
                </button>

            </div>
            <div className="app__navbar-menu">
                <HiMenuAlt4 onClick={() => setToggle(true)} />

                {toggle && (
                    <motion.div
                        whileInView={{ x: [300, 0] }}
                        transition={{ duration: 0.85, ease: 'easeOut' }}
                    >
                        <HiX onClick={() => setToggle(false)} />
                        <ul>
                            {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item} `} onClick={() => setToggle(false)}>{item}</a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </div>
        </nav>
    )
}
