"use client";
import { REGISTER_URL } from '@/app/lib/ApiEndPoints';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";
import { signIn, useSession } from 'next-auth/react'; // Import signIn from next-auth/react

const Register = () => {
  const { data: session, status } = useSession(); // Use useSession to get session
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    tel: [],
    password: [],
    password_confirmation: [],
  });
  const [authState, setAuthState] = useState({
    tel: "",
    password: "",
    password_confirmation: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post(REGISTER_URL, authState, {
        headers: {
          Accept: "application/json",
        },
      })
      .then((res) => {
        setLoading(false);
        const response = res.data;

        // Automatically sign in the user after registration
        signIn("credentials", {
          redirect: false,
          tel: authState.tel,
          password: authState.password,
        }).then((signInResult) => {
          if (signInResult.ok) {
            // If sign in is successful, redirect to the profile page
            router.push("/account/profile");
          } else {
            console.log("Error in sign in:", signInResult.error);
          }
        });
      })
      .catch((err) => {
        setLoading(false);
        console.log("The error is", err);
        if (err.response.status === 422) {
          setErrors(err?.response?.data?.errors);
        }
      });
  };

  useEffect(() => {
    if (session) {
      router.push("/account/profile");
    }
  }, [session, router]);

  return (
    <>
      <div className="auth__section">
        <div className="auth__container">
          <div className="auth__title">
            <h2>สร้างบัญชีผู้ใช้</h2>
          </div>
          <form onSubmit={handleSubmit} className="auth__form">
            <div className="form__field">
              <label>เบอร์โทร</label>
              <input
                type="number"
                placeholder="ใส่เบอร์โทร"
                value={authState.tel}
                onChange={(event) =>
                  setAuthState({ ...authState, tel: event.target.value })
                }
              />
              <span className="text-red-500">
                {errors?.tel?.[0] ? "กรุณา ใส่เบอร์โทร" : ""}
              </span>
            </div>
            <div className="form__field">
              <label>รหัสผ่าน</label>
              <input
                type="password"
                placeholder="รหัสผ่าน"
                value={authState.password}
                onChange={(event) =>
                  setAuthState({ ...authState, password: event.target.value })
                }
              />
              <span className="text-red-500">
                {errors?.password?.[0] ? "กรุณา ใส่รหัสผ่าน" : ""}
              </span>
            </div>
            <div className="form__field">
              <label>ยืนยันรหัสผ่าน</label>
              <input
                type="password"
                placeholder="ยืนยันรหัสผ่าน"
                value={authState.password_confirmation}
                onChange={(event) =>
                  setAuthState({
                    ...authState,
                    password_confirmation: event.target.value,
                  })
                }
              />
              <span className="text-red-500">
                {errors?.password_confirmation?.[0]
                  ? "กรุณา ใส่ยืนยันรหัสผ่าน"
                  : ""}
              </span>
            </div>
            <button type="submit" className="auth__button" disabled={loading}>
              {loading ? "ดำเนินการ..." : "สร้าง"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
