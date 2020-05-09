import React, { Component } from 'react';

export default  class Resume extends Component {

  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">

         <div className="row education">

            <div className="three columns header-col">
               <h1><span>Education</span></h1>
            </div>

            <div className="nine columns main-col">

            <div className="row item">
               <div className="twelve columns">
                  <h3>Turing School of Software & Design</h3>
                  <p className="info">Graduate of the Front End Development Program</p>
                  <p className="date">September 2019 - April 2020</p>
                  <ul>
                    <li>• Built 14 unique web applications from scratch with vanilla JS, React, & React Native</li>
                    <li>• Created complete unit testing suites for every application</li>
                    <li>• Programmed for team projects of four people, paired projects, and solo projects</li>
                    <li>• Focused on JavaScript fundamentals for 12 weeks</li>
                    <li>• Committed 1,200 hours building applications with front end and back end technologies</li>
                    <li>• Dedicated 600 hours working strictly with React, React Native, Router, and Redux</li>
                  </ul>
               </div>
            </div>



            </div>
         </div>
        <div className="row work">
            <div className="three columns header-col">
               <h1>Professional</h1>
               <h1><span>Experience</span></h1>
            </div>

            <div className="nine columns main-col">

            <div className="row item">
               <div className="twelve columns">
                  <h3>Adrift Tiki Bar & Restaurant</h3>
                  <p className="info">General Manager</p>
                  <p className="date">March 2016 - March 2019</p>
                  <ul>
                    <li>• Sole general manager responsible for overseeing two million dollar gross annual operation</li>
                    <li>• Reduced annual labor costs by 8% within first year</li>
                    <li>• Increased annual gross sales by 15% within first year</li>
                    <li>• Created multiple successful marketing campaigns and special events</li>
                    <li>• Managed social media accounts to increase brand awareness</li>
                    <li>• Created SOPs for all positions and comprehensive onboard training programs</li>
                  </ul>
               </div>

               <div className="twelve columns">
                  <br></br>
                  <h3>Camp Watcha Wanna Do</h3>
                  <p className="info">Event Planner / Board Secretary</p>
                  <p className="date">June 2010 - March 2016</p>
                  <ul>
                    <li>• Nonprofit organization bettering the quality of life for individuals with childhood cancer</li>
                    <li>• Served on camp planning committee and as camp counselor</li>
                    <li>• Organized and ran fundraising events generating over one million dollars</li>
                    <li>• Led and ran board meetings and created detialed outlines/records</li>
                    <li>• Served as leader and adult role model to all campers and staff</li>
                  </ul>
               </div>

            </div>


            </div>
         </div>


         <div className="row skill">

            <div className="three columns header-col">
               <h1>Technical</h1>
               <h1><span>Skills</span></h1>
            </div>

            <div className="nine columns main-col">
              <ul>
                <li>• JavaScript</li>
                <li>• HTML5</li>
                <li>• CSS3/SASS</li>
                <li>• ReactJS</li>
                <li>• React Native</li>
                <li>• React Router</li>
                <li>• React Navigator</li>
                <li>• jQuery</li>
                <li>• Redux</li>
                <li>• TravisCI</li>
                <li>• Jest/Enzyme</li>
                <li>• Mocha/Chai</li>
                <li>• NPM/Yarn</li>
                <li>• Git/GitHub</li>
              </ul>
   			   </div>

         </div>

      </section>
    );
  }
}
