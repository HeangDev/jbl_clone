'use client'
import React, { useState } from 'react'
import Link from "next/link";
import { HeaderData } from './HeaderData'
import SubMenu from './SubMenu'

export default function Header() {
    const [menuToggler, setMenuToggler] = useState(false);

    const handleMenuToggler = () => {
        setMenuToggler(!menuToggler)
        document.body.classList.toggle("overflow-hidden");
    }

    return (
        <>
            <div className="header">
                <div className="header__container">
                    <div className="header__logo js-closes-menu">
                        <h1 className="logo__h1">
                            <Link href="/" className="logo__link">
                                <img src="//jblthailand.com/cdn/shop/files/LOGO_JBL-01.png?v=1698222319&width=320" alt="JBL Store Thailand"/>
                            </Link>
                        </h1>
                    </div>
                    <div className={`header__menu ${menuToggler ? "is-open" : ""}`}>
                        <div className="main-menu__toggle" onClick={() => handleMenuToggler()}>
                            <span className="main-menu__toggle-icon"></span>
                        </div>
                        <div className="main-menu__content">
                            <ul className="main-nav">
                                {HeaderData.map((item, index) => {
                                    return <SubMenu item={item} key={index}/>
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className="header__search"></div>
                    <div className="header__icons js-closes-menu">
                        <Link href="#none" className="header__icon js-show-search">
                            <svg width="21" height="23" viewBox="0 0 21 23" fill="currentColor" aria-hidden="true" focusable="false" role="presentation" className="icon">
                                <path d="M14.398 14.483 19 19.514l-1.186 1.014-4.59-5.017a8.317 8.317 0 0 1-4.888 1.578C3.732 17.089 0 13.369 0 8.779S3.732.472 8.336.472c4.603 0 8.335 3.72 8.335 8.307a8.265 8.265 0 0 1-2.273 5.704ZM8.336 15.53c3.74 0 6.772-3.022 6.772-6.75 0-3.729-3.031-6.75-6.772-6.75S1.563 5.051 1.563 8.78c0 3.728 3.032 6.75 6.773 6.75Z"></path>
                            </svg>
                        </Link>
                        <Link href="/account/login" className="header__icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" role="presentation" className="icon">
                                <path d="M12 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.429a3.571 3.571 0 1 0 0 7.142 3.571 3.571 0 0 0 0-7.142zm0 10c2.558 0 5.114.471 7.664 1.411A3.571 3.571 0 0 1 22 18.19v3.096c0 .394-.32.714-.714.714H2.714A.714.714 0 0 1 2 21.286V18.19c0-1.495.933-2.833 2.336-3.35 2.55-.94 5.106-1.411 7.664-1.411zm0 1.428c-2.387 0-4.775.44-7.17 1.324a2.143 2.143 0 0 0-1.401 2.01v2.38H20.57v-2.38c0-.898-.56-1.7-1.401-2.01-2.395-.885-4.783-1.324-7.17-1.324z"></path>
                            </svg>
                        </Link>
                        <Link href="#none" className="header__icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" className="icon icon--cart" aria-hidden="true" focusable="false" role="presentation">
                                <path fill="currentColor" d="M17 18a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2c0-1.11.89-2 2-2M1 2h3.27l.94 2H20a1 1 0 0 1 1 1c0 .17-.05.34-.12.5l-3.58 6.47c-.34.61-1 1.03-1.75 1.03H8.1l-.9 1.63-.03.12a.25.25 0 0 0 .25.25H19v2H7a2 2 0 0 1-2-2c0-.35.09-.68.24-.96l1.36-2.45L3 4H1V2m6 16a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2c0-1.11.89-2 2-2m9-7 2.78-5H6.14l2.36 5H16Z"></path>
                            </svg>
                            <div className="header__cart-count">
                                <span className="header__cart-count-number">0</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
