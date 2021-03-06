import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { FirebaseContext } from '../context/firebase'
import { Form } from '../components'
import { HeaderContainer } from '../containers/header'
import { FooterContainer } from '../containers/footer'
import * as ROUTES from '../constants/routes'


export default function Signin() {
  const history = useHistory()
  const { firebase } = useContext(FirebaseContext)

  const [emailAddress, setEmailAddress] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const validateField = (value, field) => {
    const errorMsg = 'Please check your email and/or password'
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    // at least one lowercase, one uppercase, one number and six characters long
    const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    let valid = true;

    if (field === 'email') {
      valid = emailRegex.test(value);
    } else {
      valid = passwordRegex.test(value);
    }

    valid ? setError('') : setError(errorMsg);
  }

  const handleSignin = (event) => {
    event.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        history.push(ROUTES.BROWSE)
      }).catch(error => {
          setEmailAddress('')
          setPassword('')
        setError(error.message)
      })
  }

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignin} method="POST">
            <Form.Input 
              placeholder="Email Address"
              value={emailAddress}
              onChange={({ target }) => {
                setEmailAddress(target.value)
                validateField(target.value, 'email')
              }}
            />
            <Form.Input 
              placeholder="Password"
              type="password"
              value={password}
              autoComplete="off"
              onChange={({ target }) => {
                setPassword(target.value)
                validateField(target.value, 'password')
              }}
            />
            <Form.Submit disabled={false} type="submit">
              Sign In
            </Form.Submit>
            <Form.Text>
              New to Netflix? <Form.Link to={ROUTES.SIGN_UP}>Sign up now.</Form.Link>
            </Form.Text>
            <Form.TextSmall>
              This page is protected by Google reCAPTCHA.
            </Form.TextSmall>
          </Form.Base>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  )
}