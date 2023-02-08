import React from 'react'
import './Projects.css'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import "animate.css/animate.min.css";


function Project(props) {
    return (
        <div className="ProjectWrapper">
            <div className="Project" style={{backgroundImage: `url(./assets/img/projects/${props.img.toLowerCase()}.png)`}}>
                <div className="ProjectText">
                    <div className="ProjectTitle">{props.title}</div>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

function Projects() {
  return (
    <div className='Projects' id="Projects">
        <div className="Title">
            Project showcase
        </div>
        <div className="ProjectsWrap">
            <AnimationOnScroll animateIn='animate__fadeIn'>
                <Project img="burgerhub" title="Burger Hub">A project completed using purely HTML and CSS based on an Adobe XD design</Project>
                <Project img="memphisivy" title="Memphis and Ivy">An ecommerce site for a handbag business</Project>
                <Project img="oldpersonal" title="Personal Site">The site that I previously used as my personal website</Project>
                <Project img="emotionalblobs" title="Emotional Blobs">A Node.JS backend that uses facial recognition AI to display different coloured circles on a Python frontend</Project>
            </AnimationOnScroll>
        </div>
    </div>
  )
}

export default Projects