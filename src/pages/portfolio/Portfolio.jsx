import {useContext} from 'react';
import './css/portfolio.css';
import LanguageContext from '../../context/LanguageContext';
import Tab from "../../components/tab/Tab";
import Project from '../../components/projects/Project';

// Portfolio Page
const Portfolio = () => {
    
    const{language} =  useContext(LanguageContext);
   
    return (
        <>
        <div className="portfolio">

            <div className="portfolioContainer">
                {
                    language.projects.map((item,i)=>(

                        <Project web={language.web} github={language.github} key={i} {...item} />
                    ))
                }
            </div>
        
        </div>
        <Tab/>
        </>
    )
}

export default Portfolio
