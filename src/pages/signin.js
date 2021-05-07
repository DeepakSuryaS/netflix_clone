import React, { useState } from 'react'
import { Form } from '../components'
import { HeaderContainer } from '../containers/header'
import * as ROUTES from '../constants/routes'

export default function Signin() {
  const [error, setError] = useState('')
  const [emailAddress, setEmailAddress] = useState('')
  const [password, setPassword] = useState('')

  const handleSignin = (event) => {
    event.preventDefault();

    // call firebase to authenticate user
    // populate error if any
  }

  return (
    <HeaderContainer>
      <Form>
        <Form.Title>Sign In</Form.Title>
        {error && <Form.Error>{error}</Form.Error>}

        <Form.Base onSubmit={handleSignin} method="POST">
          <Form.Input 
            placeholder="Email Address"
            value={emailAddress}
            onChange={({ target }) => setEmailAddress(target.value)}
          />
          <Form.Input 
            placeholder="Password"
            type="password"
            value={password}
            autoComplete="off"
            onChange={({ target }) => setPassword(target.value)}
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
  )
}