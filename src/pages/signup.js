import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { FirebaseContext } from '../context/firebase'
import { HeaderContainer } from '../containers/header'
import { FooterContainer } from '../containers/footer'
import { Form } from '../components'
import * as ROUTES from '../constants/routes'
import firebase from 'firebase'

export default function Signup() {
  const history = useHistory()
  const [firstName, setFirstName] = useState('')
  const [emailAddress, setEmailAddress] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { firebase } = useContext(FirebaseContext)

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

  const handleSignup = (event) => {
    event.preventDefault();

    firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then(result => 
        result.user
        .updateProfile({
          displayName: firstName,
          photoURL: Math.floor(Math.random() * 5) + 1
        })
        .then(() => {
          history.push(ROUTES.BROWSE)
        })
      ).catch(error => {
        setEmailAddress('')
        setPassword('')
        setError(error.message)
      })
  }

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignup} method="POST">
            <Form.Input 
              placeholder="First Name"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />
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
              Sign Up
            </Form.Submit>
            <Form.Text>
              Already a user? <Form.Link to={ROUTES.SIGN_IN}>Sign in now.</Form.Link>
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