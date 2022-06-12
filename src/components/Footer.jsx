import styled from 'styled-components'

const StyledFooter = styled.footer`
  background: black;
  color: white;
  background-image: url(${props => props.bg});
`

export default function Footer({ woodBg }) {
  return (
    <StyledFooter bg={woodBg} ><h1>Footer</h1></StyledFooter>
  )
}