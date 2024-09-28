import React from 'react';
import styles from './OrderForm.module.css';

const OrderForm = () => {
  return (
    <>
     <div className={styles.banner}>
      <h1 className={styles.titleBanner}>ตรวจสอบคำสั่งซื้อ</h1>
    </div>
    <div className={styles.formContainer}>
     
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="orderNumber" className={styles.labelText}>หมายเลขคำสั่งซื้อ:</label>
          <input type="text" id="orderNumber" placeholder="กรุณากรอกหมายเลขคำสั่งซื้อ" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.labelText}>ชื่อ-นามสกุล:</label>
          <input type="text" id="name" placeholder="กรุณากรอกชื่อ-นามสกุล ของคุณ" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="phone" className={styles.labelText}>เบอร์โทรศัพท์:</label>
          <input type="text" id="phone" placeholder="กรุณากรอกเบอร์โทรศัพท์" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.labelText}>อีเมล:</label>
          <input type="email" id="email" placeholder="กรุณากรอกอีเมลของคุณ" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="coupon" className={styles.labelText}>รหัสโปรหรหัส:</label>
          <input type="text" id="coupon" placeholder="กรุณากรอกรหัสโปรหรหัส" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message" className={styles.labelText}>ข้อความ:</label>
          <textarea id="message" placeholder="กรุณากรอกข้อความของคุณ"></textarea>
        </div>
      </form>
    </div>
    <div className={styles.contactSection}>
      <button className={styles.sendButton}>ส่งข้อมูล</button>
      <h2 className={styles.heading}>ติดต่อสอบถามข้อมูล</h2>
      <div className={styles.contactMethods}>
        <div className={styles.method}>
          <div className={styles.icon}>
            <img src="https://ucarecdn.com/f733282c-315d-43b6-b70a-87256b95efba/-/format/auto/-/preview/3000x3000/-/quality/lighter/call.png" alt="Phone Icon" />
          </div>
          <h3>พูดสายกับเจ้าหน้าที่</h3>
          <p>Talk to a support agent</p>
          <p>โทร : 02-256-0020</p>
          <p>จันทร์ - ศุกร์ : 9:00 น. - 18:00 น.</p>
        </div>
        <div className={styles.method}>
          <div className={styles.icon}>
            <img src="https://ucarecdn.com/13e01bd3-fe70-4f78-a641-19f0d4216d48/-/format/auto/-/preview/3000x3000/-/quality/lighter/chat.png" alt="Chat Icon" />
          </div>
          <h3>แชทกับเจ้าหน้าที่</h3>
          <p>จันทร์ - ศุกร์ : 9:00 น. - 18:00 น.</p>
          <p>หรือ ส่งอีเมลที่ : onlinesupport@mahajak.com</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default OrderForm;
