'use client'

import { useState } from "react"

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
        <form>
            <label>Email:</label>
            <input className='text-black' type='text' name="email" value={input.email} onChange={handleInput} />
            <label>Password:</label>
            <input className='text-black' type='text' name="password" value={input.password} onChange={handleInput} />
            <button className='text-black bg-white ml-20 p-1' onClick={handleLogIn}>Log in</button>
        </form>
    )
}