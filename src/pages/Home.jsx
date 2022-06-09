import Login from '../components/Login'
import styled from 'styled-components'

export default function Home({ bookShelfBg }) {

    const StyledDiv = styled.div`
        background: #664e44;
        height: 85vh;
        background-image: url(${bookShelfBg});
        color: white;
    `

    return (
        <StyledDiv className="home-page">
            <div className="home-text">
                <div>Book Mart</div>
                <div>Your Online solution to all books.</div>
            </div>
            <Login />
        </StyledDiv>
    )
}