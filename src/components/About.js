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
               <p>{resumeData.aboutme}</p>
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
                  <a href={resumeURL} target='_blank'><button className='pdf-resume-button'>view resume.pdf</button></a>

               </div>
            </div>
         </div>
      </section>
    );
  }
}
