import React, { Component } from 'react';

let resumeURL = 'https://alumni.turing.io/sites/default/files/resumes/Zachary_Nemeroff_resume_2020.pdf';
let turingAlumniLink = 'https://alumni.turing.io/alumni/zachary-nemeroff';

export default class ContactUs extends Component {

  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Feel free to contact me for work, suggestions, or networking!
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>Zachary Nemeroff</h4>
                <h4>Denver, CO</h4>
                <a href='mailto: ZaNemeroff@gmail.com' target='_blank'><h4 tabindex='0' style={{color: '#11ABB0', textDecorationLine: 'underline'}}>ZaNemeroff@gmail.com</h4></a>
                <div className='turing-alumni-link'>
                  <a href={turingAlumniLink} target='_blank'><h4 tabindex='0' style={{color: '#11ABB0', textDecorationLine: 'underline'}}>Turing School Alumni Page</h4></a>
                </div>
              </div>
              <a href={resumeURL} target='_blank'><button className='pdf-resume-button'>view resume.pdf</button></a>
            </aside>
          </div>
        </section>
        );
  }
}
