"use client";

import React from 'react'
import Link from 'next/link';

const ProductCard = ({ productItem }) => {
    return (
        <>
            <div className="sq-results-item" key={productItem.id} product-id={productItem.id}>
                <div className="sparq-card">
                    <div className="sparq-thumbnail-wrap">
                        <div className="color-swatch-container" data-swatch-open="close">
                            <div className="sq-palette">
                                {productItem.color.map((col, index) => (
                                    <span className="sq-pallete-item" key={index}>
                                        <span className="sq-pallete-color" title="Black" style={{ background: col.name }}></span>
                                        <div className="sq-tt-tooltip" role="tooltip" style={{ display: 'none' }}>
                                            Black<div className="sq-tooltip-arrow"></div>
                                        </div>
                                    </span>
                                ))}
                            </div>
                        </div>
                        <Link href={productItem.pathurl} className="sparq-loop-product sq-class">
                            <div className="sq-image-swatch">
                                <div className="v-h"></div>
                                <div className="sq-sy-image">
                                    <img className="primary item-image" src={productItem.img} alt={productItem.title} />
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="sparq-bottom">
                        <div className="sparq-bottom-items">
                            <div className="sparq-product-title">
                                <Link href={productItem.pathurl} className="sparq-title">{productItem.title}</Link>
                            </div>
                            <div className="sq-product-price">
                                <span className="sq-price">฿{productItem.price}</span>
                                <span className="sq-compare-price">฿{productItem.compare.toLocaleString()}</span>
                                <span className="sq-discount-span" data-value={`${productItem.discount}%`}> Save </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard