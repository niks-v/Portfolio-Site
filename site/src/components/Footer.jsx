import React from 'react'
import './Footer.css'
import SocialButtons from './SocialButtons';
import { AnimationOnScroll } from 'react-animation-on-scroll'
import "animate.css/animate.min.css";

export default function Footer() {
  return (
    <div className="Footer">
        <AnimationOnScroll animateIn='animate__fadeInDown' offset="30">
            <div className="FooterSplit">
                <div className="FooterSection">
                    <SocialButtons />
                </div>
            </div>
        </AnimationOnScroll>
    </div>
  )
}
