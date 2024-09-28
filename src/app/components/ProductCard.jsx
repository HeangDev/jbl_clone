"use client";

import React, { useState } from 'react'
import Link from 'next/link';
import { currencyFormat } from '@/app/utils/Formatter'

const ProductCard = ({ product }) => {
    const [imageSrc, setImageSrc] = useState(product.img);

    if (product) {
        return (
            <>
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
                                <div className="sq-image-swatch" onMouseEnter={() => setImageSrc(product.hoverImg)} onMouseLeave={() => setImageSrc(product.img)}>
                                    <div className="v-h"></div>
                                    <div className="sq-sy-image">
                                        <img className="primary item-image" src={imageSrc} alt={product.title} />
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="sparq-bottom">
                            <div className="sparq-bottom-items">
                                <div className="sparq-product-title">
                                    <Link href={product.pathurl} className="sparq-title">{product.title}</Link>
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
            </>
        )
    }
}

export default ProductCard