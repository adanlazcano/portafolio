import { createContext } from "react";
import {translations} from '../translations/translations';
import { useState } from 'react';

const LanguageContext = createContext();

// SET AND UPDATE useState FOR USE ON ALL PAGES
const LanguageProvider = ({ children }) => {
     
    const [language,setLanguage] = useState(translations['es']);

    const handleLanguage = e =>{
     setLanguage(translations[e.target.dataset.value]);
    }

    const data = {language,handleLanguage};

    return <LanguageContext.Provider value = { data }>
             { children } 
            </LanguageContext.Provider>
}

export { LanguageProvider };

export default LanguageContext;