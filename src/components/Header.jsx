import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledHeader = styled.header`
    h1 {
        margin: 0px;
        padding: 30px;
    }
    nav {
        display: flex;
        h2 {
            margin: 20px;
        }
    }

    background-image: url(${props => props.bg}); 
    display: flex;
    color: white;
    justify-content: space-between;
    align-items: center;
` 

export default function Header({ woodBg }) {


    return (
        <StyledHeader bg={woodBg} >
            <h1>Book Mart</h1>
            <nav>
                <Link to="/" ><h2>HOME</h2></Link>
                <h2>FAVORITES</h2>
                <h2>CART</h2>
            </nav>
        </StyledHeader>
    )
}