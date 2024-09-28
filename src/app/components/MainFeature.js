"use client";
import React from 'react'

export default function MainFeature() {
    return (
        <>
            <div className="row_feature">
                <div className="feature_item">
                    <div className="feature_inn">
                        <div className="feature_img">
                            <img className="pc" src="https://ucarecdn.com/b2d903a0-5f06-4839-9652-d09ae7b219fb/-/format/auto/-/preview/100x100/-/quality/lighter/Icons%20Assets_Delivery%20Blk.png" alt=""/>
                            <img className="mo" src="https://ucarecdn.com/2a3a5226-38ba-4b2c-8c83-ccc8bc797048/-/format/auto/-/preview/100x100/-/quality/lighter/Icons%20Assets_Delivery.png" alt=""/>
                        </div>
                        <div className="feature_text">
                            <p className="pc">ส่งฟรี</p>
                            <p className="mo">ส่งฟรี</p>
                        </div>
                    </div>
                </div>
                <div className="feature_item">
                    <div className="feature_inn">
                        <div className="feature_img">
                            <img className="pc" src="https://ucarecdn.com/b4125b16-bbfc-49ab-814f-36a0d0a2ab7b/-/format/auto/-/preview/100x100/-/quality/lighter/Icons%20Assets_Authentic%20Blk.png" alt=""/>
                            <img className="mo" src="https://ucarecdn.com/8438d193-44fa-422b-b40a-a609c8ce028e/-/format/auto/-/preview/100x100/-/quality/lighter/Icons%20Assets_Authentic.png" alt=""/>
                        </div>
                        <div className="feature_text">
                            <p className="pc">สินค้าของแท้ 100%</p>
                            <p className="mo">
                                สินค้า<br/>
                                ของแท้ 100%
                            </p>
                        </div>
                    </div>
                </div>
                <div className="feature_item">
                    <div className="feature_inn">
                        <div className="feature_img">
                            <img className="pc" src="https://ucarecdn.com/3e91c659-6b96-45cf-8424-03eafd04f7ab/-/format/auto/-/preview/100x100/-/quality/lighter/Icons%20Assets_Warranty%20Blk.png" alt=""/>
                            <img className="mo" src="https://ucarecdn.com/5aabd438-ad46-4267-828a-3f5e7dfb02ad/-/format/auto/-/preview/100x100/-/quality/lighter/Icons%20Assets_Warranty.png" alt=""/>
                        </div>
                        <div className="feature_text">
                            <p className="pc">รับประกันสินค้า 1 ปี</p>
                            <p className="mo">
                                รับประกัน<br/>
                                สินค้า 1 ปี
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}