import React from 'react'
import Typewriter from "typewriter-effect";
import './Hero.css'

export default function Hero() {
    return (
        <>
            <div className='Hero'>
                <div className="HeroSpacer"></div>
                <div className="HeroSpacer"></div>
                <div className="HeroText Hero-Text-Mobile">
                    <Typewriter
                            options={{
                                autoStart: true,
                                loop: true,
                            }}
                            onInit={(typewriter)=> {
                            typewriter
                            .typeString("Developer")
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("Learner")
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("Designer")
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("Thinker")
                            .pauseFor(1000)
                            .deleteAll()
                            .start();
                        }}
                    />
                </div>
                <a href="#About">
                    <div className="NextArrow bounce-button">
                        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.0001 3.67157L13.0001 3.67157L13.0001 16.4999L16.2426 13.2574L17.6568 14.6716L12 20.3284L6.34314 14.6716L7.75735 13.2574L11.0001 16.5001L11.0001 3.67157Z"fill="currentColor"/></svg>
                    </div>
                </a>
                <div className="HeroSpacer"></div>
            </div>
            <div className='HeroUnderlay'></div>
        </>
    )
}
