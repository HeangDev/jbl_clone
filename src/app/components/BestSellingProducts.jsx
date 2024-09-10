"use client";

import React from 'react'
import Link from 'next/link'
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { currencyFormat } from '@/app/utils/Formatter'

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
    dots: true,
    autoplayTimeout: 3000,
    responsive: {
        0:{
            items:2,
            margin:5,
            nav: false
        },
        990:{
            items:2,
            margin:12,
            nav: true
        },
        992:{
            items:3,
            margin:5,
            nav: true
        },
        1200:{
            items:4,
            nav: true
        }
    }
};

export default function BestSellingProducts({ products }) {
    
    return (
        <>
            <div className="row_slide">
                <div className="slide_heading">
                    <h3>สินค้าขายดี</h3>
                </div>
                <div className="slide_separator">
                    <hr/>
                </div>
                <div className="main_slide">
                    <OwlCarousel className="owl-theme" {...options}>
                        {products.map(product => (
                            <div className="item">
                                <div className="item__content">
                                    <div className="sq-results-item" key={product.id} product-id={product.id}>
                                        <div className="sparq-card">
                                            <div className="sparq-thumbnail-wrap">
                                                <div className="color-swatch-container" data-swatch-open="close">
                                                    <div className="sq-palette">
                                                        {product.color.map((col, index) => (
                                                            <span className="sq-pallete-item" key={index}>
                                                                <span className="sq-pallete-color" title="Black" style={{ background: col.name }}></span>
                                                                <div className="sq-tt-tooltip" role="tooltip" style={{ display: 'none' }}>
                                                                    Black<div className="sq-tooltip-arrow"></div>
                                                                </div>
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                                <Link href={product.pathurl} className="sparq-loop-product sq-class">
                                                    <div className="sq-image-swatch">
                                                        <div className="v-h"></div>
                                                        <div className="sq-sy-image">
                                                            <img className="primary item-image" src={product.img} alt={product.title}/>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="sparq-bottom">
                                                <div className="sparq-bottom-items">
                                                    <div className="sparq-product-title">
                                                        <Link href={product.pathurl} className="sparq-title">
                                                            <h3>{product.title}</h3>
                                                        </Link>
                                                        <p>{product.description}</p>
                                                    </div>
                                                    <div className="sq-product-price">
                                                        <span className="sq-price">{currencyFormat(product.price)}</span>
                                                        {product.compare !== 0 && (
                                                            <span className="sq-compare-price">{currencyFormat(product.compare)}</span>
                                                        )}
                                                        {product.discount !== 0 && (
                                                            <span className="sq-discount-span" data-value={`${product.discount}%`}> Save </span>
                                                        )}
                                                    </div>
                                                </div>
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
