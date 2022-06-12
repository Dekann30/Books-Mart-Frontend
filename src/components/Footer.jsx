import styled from 'styled-components'

const StyledFooter = styled.footer`
  background: black;
  color: white;
  background-image: url(${props => props.bg});
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  color: white;
  text-align: center;
`

const StyledImage = styled.img`
  width: 100px;
  height: 50px
`

const StyledAnchor = styled.a`
a { text-decoration: none; }
a:visited { text-decoration: none; }
a:hover { text-decoration: none; }
a:focus { text-decoration: none; }
a:hover, a:active { text-decoration: none; }
color: white;
`

export default function Footer({ woodBg }) {
  return (
    <StyledFooter bg={woodBg} ><h1>Footer</h1></StyledFooter>
  )
}