import React from 'react'
import { Body, Container, Header, Inner, Item, Title } from './styles/accordion'

export default function Accordion({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  )
}

Accordion.Body = function AccordionBody({ children, ...restProps }) {
  return <Body {...restProps}>{children}</Body>
}

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>
}

Accordion.Item = function AccordionItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>
}

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}