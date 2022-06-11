import Login from '../components/Login'
import styled from 'styled-components'

const StyledDiv = styled.div`
  background: #664e44;
  height: 85vh;
  background-image: url(${props => props.bg});
  color: white;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  h1 {
    padding: 20px; 
    margin-bottom: 300px;
    border-radius: 10%;

    div {
      margin: 0px;
      background-color: RGBA(96, 67, 55, 0.5);
      font-size: 40px;
    }
  }
`

export default function Home({ bookShelfBg }) {

  return (
    <StyledDiv className="home-page" bg={bookShelfBg} >
      <h1 className="home-text">
        <div>Book Mart</div>
        <div>Your Online solution to all books.</div>
      </h1>
      {/* <Login /> */}
    </StyledDiv>
  )
}