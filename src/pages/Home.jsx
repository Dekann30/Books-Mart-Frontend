import Login from '../components/Login'
import styled from 'styled-components'
import { useState } from 'react'

export default function Home({ bookShelfBg }) {

    const StyledDiv = styled.div`
        background: #664e44;
        height: 85vh;
        background-image: url(${bookShelfBg});
        color: white;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        h1 {
            h2 {
                margin: 0px;
                background-color: RGBA(96, 67, 55, 0.5);
            }
            padding: 20px; 
            margin-bottom: 300px;
            border-radius: 10%;
        }
    `
    

    return (
        <StyledDiv className="home-page">
            <h1 className="home-text">
                <h2>Book Mart</h2>
                <h2>Your Online solution to all books.</h2>
            </h1>
            <Login />
        </StyledDiv>
    )
}