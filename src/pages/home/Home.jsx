import './css/home.css';
import {useContext} from 'react';
import LanguageContext from '../../context/LanguageContext';
import Tab from "../../components/tab/Tab";
import { Link } from 'react-router-dom';

// Home Page
const Home = () => {
    
    const{language} =  useContext(LanguageContext);

    return (
        <>
        <div className="home">
             <div className="homeDesc">
                <h1>{language.name}</h1>
                <h3>{language.profile}</h3>
                <h5>{language.desc}</h5>
                <Link download target="_blank" to={`${process.env.REACT_APP_URL_RESUME}${language.downloadFile}`}>
                     <button className="homeDescBtn">{language.btnCv}</button>
                </Link>
            </div>

            <div className="homeImg">
                <img className="homePic" title="Adán Lazcano"  src={`${process.env.REACT_APP_URL_IMG}man.png`} alt="Adán Lazcano" />
            </div>
        </div>
       
        <Tab/>
        </>
    )
}

export default Home
