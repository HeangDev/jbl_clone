"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { VERIFY_CREDENTIALS_URL } from "@/app/lib/ApiEndPoints";
import { signIn, useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";

const LoginForm = () => {
  const { data: session, status } = useSession(); // Use useSession to get session
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    tel: [],
    password: [],
  });
  const [authState, setAuthState] = useState({
    tel: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(VERIFY_CREDENTIALS_URL, authState, {
        headers: {
          Accept: "application/json",
        },
      });
      setLoading(false);
      const response = res.data;
      console.log("The success response is", response);
      if (response?.status === 401) {
        console.log("Error:", response?.message);
        setErrors(response?.message);
      } else if (response?.status === 200) {
        const result = await signIn("credentials", {
          tel: authState.tel,
          password: authState.password,
          callbackUrl: "/account/profile",
          redirect: true,
        });

        if (result?.status === 200) {
          router.push("/account/profile");
        } else {
          setErrors({ general: result.error });
        }
      }
    } catch (err) {
      setLoading(false);
      console.log("The error is", err);
      if (err?.response?.data?.errors) {
        setErrors(err?.response?.data?.errors);
      }
    }
  };

  useEffect(() => {
    if (!session) {
      router.push("/account/login");
    } else {
      router.push("/account/profile");
    }
  }, [session]);
  return (
    <>
      <div className="auth__section">
        <div className="auth__container">
          <div className="auth__title">
            <h2>เข้าสู่ระบบ</h2>
          </div>

          <form className="auth__form" onSubmit={handleSubmit}>
            <div className="form__field">
              <label>เบอร์โทร</label>
              <input
                type="number"
                value={authState.tel}
                onChange={(e) =>
                  setAuthState({ ...authState, tel: e.target.value })
                }
              />
              <span className="text-red-500">
                {errors?.tel?.[0] ? "กรุณา ใส่เบอร์โทร" : ""}
              </span>
            </div>
            <div className="form__field">
              <label>รหัสผ่าน</label>
              <div className="auth__password">
                <input
                  type="password"
                  value={authState.password}
                  onChange={(e) =>
                    setAuthState({ ...authState, password: e.target.value })
                  }
                />
                <span className="text-red-500">
                  {errors?.password?.[0] ? "กรุณา ใส่รหัสผ่าน" : ""}
                </span>
                <Link href="/account/login/recover" className="auth__recover">
                  ลืมรหัสผ่านของคุณใช่ไหม
                </Link>
              </div>
            </div>
            <button type="submit" className="auth__button" disabled={loading}>
              {loading ? "ดำเนินการ..." : "ลงชื่อเข้าใช้"}
            </button>
          </form>
          <div className="qa__link">
            ลูกค้าใหม่? <Link href="/account/register">สร้างบัญชี</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
