"use client";
import React from 'react'
import Link from 'next/link'
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

var $ = require("jquery");
if (typeof window !== "undefined") {
    window.$ = window.jQuery = require("jquery");
}

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
});

const options = {
    items:1,
    margin: 20,
    responsiveClass: true,
    nav: true,
    dots: true,
    autoplayTimeout: 3000,
};

export default function MainSlide() {
    return (
        <>
            <div className="row_main_slide">
                <div className="main_slide">
                    <OwlCarousel className="owl-theme" {...options}>
                        <div className="item">
                            <div className="item__content">
                                <div className="slide_item" style={{ backgroundImage: "url(https://ucarecdn.com/a4da8a9f-b94b-42a3-acfe-93d2de17927b/-/format/auto/-/preview/3000x3000/-/quality/lighter/JBLTH_Partybox%20Wireless%20Mic_1400x680.jpg)" }}>
                                    <Link className="slide_link" href="https://jblthailand.com/collections/partybox-speakers">&nbsp;</Link>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="item__content">
                                <div className="slide_item" style={{ backgroundImage: "url(https://ucarecdn.com/d324b2c1-fdbd-4573-b7aa-8d6e459a65d1/-/format/auto/-/preview/3000x3000/-/quality/lighter/Partybox%20On%20The%20Go_1400x680.jpg)" }}>
                                    <Link className="slide_link" href="https://jblthailand.com/collections/partybox-speakers">&nbsp;</Link>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="item__content">
                                <div className="slide_item" style={{ backgroundImage: "url(https://ucarecdn.com/99c80b1d-e747-4248-936b-fc4c71abc537/-/format/auto/-/preview/3000x3000/-/quality/lighter/2023A0708%20AW%20New%20Product%20Livegen3_1400x680.jpg)" }}>
                                    <Link className="slide_link" href="https://jblthailand.com/collections/partybox-speakers">&nbsp;</Link>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </div>
        </>
    )
}