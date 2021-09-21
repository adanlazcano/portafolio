import {useContext} from 'react';
import { Link } from "react-router-dom";
import LanguageContext from '../../context/LanguageContext';
import './css/topbar.css';

const Topbar = () => {

    const{language,handleLanguage} =  useContext(LanguageContext);

    window.addEventListener('scroll', _ => {
        const header = document.querySelector('.header'); 
        header && header.classList.toggle('sticky', window.scrollY > 0);
    });
    

    const handleMenu = _ =>{

      document.querySelector('.header').classList.toggle('active');
    }

    const handleLinks = _ =>{
        document.querySelector('.header').classList.remove('active');
    }
    
    return (
        <>
            <div className="header">

                <div className="headerLogo">
                <Link style={{color:"#FFF"}} onClick={handleLinks} to="/">{language.logo}</Link>
                </div>

                <ul className="headerList">
                    <li className="headerLanguage">
                        <span title="Español" data-value="es" onClick={handleLanguage}>Es</span>
                        &nbsp;/&nbsp;  
                        <span title="English" data-value="en" onClick={handleLanguage}>En</span></li>
                    <li className="headerLiToggle"> 
                        <div onClick={handleMenu} className="headerToggle"></div>
                    </li>
                </ul>

                <div className="headerMenu">
                    <div className="headerMenuImgCont">
                    <img className="headerMenuImg" src={`${process.env.REACT_APP_URL_IMG}man.png`} alt="Adán Lazcano" title="Adán Lazcano" />
                    </div>
                    <div className="headerMenuLinks">
                        <Link onClick={handleLinks} className="headerMenuLinksLink" to="/">{language.home}</Link>
                        <Link onClick={handleLinks} className="headerMenuLinksLink" to="/resume">{language.resume}</Link>
                        <Link onClick={handleLinks} className="headerMenuLinksLink" to="/portfolio">{language.portfolio}</Link>   
                    </div>
                </div>
        
            </div>
         </>
    )
}

export default Topbar
