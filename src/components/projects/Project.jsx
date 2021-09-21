import { Link } from 'react-router-dom';

const Project = ({name,img,desc,stacks,code,page,web,github}) =>{

    return(
        <div className="portfolioCard">
           
            <div className="portfolioCardImg">
                <img src={`${process.env.REACT_APP_URL_IMG}${img}`} title={name} alt={name} />
            </div>
           
            <div className="portfolioCardDesc">
                <h4 className="portfolioCardDescH4">{name}</h4>
                 <p className="portfolioCardDescP">{desc}</p>
             </div>

            <div className="portfolioCardStacks">
                <h5>Stack</h5>
                <ul className="portfolioCardStacksUl">
                    {
                        stacks.map((item,i)=>(
                                <li key={i}>{item}</li>
                        ))
                    }
                 </ul>
            </div>

            <div className="portfolioCardLinks">
                <Link title={github+' '+name} className="portfolioCardLink" target="_blank" to={{pathname:code}}>
                <i  className='bx bxl-github'></i>
                </Link>
                <Link title={web+' '+name} className="portfolioCardLink" target="_blank" to={{pathname:page}}>
                <i  className='bx bx-globe'></i>
                </Link>
            </div>

        </div>
    )
}

export default Project