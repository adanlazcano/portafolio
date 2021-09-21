
const Experience = ({year,company,position,desc,stack}) => {

    return (
       
    <div className="box">
        <div className="year-company">
            <h5>{year}</h5>
            <h5>{company}</h5>
            <h6>{
                stack.map(item=>item).join('\n')
                }
            </h6>
        </div>
        <div className="text">
            <h4>{position}</h4>
            <p>{desc}</p>
        </div>
    </div>
    
    )
}

export default Experience
