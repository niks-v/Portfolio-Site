import React from 'react'
import './About.css'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import "animate.css/animate.min.css";

function displayLangs() {
    let langs = ["React","JavaScript","CSS","HTML","Python","JQuery","MongoDB","NodeJS","Postgres","Sequelize","SQL"]
    return langs.map(lang => (
            <div
            className="LangShowcase Showcase"
            style={{backgroundImage: `url(./assets/img/langs/${lang.toLowerCase()}.png)`}}
            ></div>
    ))
}

export default function About() {
  return (
    <div className='About' id="About">
        <div className="Title">
            A little about me..
        </div>

        <AnimationOnScroll animateIn='animate__fadeInLeft'>
            <div className="AboutMain">
                <div className="Section desktop"></div>
                <div className="Section">
                    <div className="Photo SectionSplit"></div>
                    <div className="SectionSplit Text">
                        <strong>"</strong>
                        I love creating and learning. These are the two things that I get out of making websites and web apps.
                        <strong>"</strong>
                    </div>
                </div>
                <div className="Section desktop"></div>
            </div>
        </AnimationOnScroll>

        <AnimationOnScroll animateIn="animate__fadeIn">
            <div className="ShowcaseWrap">
                {displayLangs()}
            </div>
        </AnimationOnScroll>
    </div>
  )
}
