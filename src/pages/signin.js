import React, { useState } from "react";
import { useNavigate as useHistory } from "react-router-dom";
import { HeaderContainer } from "../containers/header";
import { FooterContainer } from "../containers/footer";
import { Form } from "../components";
import * as ROUTES from "../constants/routes";

export default function Signin() {
    const history = useHistory();
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const isInvalid = password === '' || emailAddress === '';
    const handleSignIn = (event) => {
        event.preventDefault();

        if (emailAddress === "email.fake@gmail.com" || password === "password") {
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
                    <Form.Title>Sign In</Form.Title>
                    {error && <Form.Error>{ error }</Form.Error>}
                    <Form.Base onSubmit={handleSignIn} method="POST">
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
                            Sign in
                        </Form.Submit>
                    </Form.Base>
                    <Form.Text>
                        New to Netflix? <Form.Link to="/signup">Sign up now</Form.Link>
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