"use client";

import axios from "axios";
import { useState } from "react";
import styles from "../styles/Login.module.css";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { URL_BASE } from "@/utils/const";
import { useDispatch } from "react-redux";

export default function Login() {
    const dispatch = useDispatch();

    const [input, setInput] = useState({
        email: "",
        password: "",
    });

    const handleInput = function (event) {
        setInput({
            ...input,
            [event.target.name]: event.target.value,
        });
    };

    const handleLogIn = async function () {
        try {
            const response = await axios.post(
                `${URL_BASE}/login`,
                input
                // {withCredentials: true}
            );
            if (response.status === 200) {
                localStorage.setItem("token", response.data.data.token)
                localStorage.setItem("id", JSON.stringify(response.data.data.id))
                localStorage.setItem("role", JSON.stringify(response.data.data.role))
                window.alert(response.data.data.message);
                setInput({
                    name: "",
                    password: "",
                });
                window.location.href = "https://descuentos-ya.vercel.app/";
            }
        } catch (error) {
            window.alert(error.response.data.error);
        }
    };

    return (
        <form onSubmit={handleLogIn} className="flex flex-col gap-5">
            <div className={styles.input_group}>
                <input
                    type="email"
                    name="email"
                    onChange={handleInput}
                    placeholder="Email"
                    className={styles.input_text}
                />
            </div>
            <div className={styles.input_group}>
                <input
                    type="password"
                    name="password"
                    onChange={handleInput}
                    placeholder="Password"
                    className={styles.input_text}
                />
            </div>
            <div className="input-button">
                <button type="submit" className={styles.button}>
                    Log in
                </button>
            </div>
            <div>----- OR -----</div>
            <div className="input-button">
                <button type="button" className={styles.button_custom}>
                    Sign In with Google
                    <FcGoogle size={"1.5em"} />
                </button>
            </div>
            <div className="input-button">
                <button type="button" className={styles.button_custom}>
                    Sign In with Facebook
                    <BsFacebook size={"1.5em"} color="#1877F2" />
                </button>
            </div>
        </form>
    );
}
