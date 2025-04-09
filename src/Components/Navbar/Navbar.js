// // import React, { useEffect, useState } from 'react'
// // import './Navbar.css' 
// // import logo from '../../assets/ssa/ssalogo.png'
// // import menu_icon from '../../assets/edusity/menu-icon.png'
// // import { Link } from "react-scroll"


// // const Navbar = () => {

// //     const [sticky, setSticky] = useState(false);

// //     useEffect(()=>{
// //       window.addEventListener('scroll', ()=>{
// //         window.scrollY > 700 ? setSticky(true) : setSticky(false);
// //     })
// //     },[]);

// //     const[mobileMenu, setMobileMenu] = useState(false);

// //     const toggleMenu = ()=>{
// //       mobileMenu? setMobileMenu(false) : setMobileMenu(true);
// //     }

// //   return (

// //     <nav className={`container ${sticky? 'dark-nav' : ''}`}> 
// //         <img src={logo} alt='' className='logo'/>
// //         <ul className={mobileMenu?"":"hide-mobile-menu"}>
// //             <li><Link to="hero" smooth={true} offset={0} durtion={500}>Home</Link></li>
// //             <li><Link to="program" smooth={true} offset={-260} durtion={500}>Pricing</Link></li>
// //             <li><Link to="about" smooth={true} offset={-150} durtion={500}>About Us</Link></li>
// //             <li><Link to="church" smooth={true} offset={-260} durtion={500}>Gallery</Link></li>
// //             <li><Link to="testimonials" smooth={true} offset={-260} durtion={500}>Testimonials</Link></li>
// //             <li><Link to="contact" smooth={true} offset={-260} durtion={500} className='btn'>Contact Us</Link></li>
// //         </ul>
// //         <img src={menu_icon} alt=''className='menu-icon' onClick={toggleMenu}/>
// //     </nav>

// //   )
// // }
// // export default Navbar

// import React, { useEffect, useState } from 'react';
// import './Navbar.css'; 
// import logo from '../../assets/ssa/ssalogo.png';
// import menu_icon from '../../assets/edusity/menu-icon.png';
// import { Link } from "react-scroll";

// const Navbar = () => {
//     const [sticky, setSticky] = useState(false);
//     const [mobileMenu, setMobileMenu] = useState(false);
//     const [isLogoSmall, setIsLogoSmall] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => {
//             const scrollPosition = window.scrollY;

//             // Toggle sticky navbar and logo size at 700px scroll position
//             if (scrollPosition > 700) {
//                 setSticky(true);
//                 setIsLogoSmall(true); // Shrink logo
//             } else {
//                 setSticky(false);
//                 setIsLogoSmall(false); // Keep logo large
//             }
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     const toggleMenu = () => {
//         setMobileMenu(!mobileMenu);
//     };

//     const toggleLogoSize = () => {
//         setIsLogoSmall(!isLogoSmall);
//     };

//     return (
//         <nav className={`container ${sticky ? 'dark-nav' : ''}`}> 
//             <img 
//                 src={logo} 
//                 alt='Logo' 
//                 className={`logo ${isLogoSmall ? 'small-logo' : 'large-logo'}`} 
//                 onClick={toggleLogoSize} 
//             />
//             <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
//                 <li><Link to="hero" smooth={true} offset={0} duration={500}>Home</Link></li>
//                 <li><Link to="programs" smooth={true} offset={-260} duration={500}>Pricing</Link></li>
//                 <li><Link to="about" smooth={true} offset={-150} duration={500}>About Us</Link></li>
//                 <li><Link to="church" smooth={true} offset={-260} duration={500}>Gallery</Link></li>
//                 <li><Link to="testimonials" smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
//                 <li><Link to="contact" smooth={true} offset={-260} duration={500} className='btn'>Contact Us</Link></li>
//             </ul>
//             <img src={menu_icon} alt='Menu Icon' className='menu-icon' onClick={toggleMenu} />
//         </nav>
//     );
// };

// export default Navbar;



import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import menu_icon from '../../assets/edusity/menu-icon.png';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  // Sticky navbar on scroll
  React.useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 700);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMobileMenu(!mobileMenu);

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
    <div className="nav-inner">
      {/* Logo removed */}
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
        <li><Link to="/booking" onClick={toggleMenu}>Bookings</Link></li>
        <li><Link to="/about" onClick={toggleMenu}>About Us</Link></li>
        <li><Link to="/gallery" onClick={toggleMenu}>Gallery</Link></li>
        <li><Link to="/snowcones" onClick={toggleMenu}>Snow Cones</Link></li>
        <li><Link to="/contact" onClick={toggleMenu} className="btn">Contact Us</Link></li>
      </ul>
  
      <img
        src={menu_icon}
        alt="Menu Icon"
        className="menu-icon"
        onClick={toggleMenu}
      />
    </div>
  </nav>
  
  );
};

export default Navbar;
