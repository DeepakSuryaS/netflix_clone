import React, { useState } from 'react'
import { Header } from '../components'
import * as ROUTES from '../constants/routes'
import { FirebaseContext } from '../context/firebase'
import { SelectProfileContainer } from './profiles'
import { FooterContainer } from './footer'

export function BrowseContainer() {
  const [category, setCategory] = useState('series')
  const [profile, setProfile] = useState({})
  const [loading, setLoading] = useState(false)

  const user = {
    displayName: "Deepak Surya",
    photoURL: "1"
  }

  return profile.displayName ? (
    <>
      <Header src="joker1" dontShowOnSmallViewPort>
        <Header.Frame>
          <Header.Group>
            <Header.Logo to={ROUTES.HOME} src="/images/misc/logo.svg" alt="Netflix" />
            <Header.Link
              active={category === 'series'}
              onClick={() => setCategory('series')}
            >
              Series
            </Header.Link>
            <Header.Link
              active={category === 'films'}
              onClick={() => setCategory('films')}
            >
              Films
            </Header.Link>
          </Header.Group>
        </Header.Frame>
      </Header>
      <FooterContainer />
    </>
  ) : <SelectProfileContainer user={user} setProfile={setProfile} />
}