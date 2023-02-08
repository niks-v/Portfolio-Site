import React from 'react'
import './Games.css'
import TicTacToe from '../games/tictactoe/App';
import { AnimationOnScroll } from 'react-animation-on-scroll'
import "animate.css/animate.min.css";


export default function Games() {
  return (
    <div className='Games' id="Games">
        <AnimationOnScroll animateIn='animate__fadeInLeft'>
          <TicTacToe />
        </AnimationOnScroll>
        More games coming soon.
    </div>
  )
}
