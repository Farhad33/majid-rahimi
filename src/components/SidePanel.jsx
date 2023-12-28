'use client'
import React, { useState } from'react'
import Styled from 'styled-components'
import { useRouter } from 'next/navigation'
import Container from '@/components/Container'
import Typography from '@/components/Typography'

export default function SidePanel({ items }) {
    const [open, setOpen] = useState(true)
    const { push } = useRouter()

    return (
        <SidePanelContainer column $open={open}>
            <ArrowButton $open={open} onClick={() => setOpen(!open)}>
                {open ? '<' : '>'}
            </ArrowButton>
            <ItemsContainer column $open={open}>
                {Object.values(items).map((item, index) => (
                    <Item
                        key={index}
                        onClick={() => push(item.link)}
                        variant='body3'
                    >
                        {item.title}
                    </Item>
                ))}
            </ItemsContainer>
        </SidePanelContainer>
    )
}

const ArrowButton = Styled.div`
    color: white;
    font-size: 30px;
    font-weight: 600;
    cursor: pointer;
    text-align: right;
    margin-bottom: 10px;
    padding: 10px 10px 0 10px;
    transition: all 0.3s ease-in-out;
`
const SidePanelContainer = Styled(Container)`
    background-color: #d44e4e;
    width: ${({$open}) => $open ? '200px' : '50px' };
    min-height: 100%;
    padding: 10px;
    transition: all 0.3s ease-in-out;
`
const ItemsContainer = Styled(Container)`
    display: ${({$open}) => $open ? 'flex' : 'none' };
    transition: all 0.3s ease-in-out;
`

const Item = Styled(Typography)`
    color: white;
    margin-bottom: 15px;
    cursor: pointer;
`