import React from 'react';
import GameBoard from './GameBoard';

const Simon = () => {
  return (
    <section id='simon' className='simon-container'>
      <h1 className='simon-title'>Mr. Simon Game</h1>
      <GameBoard />
    </section>
  )
}

export default Simon;
