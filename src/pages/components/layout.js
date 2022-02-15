//------------------------------------------------------------------------------
// Copyright 2022. Anas Abu Farraj.
//------------------------------------------------------------------------------
import React from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import Footer from './footer'

const Header = styled.div`
  padding: 20px;
  color: #fff;
  background-color: rgb(89, 11, 149);
`

const lead = css`
  font-size: 1.6rem;
  font-weight: lighter;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
`

export default function Layout({ children }) {
  return (
    <div>
      <Header>
        <div css={lead}>Welcome to Gatsby!</div>
      </Header>
      <div className="container">{children}</div>
      <Footer copyrightYear="2022" />
    </div>
  )
}
