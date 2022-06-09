import styled from 'styled-components'

export default function Footer({ woodBg }) {
    const StyledFooter = styled.footer`
        background: black;
        color: white;
        background-image: url(${woodBg});
    `

    return (
        <StyledFooter><h1>Footer</h1></StyledFooter>
    )
}