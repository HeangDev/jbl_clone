'use client'
import Link from "next/link";
import React, { useState, useEffect } from 'react'

const SubMenu = ({ item }) => {
    const [subnav, setSubNav] = useState(false)
    const [isHovered, setHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth >= 768.98);

    const checkScreenSize = () => {
        setIsMobile(window.innerWidth >= 768.98);
    };

    const showSubNav = () => setSubNav(!subnav)
    const hideSubNav = () => setSubNav(false);

    useEffect(() => {
        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    // Handle adding/removing classes to body when hovering
    useEffect(() => {
        const overlayElement = document.querySelector('.overlay');
        if (overlayElement) {
            if (isHovered && item.subNav) {
                overlayElement.classList.add('is-visible', 'overlay--nav');
            } else {
                overlayElement.classList.remove('is-visible', 'overlay--nav');
            }
        }
    }, [isHovered]);

    if (item.subNav) {
        return (
            <li className={`${isHovered && isMobile ? "hover_nav" : ""} ${subnav ? "is-open" : ""}`}  onMouseEnter={() => {setHovered(true)}} onMouseLeave={() => {setHovered(false)}}>
            {isMobile ? (
                <>
                    <Link href={item.path} className="main-nav__item item--toggle">
                        <span>{item.title}</span>
                        <span>{item.icon}</span>
                    </Link>
                    <ul className="main-nav__childs">
                        {item.subNav.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link href={item.path}>{item.title}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </>
            ) : (
                <>
                    <button type="button" className="main-nav__item item--toggle" onClick={showSubNav}>
                        <span>{item.title}</span>
                        <span>{item.iconClosed}</span>
                    </button>
                    <ul className={`main-nav__childs ${subnav ? "slide-in" : "slide-out"}`}>
                        <li>
                            <button type="button" class="main-nav__item main-nav__item--back relative js-back" onClick={hideSubNav}>
                                <div class="main-nav__item-content text-start">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" role="presentation" class="icon"><path d="m6.797 11.625 8.03-8.03 1.06 1.06-6.97 6.97 6.97 6.97-1.06 1.06z"></path></svg>
                                </div>
                            </button>
                        </li>
                        <li>
                            <Link href={item.path}>{item.title}</Link>
                        </li>
                        {item.subNav.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link href={item.path}>{item.title}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </>
            )}
                
            </li>
        )
    } else {
        return (
            <li className={isHovered & isMobile ? "hover_nav" : ""} onMouseEnter={() => {setHovered(true)}} onMouseLeave={() => {setHovered(false)}}>
                <Link href={item.path} className="main-nav__item">
                    <span>{item.title}</span>
                </Link>
            </li>
        )
    }
}

export default SubMenu