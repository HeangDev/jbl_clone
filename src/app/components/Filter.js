import React from 'react'

const Filter = () => {
    return (
        <>
            <div className="sparq-row-base">
                <div className="sparq-product-number"><span>Showing 7 - 12 of 12 products</span></div>
                    <div className="sq-right-elements"><span className="sq-sort-text"> ค้นหาโดย</span>
                        <div className="sq-dropdown">
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
                    </div>
                </div>
            </div>
            <div class="sq-filter-main">
                <div id="overlay" class="sq-overlay" onclick="removeClass()"></div>
                <div class="sq-desktop-filter-header-title">Filter by</div>
                <div class="sq-filter-header">
                    <div class="sq-filter-header-title">Filter by</div>
                    <div class="sq-filter-header-clear">
                        <div class="sq-clear"><button class="sq-clear-button">Clear all</button></div><span class="sq-cross" onclick="removeClass()"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4.70703 3.29297L3.29297 4.70703L10.5859 12L3.29297 19.293L4.70703 20.707L12 13.4141L19.293 20.707L20.707 19.293L13.4141 12L20.707 4.70703L19.293 3.29297L12 10.5859L4.70703 3.29297Z" fill="#23263B"></path></svg></span>
                    </div>
                    <div class="sq-filter-bottom" onclick="removeClass()"><span>Apply Filter</span></div>
                </div>
                <div class="sq-applied"></div>
                <div class="sq-filters">
                    <div class="sq-filter-group sq-sidebar">
                    <div class="sq-filter-group-system_tags">
                        <div class="sq-filter-group-item">
                        <div class="sq-accordion sq-open">
                            <div class="sq-accordion-header sq-cursor-pointer"><span>คุณสมบัติ (0) </span></div><span class="sq-float-right"><i class="arrow up"></i></span>
                            <div class="sq-accordion-body">
                            <div class="sq-filter">
                                <div class="sq-filter-item sq-block"><label class="sq-filter-value sq-multi-select bluetooth"><span class="sq-cb"></span> bluetooth <span class="sq-filter-value-count">[12]</span></label></div>
                                <div class="sq-filter-item sq-block"><label class="sq-filter-value sq-multi-select partyboost"><span class="sq-cb"></span> partyboost <span class="sq-filter-value-count">[12]</span></label></div>
                                <div class="sq-filter-item sq-block"><label class="sq-filter-value sq-multi-select party_speaker"><span class="sq-cb"></span> party speaker <span class="sq-filter-value-count">[10]</span></label></div>
                                <div class="sq-filter-item sq-block"><label class="sq-filter-value sq-multi-select waterproof"><span class="sq-cb"></span> waterproof <span class="sq-filter-value-count">[2]</span></label></div>
                                <div class="sq-filter-item sq-block"><label class="sq-filter-value sq-multi-select lightshow"><span class="sq-cb"></span> lightshow <span class="sq-filter-value-count">[1]</span></label></div>
                                <div class="sq-filter-item sq-block"><label class="sq-filter-value sq-multi-select microphone"><span class="sq-cb"></span> microphone <span class="sq-filter-value-count">[1]</span></label></div>
                                <div class="sq-filter-item sq-block"><label class="sq-filter-value sq-multi-select splashproof"><span class="sq-cb"></span> splashproof <span class="sq-filter-value-count">[1]</span></label></div>
                                <div class="sq-filter-item sq-block"><label class="sq-filter-value sq-multi-select wifi_support"><span class="sq-cb"></span> wifi-support <span class="sq-filter-value-count">[1]</span></label></div>
                                <div class="sq-filter-item sq-block"><label class="sq-filter-value sq-multi-select wireless"><span class="sq-cb"></span> wireless <span class="sq-filter-value-count">[1]</span></label></div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="sq-filter-group-price">
                        <div class="sq-filter-group-item">
                        <div class="sq-accordion sq-open">
                            <div class="sq-accordion-header sq-cursor-pointer"><span>ราคา</span></div><span class="sq-float-right"><i class="arrow up"></i></span>
                            <div class="sq-accordion-body">
                                <div class="sq-price-slider th">
                                    <div class="sq-wrapper">
                                        <div class="sq-price-input-group sq-slider-input-group th">
                                            <div class="sq-field"><span class="sq-slider-prefix">฿</span><input type="number" class="sq-input-min" min="5590" max="59899"/><span class="sq-slider-suffix"></span></div>
                                            <div class="sq-field"><span class="sq-slider-prefix">฿</span><input type="number" class="sq-input-max" min="59900" max="5591"/><span class="sq-slider-suffix"></span></div>
                                        </div>
                                        <div class="sq-slider">
                                            <div class="sq-progress" style={{left: "0%", right: "0%"}}></div>
                                        </div>
                                        <div class="sq-range-input"><input type="range" class="sq-range-min" min="5590" max="59899" step="1"/><input type="range" class="sq-range-max" min="5591" max="59900" step="1"/></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                        <div class="sq-filter-group-option_auto_color">
                            <div class="sq-filter-group-item">
                                <div class="sq-accordion sq-open">
                                    <div class="sq-accordion-header sq-cursor-pointer">
                                        <span>สี (0) </span>
                                    </div>
                                    <span class="sq-float-right"><i class="arrow up"></i></span>
                                    <div class="sq-accordion-body">
                                        <div class="sq-filter">
                                            <div class="sq-filter-item sq-block">
                                                <div class="sq-color-swatch">
                                                    <span class="sq-filter-color-swatch-item sq_color_black"></span>
                                                    <span class="sq-color-label black">black</span>
                                                    <div class="sq-tt-tooltip" role="tooltip" style={{display: "none"}}>black<div class="sq-tooltip-arrow"></div></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="sq-filter-group-tags_fit_o7x5p94hi2uu7lmzygouq8b9"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Filter