import React from 'react';
import styles from './ShippingInfo.module.css';
import SubscriptionSection from '@/app/components/Subscription';

const ShippingInfo = () => {
  return (
    <>
        <div className={styles.container}>
            <h1 className={styles.title}>วิธีการจัดส่งสินค้า</h1>
            <h2 className={styles.subTitle}>เงื่อนไขการจัดส่งสินค้า</h2>
            <ul className={styles.list}>
                <li className={styles.listItem}>- บริการจัดส่งสินค้าฟรี ทั่วประเทศไทย เมื่อสั่งซื้อสินค้าผ่านเว็บไซต์ของเรา</li>
                <li className={styles.listItem}>- การจัดส่งขึ้นอยู่กับประสิทธิภาพและความพร้อมในการให้บริการของผู้ให้บริการขนส่ง อาจมีการเปลี่ยนแปลงโดยไม่ต้องแจ้งให้ทราบล่วงหน้า</li>
                <li className={styles.listItem}>- ระยะเวลาในการจัดส่งสินค้าประมาณ 1 - 5 วันทำการ (ไม่นับวันพุธ – เสาร์ – อาทิตย์ และวันหยุดพิเศษ)</li>
            </ul>
            <p className={styles.note}>
                หมายเหตุ: หากที่ทำการขนส่งไม่สามารถติดต่อคุณเพื่อยืนยันที่อยู่จัดส่งก่อนทำการจัดส่ง ค่าสั่งซื้อของคุณอาจจัดส่งล่าช้าได้
            </p>
        </div>
        <SubscriptionSection/>
    </>
  );
};

export default ShippingInfo;
