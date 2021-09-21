import './css/resume.css';
import {useContext} from 'react';
import Tab from "../../components/tab/Tab";
import Experience from '../../components/experience/Experience';
import { Link } from 'react-router-dom';
import LanguageContext from '../../context/LanguageContext';

const Resume = () => {
    const{language} =  useContext(LanguageContext);
     return (
        <>
        <div className="resume">
            <div  className="container">
                <div className="left-side">
                    <Link target="_blank" download to={`${process.env.REACT_APP_URL_RESUME}${language.downloadFile}`}><i  download className='bx bxs-download resumeDownload'></i>
                    </Link> 
                    <div className="profile-text">
                        <div className="imgBx">
                            <img src={`${process.env.REACT_APP_URL_IMG}perfil.jpg`} alt="Adán Lazcano" title="Adán Lazcano"/>
                           
                        </div>
                        
                        <h3>{language.name}<br/><small>{language.profile}</small></h3>
                    </div>
                    <div className="contact-info">
                        <h4 className="title">{language.contact}</h4>
                        <ul>
                            <li>
                                <span className="icon"><i className='bx bxs-phone'></i></span>
                                <span className="text">618 282 62 94</span>
                            </li>
                            <li>
                                <span className="icon"><i className='bx bxs-envelope'></i></span>
                                <span className="text">aasanchezlazcano@gmail.com</span>
                            </li>
                            <li>
                                <span className="icon"><i className='bx bxl-github'></i></span>
                                <span className="text">www.github.com/adanlazcano</span>
                            </li>
                            <li>
                                <span className="icon"><i className='bx bxl-linkedin' ></i></span>
                                <span className="text">www.linkedin.com/in/adanlazcano</span>
                            </li>
                            <li>
                                <span className="icon"><i className='bx bxs-map'></i></span>
                                <span className="text">Durango, MX.</span>
                            </li>
                        </ul>
                    </div>

                    <div className="contact-info education">
                        <h4 className="title">{language.education}</h4>
                        <ul>
                            <li>
                                <h4>2000-2005</h4>
                                <h4>{language.degree}</h4>
                                <h4>ITA Durango</h4>
                            </li>
                        </ul>

                    </div>
                    <div className="contact-info skills languages">
                        <h4 className="title">{language.skills}</h4>
                        <ul>
                            <li>
                                <div className="skill-name">
                                    <i style={{color:"#DD4B25"}} className='bx bxl-html5'></i>
                                    <span className="text"> HTML</span>
                                </div>
                                <span className="percent">
                                    <div style={{width: "100%"}}></div>
                                </span>
                                <div className="skill-name">
                                    <i style={{color:"#03A9F4"}} className='bx bxl-css3'></i>
                                    <span className="text"> CSS</span>
                                </div>
                                <span className="percent">
                                    <div style={{width: "90%"}}></div>
                                </span>
                                <div className="skill-name">
                                    <i style={{color:"#EFD81C"}} className='bx bxl-javascript'></i>
                                    <span className="text"> JavaScript</span>
                                </div>
                                <span className="percent">
                                    <div style={{width: "86%"}}></div>
                                </span>

                                <div className="skill-name">
                                    <i style={{color:"#7FC728"}} className='bx bxl-nodejs'></i>
                                    <span className="text"> Node.Js</span>
                                </div>
                                <span className="percent">
                                    <div style={{width: "76%"}}></div>
                                </span>

                                <div className="skill-name">
                                    <i style={{color:"#61DAFB"}} className='bx bxl-react'></i>
                                    <span className="text"> React.Js</span>
                                </div>
                                <span className="percent">
                                    <div style={{width: "7 4%"}}></div>
                                </span>
                                <div className="skill-name">
                                    <i style={{color:"#03A9F4",fontStyle: "normal",fontSize:"12px"}}>PHP</i>
                                    <span className="text"> PHP</span>
                                </div>
                                <span className="percent">
                                    <div style={{width: "87%"}}></div>
                                </span>
                                <div className="skill-name">
                                    <i style={{color:"#9A4993"}} className='bx bxl-slack-old'></i>
                                    <span className="text"> C Sharp</span>
                                </div>
                                <span className="percent">
                                    <div style={{width: "67%"}}></div>
                                </span>
                                <div className="skill-name">
                                    <i style={{color:"#E84D31"}} className='bx bxl-git'></i>
                                    <span className="text"> Git</span>
                                </div>
                                <span className="percent">
                                    <div style={{width: "82%"}}></div>
                                </span>
                            </li>
                        </ul>

                    </div>

                    <div className="contact-info languages">
                        <h4 className="title">{language.languages[0]}</h4>
                        <ul>
                            <li>
                                <span className="text">{language.languages[1]}</span>
                                <span className="percent">
                                    <div style={{width: "100%"}}></div>
                                </span>
                                <span className="text">{language.languages[2]}</span>
                                <span className="percent">
                                    <div style={{width: "65%"}}></div>
                                </span>
                            </li>
                        </ul>

                    </div>
                </div>
                <div className="right-side">
                    <div className="about">
                        <h3 className="title">{language.perfil}</h3>
                        <p>{language.perfilText}</p>
                    </div>
                    <div className="about experience">
                        <h3 className="title">{language.experience}</h3>
                            {
                                language.jobs.map((item,i)=>(

                                   <Experience key={i} {...item}/>
                                ))
                                
                            }
                       
                    </div>
                    <div className="about interest">
                        <h3 className="title">{language.interest[0]}</h3>
                        <ul>
                            <li><i className="bx bx-headphone"></i>{language.interest[1]}</li>
                            <li><i className="bx bxs-plane-alt"> </i> {language.interest[2]}</li>
                            <li><i className="bx bxs-book"> </i>{language.interest[3]}</li>
                            <li><i className="bx bx-dumbbell"></i>{language.interest[4]}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <Tab/>
        </>
    )
}

export default Resume
