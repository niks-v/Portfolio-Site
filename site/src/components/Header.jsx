import React from 'react'
import { useState } from 'react'
import './Header.css'


function MobileNavButton(props) {
    if(props.newtab) return (
        <a href={props.href || "/"} onClick={props.onClick} target='_blank' rel='noreferrer'>
            <div className="MobileNavButton">
                {props.children}
            </div>
        </a>
    )
    else return (
        <a href={props.href || "/"} onClick={props.onClick}>
            <div className="MobileNavButton">
                {props.children}
            </div>
        </a>
    )
}

export default function Header() {

    const [ shown, setShown ] = useState(true);
    const [opaque, setOpaque ] = useState(false);

    var doc = document.documentElement;
    var w = window;

    var prevScroll = w.scrollY || doc.scrollTop;
    var curScroll;
    var direction = 0;
    var prevDirection = 0;
    var headerHeight = 100;

    var checkScroll = function() {
        console.log(prevScroll);
        if(prevScroll < 200){
            setTimeout(() => {
                setOpaque(false);
            }, 200);
        }
        else{
            setTimeout(() => {
                setOpaque(true);
            }, 200);
        }
        curScroll = w.scrollY || doc.scrollTop;
        if (curScroll > prevScroll) { 
            //scrolled up
            direction = 2;
        }
        else if (curScroll < prevScroll) { 
            //scrolled down
            direction = 1;
        }
    
        if (direction !== prevDirection) {
            toggleHeader(direction, curScroll);
        }
        
        prevScroll = curScroll;
    };

    var toggleHeader = function(direction, curScroll) {
        if (direction === 2 && curScroll > headerHeight) { 
            setShown(false);
            prevDirection = direction;
        }
        else if (direction === 1) {
            setShown(true);
            prevDirection = direction;
        }
    };

    
    window.addEventListener('scroll', checkScroll);

    const [ showMobileNav, setShowMobileNav ] = useState(false);

    return (
        <>
            <div className={`Header Header-Padding ${shown ? "" : "hide"} ${opaque ? "opaque" : ""}`}> 
                <div className="HeaderSection desktop">
                    <a className='hover-ul' href="#About">About</a>
                    <a className='hover-ul' href="#Projects">Projects</a>
                </div>
                <div className="HeaderSection Name Mobile-Padding">
                    <div className={`Sandwich  mobile ${!showMobileNav ? "" : "Cross"}`} onClick={()=>setShowMobileNav(!showMobileNav)}>
                        <div className="Bread"></div>
                        <div className="Bread"></div>
                        <div className="Bread"></div>
                    </div>
                    <a href="#top">Nikolas Vadalma</a>
                    <div className="Sandwich mobile"></div>
                </div>
                <div className="HeaderSection desktop">
                    <a className='hover-ul' href="https://rxresu.me/nvadalma/resume" target='_blank' rel="noreferrer">Resume</a>
                    <a className='hover-ul' href="#Games">Games</a>
                </div>
            </div>
            <div className={`CloseMobileNav  ${showMobileNav ? "" : "hide"}`} onClick={()=>setShowMobileNav(!showMobileNav)}/>
            <div className={`MobileNav mobile ${showMobileNav ? "" : "hide"}`}>
                <div className="MobileNavButtonWrap">
                    <div className="MobileNavHeader">
                    </div>
                    <MobileNavButton href="#About" onClick={()=>setShowMobileNav(!showMobileNav)}>About</MobileNavButton>
                    <MobileNavButton href="#Projects" onClick={()=>setShowMobileNav(!showMobileNav)}>Projects</MobileNavButton>
                    <MobileNavButton href="https://rxresu.me/nvadalma/resume" newtab onClick={()=>setShowMobileNav(!showMobileNav)}>Resume</MobileNavButton>
                    <MobileNavButton href="#Games" onClick={()=>setShowMobileNav(!showMobileNav)}>Games</MobileNavButton>
                </div>
            </div>
        </>
    )
}
