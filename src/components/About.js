import React, { Component } from 'react';

let resumeURL = 'https://alumni.turing.io/sites/default/files/resumes/Zachary%20Nemeroff%20Resume2020.pdf';

export default class About extends Component {

  render() {

    let resumeData = this.props.resumeData;

    return (
      <section id="about">
         <div className="row">
            <div className="three columns">
               <img className="profile-pic"  src="images/profilepic.jpg" alt="" />
            </div>
            <div className="nine columns main-col">
               <h2>Greetings!</h2>
               <p>
                  My name is Zachary Nemeroff, and I’m a front end software developer and recent graduate of the Turing School of Software and Design. I have an affinity for test driven development and object-oriented programming with agile workflow processes. At Turing I focused on building applications using REST APIs with HTML5, CSS3, vanilla JavaScript, jQuery, React, and React Native, using Git/GitHub for version control and creating comprehensive unit testing suites. I'm currently seeking a new career opportunity where I will be challenged daily, so that I may expand my knowledge and grow my technical skills. If <em>you're</em> up for a challenge, try the Mr. Simon Game I created below!
               </p>
               <div className="row">

                  <div className="columns contact-details">

                  <h2>Contact Details</h2>
                  <p className="address">
       						Zachary Nemeroff
                  <br></br>
                  Denver, CO
                  <br></br>
                  ZaNemeroff@gmail.com
       					  </p>
                  </div>
                  <a href={resumeURL} target='_blank'><button style={{marginLeft: '30px'}} className='pdf-resume-button'>view resume.pdf</button></a>

               </div>
            </div>
         </div>
      </section>
    );
  }
}
