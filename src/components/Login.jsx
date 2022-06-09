import { useState } from 'react'

export default function Login() {
    
    const [login, setLogin] = useState({username: "", password: "",})

    function handleChange(e) {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        })
    }

    function handleClick(e) {
        e.preventDefault()
        console.log(e.target.tagName)
    }

    return (
        <div className="login-container">
            <form onClick={handleClick}>
                <input 
                    onChange={handleChange} 
                    name="username" 
                    placeholder="UserName"
                />
                <input 
                    onChange={handleChange} 
                    name="password" 
                    type="password" 
                    placeholder="Password" 
                />
                <button type="submit">Log In</button>
            </form>
            <button>Create a New Account</button>
        </div>
    )
}