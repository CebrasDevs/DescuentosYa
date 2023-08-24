"use client";
import Cookies from 'js-cookie';
import axios from "axios";
import { useState } from "react";
import styles from "../styles/Login.module.css";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { URL_BASE } from "@/utils/const";
import { useDispatch } from "react-redux";
import { useSearchParams, useRouter } from "next/navigation";
import { setActiveUser } from "@/redux/actions";
import LoginFailure from "./Modals/Login/LoginFailure";
import { jwtVerify } from 'jose';

axios.defaults.withCredentials = true;

export default function Login() {
    const dispatch = useDispatch();
    const router = useRouter();
    const params = useSearchParams();
    const detail = params.get("detail");
    const itemId = params.get("itemId");

    const [userLogin, setUserLogin] = useState("pending");
    const [loginError, setLoginError] = useState(null);

    const [show, setShow] = useState(false);

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
                Cookies.set('accessTrue', response.data.token, {expires: 30, secure: true});
                const accessTrue = Cookies.get('accessTrue');
                const { userId } = jwtVerify(accessTrue, process.env.JWT_SECRET)
                setInput({
                    name: "",
                    password: "",
                });
                dispatch(setActiveUser(userId));
                if (detail === "true") {
                    router.push(`/${itemId}`);
                } else {
                    router.push("/");
                }
            }
        } catch (error) {
            setUserLogin("failure");
            setLoginError(error.response.data.error);
        }
    };

    const close = (status) => {
        setUserLogin("pending");
        setLoginError(null);
    };

    return (
        <div>
            {userLogin === "failure" && <LoginFailure error={loginError} close={close} />}
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
                        type={`${show ? "text" : "password"}`}
                        name="password"
                        onChange={handleInput}
                        placeholder="Password"
                        className={styles.input_text}
                    />
                    <span className="icon flex items-center px-4" onClick={() => setShow(!show)}>
                        {show ? <AiFillEye size={25} /> : <AiFillEyeInvisible size={25} />}
                    </span>
                </div>
                <div className="input-button">
                    <button type="submit" className={styles.button}>
                        Log in
                    </button>
                </div>
                {/* <div>---- OR ----</div>
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
                </div> */}
            </form>
        </div>
    );
}
