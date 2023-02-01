import React from 'react'
import './About.css'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import "animate.css/animate.min.css";

function displayLangs() {
    let langs = ["React","JavaScript","CSS","HTML","Python","JQuery","MongoDB","NodeJS","Postgres","Sequelize","SQL"]
    return langs.map(lang => (
            <div
            className="LangShowcase"
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

        <AnimationOnScroll animateIn='animate__fadeInLeft' animateOut='animate__fadeOutRight'>
            <div className="AboutMain">
                <div className="Section desktop"></div>
                <div className="Section">
                    <div className="Photo SectionSplit"></div>
                    <div className="SectionSplit Text">
                        <strong>"</strong>
                        I am an avid, young and open-minded learner with over 5 years of code-writing
                        and bug-hunting under my belt. I love tinkering on code and eating pizza (sometimes at the same time).
                        <strong>"</strong>
                    </div>
                </div>
                <div className="Section desktop"></div>
            </div>
        </AnimationOnScroll>

        <AnimationOnScroll animateIn="animate__fadeInLeft" animateOut='animate__fadeOutRight'>
            <div className="ShowcaseWrap">
                {displayLangs()}
            </div>
        </AnimationOnScroll>
    </div>
  )
}
