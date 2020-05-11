import React, { Component } from 'react';

const gameOnRepo = 'https://github.com/Mod-4-Cross-Pol/FE_game_on';
const gameOnDemo = 'https://www.youtube.com/watch?v=_E9j8tXz8e4&feature=share&fbclid=IwAR1W86DaTGrS4QtOQ0HuCzJv6_t4FWFpXdG4aa_c1_j_CG7oqXR0uHlgDYA';

const mtvMusicTriviaRepo = 'https://github.com/ZaneMeroff/mtv_music_trivia';
const mtvMusicTriviaGame = 'https://mtv-music-trivia-mobile.herokuapp.com/intro';

const jeopardyRepo = 'https://github.com/ZaneMeroff/jeopardy';
const jeopardyGame = 'https://pjanks.github.io/jeopardy';

const lemonWireRepo = 'https://github.com/ZaneMeroff/rancid-tomatillos';
const lemonWireLiveLink = 'https://lemonwire.herokuapp.com';

const whichMarioRepo = 'https://github.com/ZaneMeroff/which-mario';
const whichMarioGame = 'https://zanemeroff.github.io/which-mario';

export default class Porfolio extends Component {

  render() {

    const onHerokuServerCall = () => {
      window.alert(`Please note: This app is hosted on a Heroku cloud server that goes to sleep after certain inactivity. Therefore, this app may take several minutes to load if the server is currently sleeping. Thank you for being patient.`)
    }

    let resumeData = this.props.resumeData;

    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of my Projects!</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">

          <hr></hr>

          <div className="overlay">
            <div className="portfolio-item-meta">
              <div className='project-container'>
                <div style={{width: '90%'}}>
                  <h3>Game On! iOS Mobile App</h3>
                  <p><span style={{fontStyle:'italic'}}>React Native • React Navigator • TravisCI</span><br></br>
                  A mobile platform for connecting individuals with pickup games in their communities. Features
                  Google Maps integration. Utilizes TravisCI for continuous integration. Backend database built in
                  Python with Flask. Unit tested with Jest and Enzyme.
                  </p>
                  <a href={gameOnRepo} target='_blank'><button>view repo</button></a>
                  <a href={gameOnDemo} target='_blank'><button style={{marginLeft:'50px'}}>demo video</button></a>
                </div>
              </div>
            </div>
          </div>

          <hr></hr>

          <div className="overlay">
            <div className="portfolio-item-meta">
              <div className='project-container'>
                <div style={{width: '90%'}}>
                  <h3>Star Wars Jeopardy Game</h3>
                  <p><span style={{fontStyle:'italic'}}>vanilla JS • jQuery • SASS</span><br></br>
                  A Jeopardy game for three players using fetch requests to trivia API for question and answer
                  data. The project was thoroughly tested using Mocha & Chai with Chai Spies.
                  </p>
                  <a href={jeopardyRepo} target='_blank'><button>view repo</button></a>
                  <a href={jeopardyGame} target='_blank'><button style={{marginLeft:'50px'}}>play game</button></a>
                </div>
              </div>
            </div>
          </div>

          <hr></hr>

          <div className="overlay">
            <div className="portfolio-item-meta">
              <div className='project-container'>
                <div style={{width: '90%'}}>
                  <h3>MTV Music Trivia Mobile App</h3>
                  <p><span style={{fontStyle:'italic'}}>ReactJS • React Router • Redux</span><br></br>
                  A mobile friendly music trivia app where a user can select three difficulties and play through ten trivia
                  questions. Features a mobile friendly design. Trivia data is fetched from the Open Trivia
                  Database API. The app features 97% unit testing coverage using Jest and Enzyme.
                  </p>
                  <a href={mtvMusicTriviaRepo} target='_blank'><button>view repo</button></a>
                  <a href={mtvMusicTriviaGame} target='_blank'><button onClick={onHerokuServerCall} style={{marginLeft:'50px'}}>play game</button></a>
                </div>
              </div>
            </div>
          </div>

          <hr></hr>

          <div className="overlay">
            <div className="portfolio-item-meta">
              <div className='project-container'>
                <div style={{width: '90%'}}>
                  <h3>LemonWire Movie Ratings App</h3>
                  <p><span style={{fontStyle:'italic'}}>ReactJS • Router • Redux</span><br></br>
                  A movie rating web app allowing a user to log in, view average movie ratings,
                  make their own ratings, and remove ratings. This app uses the fetch method to
                  get, post, and delete movie rating data from a Heroku API. Jest and Enzyme
                  are used for unit testing.
                  </p>
                  <a href={lemonWireRepo} target='_blank'><button>view repo</button></a>
                  <a href={lemonWireLiveLink} target='_blank'><button onClick={onHerokuServerCall} style={{marginLeft:'50px'}}>live demo</button></a>
                </div>
              </div>
            </div>
          </div>

          <hr></hr>

          <div className="overlay">
            <div className="portfolio-item-meta">
              <div className='project-container'>
                <div style={{width: '90%'}}>
                  <h3>Which Mario? Card Matching Game</h3>
                  <p><span style={{fontStyle:'italic'}}>vanilla JS • HTML • CSS</span><br></br>
                  This was my first solo project at Turing School of Software & Design. It has a
                  simple file tree structure with just three JS files and uses ES6 syntax for class
                  instance variables. I created this project one month into learning JavaScript.
                  Oh, how far I've come!
                  </p>
                  <a href={whichMarioRepo} target='_blank'><button>view repo</button></a>
                  <a href={whichMarioGame} target='_blank'><button style={{marginLeft:'50px'}}>play game</button></a>
                </div>
              </div>
            </div>
          </div>

          </div>
        </div>
      </div>
  </section>
        );
  }
}
