import React, { Component } from 'react';

// <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>

export default class Header extends Component {

  render() {

    let resumeData = this.props.resumeData;

    return (
      <React.Fragment>

      <header id="home">
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
               <li tabindex='0' className="current nav-menu"><a className="smoothscroll" href="#home">Home</a></li>
               <li tabindex='0' className='nav-menu'><a className="smoothscroll" href="#about">About</a></li>
               <li tabindex='0' className='nav-menu'><a className="smoothscroll" href="#simon">Simon</a></li>
               <li tabindex='0' className='nav-menu'><a className="smoothscroll" href="#resume">Experience</a></li>
               <li tabindex='0' className='nav-menu'><a className="smoothscroll" href="#portfolio">Projects</a></li>
               <li tabindex='0' className='nav-menu'><a className="smoothscroll" href="#contact">Contact</a></li>
            </ul>
         </nav>

         <div className="row banner">
            <div className="banner-text">
               <h1 style={{fontFamily: 'Jost'}} className="responsive-headline">ZACHARY NEMEROFF</h1>
               <h3 style={{color:'#fff', width:'90%', fontFamily:'sans-serif', fontWeight:'bold', fontSize:'180%'}}>Software Developer</h3>
               <hr/>
               <ul className="social">
                  {
                    resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                      return(
                              <li tabindex='0' className='social-icons' key={item.name}>
                                <a href={item.url} target="_blank"><i className={item.className}></i></a>
                              </li>
                            )
                          }
                    )
                  }
               </ul>
            </div>
         </div>

         <p className="scrolldown" tabindex='0'>
            <a className="smoothscroll down-circle" href="#about"><i className="icon-down-circle"></i></a>
         </p>

      </header>
      </React.Fragment>
    );
  }
}
