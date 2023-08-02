'use client'

import { useState } from "react"
import styles from "../styles/Login.module.css";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function Login(){
    const [input, setInput] = useState({
        email:'',
        password:''
    })

    const handleInput = function(event){
        setInput({
            ...input,
            [event.target.name]: event.target.value
        })
    }

    const handleLogIn = function(){
        //action
    }

    return(
        <form onSubmit={handleLogIn} className="flex flex-col gap-5">
            <div className={styles.input_group}>
                <input type="email" name="email" placeholder="Email" className={styles.input_text}/>
            </div>
            <div className={styles.input_group}>
                <input type="password" name="password" placeholder="Password" className={styles.input_text}/>
            </div>
            <div className="input-button">
                <button type="submit" className={styles.button}>Log in</button>
            </div>
            <div className="input-button">
                <button type="button" className={styles.button_custom}>Sign In with Google<FcGoogle size={'1.5em'}/></button>
            </div>
            <div className="input-button">
                <button type="button" className={styles.button_custom}>Sign In with Github<FaGithub size={'1.5em'}/></button>
            </div>
        </form>
    )
}