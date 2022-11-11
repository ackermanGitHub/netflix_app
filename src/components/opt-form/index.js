/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
import React from "react";
import { Container, Input, Buttom, Text, Break } from './styles/opt-form';

export default function OptForm({ children, ...restProps}) {
    return <Container { ...restProps }>{ children }</Container>
}
OptForm.Input = function OptFormInput({ ...restProps }) {
    return <Input { ...restProps }/>
}
OptForm.Buttom = function OptFormButtom({ children, ...restProps }) {
    return (
        <Buttom { ...restProps }>
            { children } <img src="/images/icons/chevron-right.png" alt="Try Now" />
        </Buttom>
    )
}
OptForm.Text = function OptFormText({ children, ...restProps }) {
    return <Text { ...restProps }>{ children }</Text>
}

OptForm.Break = function OptFormBreak({ ...restProps }) {
    return <Break { ...restProps }/>
}