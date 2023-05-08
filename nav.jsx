import React, { useState } from "react";
import logo from './logo.png';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import { FaTimes , FaBars } from "react-icons/fa";


/*
<header className="header-nav"> 
<nav ref={navRef}>
         

<a  href="#">Home</a>
<a  href="#Available-jobs">Available jobs</a>
<a  href="#Apply-on-a-job">Apply on a job</a>
<a  href="#Why-choose-us">Why choose us</a>

<button onClick={showNavbar} className="nav-btn nav-close-btn"> <FontAwesomeIcon icon={faBars}  /></button> 

</nav>
<button onClick={showNavbar} className="nav-btn"> <FontAwesomeIcon icon={faTimes}  /></button> 
const show = document.getElementsByTagName('ul');


const click = document.getElementById('click');
click.addEventListener('click' , NavS());
const  NavS = () => {
       show.style.display = 'block';
}
 


</header>
 */
function Nav() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };




  /* // 
  const nav = document.getElementsByClassName('nav');
  const show = document.getElementById('show');
  const click = document.getElementById('click');
  const showNavbar = () => { show.style.display = 'block' };

 
  
           <div className="nav">
                     <div className={`navigation${isActive ? " active" : ""}`}>
  
  <div className="menuToggle" onClick={handleClick}>
    <span></span>
    <span></span>
    <span></span>
  </div>
  <ul   className="menu">
  <li><a  href="#">Home</a></li>
  <li><a  href="#Available-jobs">Available jobs</a></li>
  <li><a  href="#Apply-on-a-job">Apply on a job</a></li>
  <li><a  href="#Why-choose-us">Why choose us</a></li>
  </ul>
  </div>
  */
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  /** new try to make it  */
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};
    return(
      <div>
      <div className="nav">


        <img src={logo} className="App-logo2" alt="logo" />
        <header>
		
    <nav ref={navRef}>
       

          <a href="#">Home</a>
          <a href="#Available-jobs">Available jobs</a>
          <a href="#Apply-on-a-job">Apply on a job</a>
          <a href="#Why-choose-us">Why choose us</a>
        

        <button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
      </div>
 </div>
  );
}  /**
0
		<header>
		
			<nav ref={navRef}>

				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
0
 <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>


*/ //
//function DropDownItem(props){
//  return(
//    <li className="dropdownItem">
//       <img src={props.img}></img>
//     <a src={props.text}></a>
// </li>
//);
//}

export default Nav;