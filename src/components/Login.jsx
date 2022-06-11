import { useState } from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div `
    background: RGBA(96, 67, 55, 0.7);
    border-radius: 40px;
    padding: 35px;
    margin-bottom: 300px;
    display: flex;
    flex-direction: column;
    width: 300px; 
    justify-content: center;
    justify-items: center;

    form {
        display: flex;
        flex-direction: column;
        
    }

    .form-child {
        margin: 10px;
    }

    input {
        width: 100%;
        margin: 0px;
        padding: 0px; 
    }
`

export default function Login() {
    
    const [login, setLogin] = useState({username: "", password: "",})

    const handleChange = (e) => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = (e) => {
        e.preventDefault()
        console.log(e.target.tagName)
    }


    return (
        <StyledDiv className="login-container">
            <form onClick={handleClick}>
                <input 
                    onChange={handleChange} 
                    name="username" 
                    placeholder="UserName"
                    className='form-child'
                />
                <input 
                    onChange={handleChange} 
                    name="password" 
                    type="password" 
                    placeholder="Password"
                    className='form-child' 
                />
                <button type="submit" className='form-child'>Log In</button>
            </form>
            <button>Create a New Account</button>
        </StyledDiv>
    )
}