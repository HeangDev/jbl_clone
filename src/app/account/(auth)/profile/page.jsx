"use client";
import React, { useEffect, useState } from "react";
import SubscriptionSection from "@/app/components/Subscription";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { currencyFormat } from "@/app/utils/Formatter";
import { signOut } from "next-auth/react";
import axios from "axios";
import { API_URL, LOGOUT_URL } from "../../../lib/ApiEndPoints";
import { fetchBank } from "@/app/dataFetch/bankFetch";

export default function Profile() {
  const { data, status } = useSession(); // Use useSession to get session
  const user = data?.user;

  useEffect(() => {
    if (user?.token) {
      const fetchBankData = async () => {
        try {
          const bankData = await fetchBank(user.token, user.uuid);
          console.log(bankData); // Check the response
        } catch (error) {
          console.error("Error fetching bank data:", error);
        }
      };
      fetchBankData();
    }
  }, [user]);

  const [bankAccount, setBankAccount] = useState("");
  const [bankName, setBankName] = useState("");
  const [bankBrand, setBankBrand] = useState("");
  const [getUser, setgetUser] = useState("");
  const [dataState, setDataState] = useState({
    current_password: "",
    new_password: "",
    new_password_confirmation: "",
  });
  const [activeTab, setActiveTab] = useState("tab1");
  const [transactions, setTransactions] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleStoreBank = async (event) => {
    event.preventDefault();
    const bankDetails = {
      bank_name: bankName,
      bank_acc: bankAccount,
      bank_brand: bankBrand,
    };

    try {
      setLoading(true);
      const response = await axios.post(`${API_URL}/bank`, bankDetails, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      if (response.status === 201) {
        alert("Bank details saved successfully!");
        getProfile();
        setLoading(false);
      } else {
        alert("Failed to save bank details.");
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.error("Error saving bank details:", error);
      alert(
        "An error occurred while saving your bank details. Please try again."
      );
    }
  };

  const getProfile = async () => {
    try {
      const response = await axios.get(`${API_URL}/user/${user.uuid}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      setgetUser(response.data);
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };

  const getTransactions = async () => {
    try {
      const response = await axios.get(`${API_URL}/transaction`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      setTransactions(response.data); // Store the transactions in the state
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  };
  const handleChangePassword = async (event) => {
    event.preventDefault();

    const formData = {
      current_password: event.target.current_password.value,
      new_password: event.target.new_password.value,
      new_password_confirmation: event.target.new_password_confirmation.value,
    };

    try {
      const response = await axios.post(
        `${API_URL}/change-password`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      if (response.data.type === "success") {
        alert(response.data.message);
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error changing password:", error);
      alert(
        "An error occurred while changing your password. Please try again."
      );
    }
  };

  useEffect(() => {
    if (status === "loading") return;
    if (!user) {
      router.push("/account/login");
    }
    getProfile();
  }, [user, status]);

  const logout = () => {
    axios
      .post(
        LOGOUT_URL,
        {},
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
            Accept: "application/json",
          },
        }
      )
      .then((res) => {
        signOut({ callbackUrl: "/", redirect: true });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <div className="auth__section">
        {status === "loading" ? (
          <p>Loading...</p>
        ) : (
          user && (
            <div className="auth__container">
              <div className="account__container">
                <div className="profile flex justify-between">
                  <button
                    onClick={() => handleTabChange("tab1")}
                    className={`${
                      activeTab === "tab1" ? "active-tab" : ""
                    } btn border rounded-full px-4 py-4`}
                  >
                    {" "}
                    ที่อยู่ของคุณ{" "}
                  </button>
                  <button
                    onClick={() => handleTabChange("tab2")}
                    className={`${
                      activeTab === "tab2" ? "active-tab" : ""
                    } btn border rounded-full px-6 py-4`}
                  >
                    {" "}
                    บัญชี{" "}
                  </button>
                  <button
                    onClick={() => handleTabChange("tab3")}
                    className={`${
                      activeTab === "tab3" ? "active-tab" : ""
                    } btn border rounded-full px-6 py-4`}
                  >
                    {" "}
                    เปลี่ยนรหัส{" "}
                  </button>
                  <button
                    onClick={() => handleTabChange("tab4")}
                    className={`${
                      activeTab === "tab4" ? "active-tab" : ""
                    } btn border rounded-full px-6 py-4`}
                  >
                    {" "}
                    รายการบัญชี{" "}
                  </button>
                  <button
                    onClick={logout}
                    className="btn border rounded-full px-6 py-4"
                  >
                    {" "}
                    ออกจากระบบ{" "}
                  </button>
                </div>
                <div className="mx-auto">
                  {activeTab === "tab1" && (
                    <div className="mx-auto">
                      <div className="mt-10">
                        <h1 className="text-center text-[40px]">
                          {" "}
                          บัญชีผู้ใช้ของฉัน{" "}
                        </h1>
                      </div>
                      <div className="flex justify-center items-center border h-[150px] w-[150px] text-center rounded-full mx-auto">
                        <h1 className="text-[25px]">
                          {user?.amount !== undefined && user?.amount !== null
                            ? currencyFormat(user?.amount)
                            : "Loading..."}
                        </h1>
                      </div>
                    </div>
                  )}
                  {activeTab === "tab2" && (
                    <form className="auth__form" onSubmit={handleStoreBank}>
                      <div className="form__field">
                        <label>ชื่อบัญชี</label>
                        <input
                          type="text"
                          required
                          value={getUser?.bank_name}
                          disabled={!!getUser?.bank_name}
                          onChange={(e) => setBankName(e.target.value)}
                        />
                      </div>
                      <div className="form__field">
                        <label>เลขบัญชี</label>
                        <input
                          type="number"
                          required
                          value={getUser?.bank_acc}
                          disabled={!!getUser?.bank_acc}
                          onChange={(e) => setBankAccount(e.target.value)}
                        />
                      </div>
                      <div className="form__field">
                        <label>ชื่อธนาคาร</label>
                        <select
                          onChange={(e) => setBankBrand(e.target.value)}
                          disabled={!!getUser?.bank_brand}
                        >
                          {!!getUser?.bank_brand ? (
                            <option value={getUser?.bank_brand}>
                              {getUser?.bank_brand}
                            </option>
                          ) : (
                            <>
                              <option value="">เลือกธนาคาร</option>
                              <option value="ธนาคารไทยพาณิชย์（SCB）">
                                ธนาคารไทยพาณิชย์ （SCB）
                              </option>
                              <option value="ธนาคาร กสิกรไทย （KBANK)">
                                ธนาคาร กสิกรไทย （KBANK)
                              </option>
                              <option value="ธนาคาร กรุงศรีอยุธยา （BAY)">
                                ธนาคาร กรุงศรีอยุธยา （BAY)
                              </option>
                              <option value="ธนาคาร กรุงไทย （KTB)">
                                ธนาคาร กรุงไทย （KTB)
                              </option>
                              <option value="ธนาคาร กรุงเทพ（BBL)">
                                ธนาคาร กรุงเทพ（BBL)
                              </option>
                              <option value="ธนาคารเพื่อการเกษตร ธ ก ส（BAAC）">
                                ธนาคารเพื่อการเกษตร ธ ก ส（BAAC）
                              </option>
                              <option value="ธนาคาร ทหารไทย （TTB)">
                                ธนาคาร ทหารไทย （TTB)
                              </option>
                              <option value="ธนาคาร ซีไอเอ็มบี ไทย(CIMB)">
                                ธนาคาร ซีไอเอ็มบี ไทย(CIMB)
                              </option>
                              <option value="ธนาคาร ยูโอบี (UOB)">
                                ธนาคาร ยูโอบี (UOB)
                              </option>
                              <option value="ธนาคาร ออมสิน(GSB)">
                                ธนาคาร ออมสิน(GSB)
                              </option>
                              <option value="ธนาคารแลนด์ แอนด์ เฮ้าส์">
                                ธนาคารแลนด์ แอนด์ เฮ้าส์
                              </option>
                              <option value="ธนาคาร ธนชาติ（TBANK)">
                                ธนาคาร ธนชาติ（TBANK)
                              </option>
                              <option value="ธนาคารทิสโก้">ธนาคารทิสโก้</option>
                              <option value="ธนาคารเกียรตินาคิน">
                                ธนาคารเกียรตินาคิน
                              </option>
                              <option value="ทรูวอลเล็ท">ทรูวอลเล็ท</option>
                              <option value="ธนาคาร ไอซีบีซี(ICBC)">
                                ธนาคาร ไอซีบีซี(ICBC)
                              </option>
                            </>
                          )}
                        </select>
                      </div>
                      {!!getUser?.bank_acc ||
                      !!getUser?.bank_name ||
                      !!getUser?.bank_brand ? null : (
                        <button
                          type="submit"
                          className="auth__button"
                          disabled={loading}
                        >
                          {loading ? "ดำเนินการ..." : "บันถึก"}
                        </button>
                      )}
                    </form>
                  )}

                  {activeTab === "tab3" && (
                    <form
                      className="auth__form"
                      onSubmit={handleChangePassword}
                    >
                      <div className="form__field">
                        <label>รหัสผ่านเดิม</label>
                        <input
                          type="text"
                          required
                          value={dataState.current_password}
                          onChange={(e) =>
                            setDataState({
                              ...dataState,
                              current_password: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="form__field">
                        <label>รหัสผ่านใหม่</label>
                        <input
                          type="number"
                          required
                          value={dataState.new_password}
                          onChange={(e) =>
                            setDataState({
                              ...dataState,
                              new_password: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="form__field">
                        <label>รหัสผ่านใหม่</label>
                        <input
                          type="number"
                          required
                          value={dataState.new_password_confirmation}
                          onChange={(e) =>
                            setDataState({
                              ...dataState,
                              new_password_confirmation: e.target.value,
                            })
                          }
                        />
                      </div>

                      <button
                        type="submit"
                        className="auth__button"
                        disabled={loading}
                      >
                        {loading ? "ดำเนินการ..." : "บันถึก"}
                      </button>
                    </form>
                  )}

                  {activeTab === "tab4" && (
                    <form
                      className="auth__form"
                      onSubmit={handleChangePassword}
                    >
                      <div className="form__field">
                        <label>รหัสผ่านเดิม</label>
                        <input
                          type="text"
                          required
                          value={dataState.current_password}
                          onChange={(e) =>
                            setDataState({
                              ...dataState,
                              current_password: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="form__field">
                        <label>รหัสผ่านใหม่</label>
                        <input
                          type="number"
                          required
                          value={dataState.new_password}
                          onChange={(e) =>
                            setDataState({
                              ...dataState,
                              new_password: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="form__field">
                        <label>รหัสผ่านใหม่</label>
                        <input
                          type="number"
                          required
                          value={dataState.new_password_confirmation}
                          onChange={(e) =>
                            setDataState({
                              ...dataState,
                              new_password_confirmation: e.target.value,
                            })
                          }
                        />
                      </div>

                      <button
                        type="submit"
                        className="auth__button"
                        disabled={loading}
                      >
                        {loading ? "ดำเนินการ..." : "บันถึก"}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
}
