'use client'
import Styled from 'styled-components'
import Image  from 'next/image'
import Link  from 'next/link'
import { useRouter } from 'next/navigation'

export default function Menu() {
    const { push } = useRouter()

    return (
        <Header>
            <Logo
                src="/logo/transparent-logo-black.png"
                width={80}
                height={80}
                alt="majid logo"
                onClick={() => push('/')}
                priority={true}
            />
            <Nav>
                <Item href="/">Home</Item>
                <Item href="/resume">Resume</Item>
                <Item href="/projects">Projects</Item>
            </Nav>
        </Header>
    )
}

const Header = Styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky !important;
    top: 0 !important;
    padding: 10px 20px;
    background: white;
    box-shadow: 0px 0px 40px -10px rgba(0,0,0,0.3);
    z-index: 11;
`
const Nav = Styled.nav`
    display: flex;
    gap: 15px;
`
const Logo = Styled(Image)`
    cursor: pointer;
`
const Item = Styled(Link)`
`