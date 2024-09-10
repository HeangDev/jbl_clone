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
    margin: 20,
    responsiveClass: true,
    autoplayTimeout: 5000,
    autoplayHoverPause:true,
    responsive: {
        0:{
            items:4,
            nav: false
        },
        991:{
            items:3,
            nav: true,
            dots: true,
            loop:true,
            autoplay:true,
        }
    }
};

export default function PopularProductCategories({ collactions }) {
    
    return (
        <>
            <div className="row_slide">
                <div className="slide_heading">
                    <h3>หมวดหมู่สินค้ายอดนิยม</h3>
                </div>
                <div className="slide_separator">
                    <hr/>
                </div>
                <div className="main_slide">
                    <OwlCarousel className="owl-theme" {...options}>
                        {collactions.map(collaction => (
                            <div className="item">
                                <div className="item__content">
                                    <div className="sq-collaction-item" key={collaction.id} collaction-id={collaction.id}>
                                        <div className="sparq-collaction">
                                            <div className="collaction_img">
                                                <Link href={collaction.pathurl}>
                                                    <img src={collaction.img} alt=""/>
                                                </Link>
                                            </div>
                                            <div className="collaction_text">
                                                <p>{collaction.title}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </OwlCarousel>
                </div>
            </div>
        </>
    )
}
