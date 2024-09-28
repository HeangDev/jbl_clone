"use client"
import React, { useState } from 'react'
import ProductCard from './ProductCard'
import Breadcrumb from './Breadcrumb';

const ProductRow = ({ products }) => {
    const [visibleItems, setVisibleItems] = useState(6);

    const loadMore = () => {
        if (visibleItems < products.length) {
          setVisibleItems(visibleItems + 6);
        } else {
          setVisibleItems(products.length);
        }
    };
    return (
        <>
            <div className="sparq-container">
                <div className="sparq-mobile-filter">
                    <div className="sq-dropdown-wrapper">
                        <div className="sq-sort">
                            <span className="sq-sort-label">ความเกี่ยวข้อง</span>
                            <span className="sq-sort-icon">
                                <div className="sq-icon sq-fa-per-page">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path className="sq-fa-per-page" d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path></svg>
                                </div>
                            </span>
                        </div>
                    </div>
                    <div className="sparq-mobile-filterby">
                        <span><span className="sq-filterby-icon"></span> Filter by</span>
                    </div>
                </div>
                <div className="sq-results">
                    {products.slice(0, visibleItems).map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
                {visibleItems < products.length ? (
                    <div className="sq-load-more">
                        <div className="sq-pager-load-more" onClick={loadMore}>
                            <div>
                                <div className="load-more-text">โหลดเพิ่มเติม</div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="sq-load-more">
                        <div className="sq-pager-load-more">
                            <div>
                                <div className="load-more-text">ไม่พบข้อมูลที่ค้นหา</div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default ProductRow