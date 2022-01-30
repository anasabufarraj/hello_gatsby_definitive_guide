//------------------------------------------------------------------------------
// Copyright 2022. Anas Abu Farraj.
//------------------------------------------------------------------------------
import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import Layout from './components/layout'

const Header = styled.div`
  padding: 20px;
  color: #fff;
  background-color: rgb(0, 106, 255);
`

const lead = css`
  font-size: 1.4rem;
  letter-spacing: 0.1rem;
  font-weight: lighter;
`

export default function Home() {
  return (
    <Layout>
      <Header>
        <div css={lead}>Welcome to Gatsby!</div>
      </Header>
      <h1>Home</h1>
      <p>
        <Link className="btn btn-primary" to="/about">
          Go to About
        </Link>
      </p>
    </Layout>
  )
}
