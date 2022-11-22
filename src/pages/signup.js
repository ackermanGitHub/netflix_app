import React, { useState } from "react";
import { useNavigate as useHistory } from "react-router-dom";
import { HeaderContainer } from "../containers/header";
import { FooterContainer } from "../containers/footer";
import { Form } from "../components";
import * as ROUTES from "../constants/routes";

export default function Signup() {
    const history = useHistory();
    
    const [firstName, setFirstName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInvalid = firstName === '' || password === '' || emailAddress === '' ;

    const handleSignup = () => {
        event.preventDefault();

        if (firstName === "firstName" || emailAddress === "email.fake@gmail.com" || password === "password") {
            history(ROUTES.BROWSE);
        } else {
            setEmailAddress("");
            setPassword("");
            setError("Usuario o contraseña incorrecto");
        }
    }

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign Up</Form.Title>
                    {error && <Form.Error>{ error }</Form.Error>}
                    <Form.Base onSubmit={handleSignup} method="POST">
                        <Form.Input 
                            placeholder="First Name"
                            value={firstName}
                            onChange={({target}) => setFirstName(target.value)}
                        />
                        <Form.Input 
                            placeholder="Email adress"
                            value={emailAddress}
                            onChange={({target}) => setEmailAddress(target.value)}
                        />
                        <Form.Input 
                            placeholder="Password"
                            autoComplete="off"
                            type="password"
                            value={password}
                            onChange={({target}) => setPassword(target.value)}
                        />
                        <Form.Submit disabled={isInvalid} type="submit">
                            Sign up
                        </Form.Submit>
                    </Form.Base>
                    <Form.Text>
                        Alredy a user? <Form.Link to="/signin">Sign in now</Form.Link>
                    </Form.Text>
                    <Form.TextSmall>
                        This page is protected by Google reCAPTCHA to ensure you&apos;re not a bot. Learn more.
                    </Form.TextSmall>
                </Form>
            </HeaderContainer>
            <FooterContainer></FooterContainer>
        </>
    )   
}