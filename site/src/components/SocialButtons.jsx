import React from 'react'
import './SocialButtons.css'

export default function SocialButtons() {
    return (
    <div className='SocialButtons'>
        <ul>
            <li>
                <a class="github" href="https://github.com/niks-v" target='_blank' rel="noreferrer">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <i class="fa fa-github" aria-hidden="true"></i>
                </a>
            </li>
            <li>
                <a class="linkedin" href="https://www.linkedin.com/in/nikolas-vadalma-b37b91233" target='_blank' rel="noreferrer">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <i class="fa fa-linkedin" aria-hidden="true"></i>
                </a>
            </li>
        </ul>
    </div>
    )
}
