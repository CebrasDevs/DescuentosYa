"use client";

import axios from "axios";
import { useState } from "react";
import styles from "../styles/Login.module.css";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { URL_BASE } from "@/utils/const";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";

import { useSearchParams, useRouter } from "next/navigation";
import { setActiveUser } from "@/redux/actions";
import LoginFailure from "./Modals/Login/LoginFailure";

export default function Login() {
    const dispatch = useDispatch();
    const router = useRouter();
    const params = useSearchParams();
    const detail = params.get("detail");
    const itemId = params.get("itemId");

    const [userLogin, setUserLogin] = useState("pending");
    const [loginError, setLoginError] = useState(null);

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


    const handleLogIn = async function (event) {
        event.preventDefault();
        try {
            const response = await axios.post(`${URL_BASE}/login`, input);
            if (response.status === 200) {
                // Establecer una cookie
                const cookieName = "accessTrue";
                const cookieValue = {
                    id: response.data.data.id,
                    role: response.data.data.role,
                    token: response.data.data.token,
                };
                Cookies.set(cookieName, JSON.stringify(cookieValue));
                dispatch(setActiveUser(cookieValue.id))
                window.alert(response.data.data.message);
                setInput({
                    name: "",
                    password: "",
                });
                if (detail === "true") {
                    router.push(`/${itemId}`);
                } else {
                    router.push("/");
                }
            }
        } catch (error) {
            setUserLogin("failure");
            setLoginError(error);
            console.log(error);
        }
    };

    const close = (status) => {
        setUserLogin("pending");
        setLoginError(null);
    }

    return (
        <div>
        { userLogin === "failure" && <LoginFailure error={loginError} close={close} /> }
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
            <div>---- OR ----</div>
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
        </div>
    );
}
