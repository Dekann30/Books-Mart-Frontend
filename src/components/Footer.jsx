import styled from 'styled-components'

const StyledFooter = styled.footer`
  background: black;
  color: white;
  background-image: url(${props => props.bg});
  text-align: center;
  width: 100%;
`

const StyledImage = styled.img`
  width: 100px;
  height: 50px;
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
    <StyledFooter bg={woodBg} >
      <div>
        <h4>
          copyright &copy; 2022 |
          <StyledAnchor href='https://github.com/SunghunP'>Joe</StyledAnchor> |
          <StyledAnchor href='https://github.com/Dekann30'>Deanna</StyledAnchor> |
          <StyledAnchor href='https://github.com/dominikconway'>Alex</StyledAnchor> |
          <StyledAnchor href='https://github.com/Banditolabs'>Josh</StyledAnchor>
        </h4>
        <a href='https://github.com/Dekann30/Books-Mart-Frontend'>
          <StyledImage src='https://i.imgur.com/hVB3Qs5.png' alt='github logo'></StyledImage>
        </a>
      </div>
    </StyledFooter>
  )
}