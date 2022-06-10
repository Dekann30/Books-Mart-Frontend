import styled from 'styled-components'

export default function Header({ woodBg }) {
    
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

        background-image: url(${woodBg}); 
        display: flex;
        color: white;
        justify-content: space-between;
        align-items: center;
    ` 

    return (
        <StyledHeader>
            <h1>Book Mart</h1>
            <nav>
                <h2>HOME</h2>
                <h2>FAVORITES</h2>
                <h2>CART</h2>
            </nav>
        </StyledHeader>
    )
}