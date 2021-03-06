import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledHeader = styled.header`
  a {
    text-decoration: none;
    color: white;
    margin: 20px;
  }

  nav {
    display: flex;
    a {
      text-decoration: none;
      color: white;
    }
    a:hover {
      color: #e8b569;
    }
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
      <Link to="/" ><h1>Book Mart</h1></Link>
      <nav>
        <Link to="/" ><h2>HOME</h2></Link>
        <Link to="/books" ><h2>BOOKS</h2></Link>
        <Link to="/books/new" ><h2>CREATE BOOK</h2></Link>
      </nav>
    </StyledHeader>
  )
}