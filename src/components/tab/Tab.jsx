import './css/tab.css'

// This component shows the tab on all pages on the right side
const Tab = () => {

    window.addEventListener('click',_=>{
     
       const tab = document.querySelector('.tab');
       tab && tab.classList.remove('active');
    });

    const handleAddActive = e =>{
        e.stopPropagation();
         document.querySelector('.tab').classList.add('active');
    }
    return (
        <div onClick={handleAddActive} className="tab">
            <div className="tabIcons">
                <i title="aasanchezlazcano@gmail.com" className='bx bxs-envelope'></i>
                <small>aasanchezlazcano@gmail.com</small>
            </div>
            <div className="tabIcons">
                <i title="6182826294" className='bx bxl-whatsapp'></i>
                <small >6182826294</small>
            </div>
            <div className="tabIcons">
                <i title="https://github.com/adanlazcano" className='bx bxl-github'></i>
                <small onClick={e=>window.open(`https://github.com/${e.target.innerText}`,"_blank")}>adanlazcano</small>
            </div>
            <div className="tabIcons">
                <i title="https://www.linkedin.com/in/adanlazcano/" className='bx bxl-linkedin-square'></i>
                <small onClick={e=>window.open(`https://www.linkedin.com/in/${e.target.innerText}`,"_blank")}>adanlazcano</small>
            </div>
        </div>
    )
}

export default Tab
