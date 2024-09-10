import React from 'react'
import SubscriptionSection from '@/app/components/Subscription';

const Product = () => {
    return (
        <>
            <div className="product_detail">
                <div className="product_detail_wrap">
                    <div className="product_right_content">
                        <div className=""></div>
                        <div className="product_des">
                            <div className="product_des_wrap">
                                <h2>เสียงกระหึ่มยาวต่อเนื่องทั้งวัน</h2>
                                <p>ลำโพงบลูทูธทรงพลัง  มีรูปทรงที่เป็นเอกลักษณ์ JBL Boombox 3 อัพเดทใหม่ แข็งแรง พกพาสะดวก เพราะมีที่จับผลิตจากซิลิโคน กันน้ำกันฝุ่น ซับวูฟเฟอร์ที่ถูกพัฒนาใหม่ ให้เสียงเบสที่นุ่มลึกขึ้นกว่าเดิม ด้วย JBL Original Pro Sound</p>
                            </div>
                        </div>
                    </div>
                    <div className="product_left_content">
                        <div className="product_tit">
                            <h3>JBL Boombox 3</h3>
                        </div>
                        <div className="product_color_swatches">

                        </div>
                        <hr/>
                        <div className="product_price">
                            <span className="gf_product-price">฿ 1,090.00</span>
                            <span className="gf_product-compare-price">฿ 1,190.00</span>
                            <span className="gf_pq-discount-selector">
                                <span className="gf_pq-discount gf_gs-text-paragraph-1">
                                    <span>SAVE </span><span className="gf_pq-percent">8%</span><span></span>
                                </span>
                            </span>
                        </div>
                        <div className="btn_add_cart">
                            <button type="submit" className="gf_add-to-cart gf_outline">
                                <span>เพิ่มสินค้าลงตะกร้า</span>
                            </button>
                            <button type="submit" name="add" className="gf_add-to-cart">
                                <span>ซื้อสินค้า</span>
                            </button>
                        </div>
                        <div className="product_info">
                            <ul>
                                <li>
                                    <dl>
                                        <dt>
                                            <div className="im_bx">
                                                <img src="https://ucarecdn.com/2a3a5226-38ba-4b2c-8c83-ccc8bc797048/-/format/auto/-/preview/3000x3000/-/quality/lighter/Icons%20Assets_Delivery.png" alt="" width="150"/>
                                            </div>
                                        </dt>
                                        <dd>
                                            <p>ส่งฟรี</p>
                                        </dd>
                                    </dl>
                                </li>
                                <li>
                                    <dl>
                                        <dt>
                                            <div className="im_bx">
                                                <img src="https://ucarecdn.com/8438d193-44fa-422b-b40a-a609c8ce028e/-/format/auto/-/preview/3000x3000/-/quality/lighter/Icons%20Assets_Authentic.png" alt="" width="150"/>
                                            </div>
                                        </dt>
                                        <dd>
                                            <p>
                                                สินค้า<br/>
                                                ของแท้ 100%
                                            </p>
                                        </dd>
                                    </dl>
                                </li>
                                <li>
                                    <dl>
                                        <dt>
                                            <div className="im_bx">
                                                <img src="https://ucarecdn.com/5aabd438-ad46-4267-828a-3f5e7dfb02ad/-/format/auto/-/preview/3000x3000/-/quality/lighter/Icons%20Assets_Warranty.png" alt="" width="150"/>
                                            </div>
                                        </dt>
                                        <dd>
                                            <p>
                                                รับประกัน<br/>
                                                สินค้า 1 ปี
                                            </p>
                                        </dd>
                                    </dl>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <SubscriptionSection/>
        </>
    )
}

export default Product