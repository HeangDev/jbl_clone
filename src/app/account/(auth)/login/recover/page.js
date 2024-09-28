import Link from 'next/link';
import React from 'react';

const ResetPassword = () => {
    return (
        <div className="auth__section">
            <div className="auth__container">
                <div className="auth__title">
                    <h2>เข้าสู่ระบบ</h2>
                    <p>เราจะส่งอีเมลสำหรับใช้รีเซ็ตรหัสผ่านให้แก่คุณ</p>
                </div>
                <form className="auth__form">
                    <div className="form__field">
                        <label>อีเมล</label>
                        <input type="email" required/>
                    </div>
                    <button type="submit" className="auth__button">ส่ง</button>
                </form>
                <div className="qa__link"><Link href="/account/login">ยกเลิก</Link></div>
            </div>
        </div>
    );
};

export default ResetPassword;
