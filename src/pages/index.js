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
  background-color: rgb(89, 11, 149);
`

const lead = css`
  font-size: 1.6rem;
  font-weight: lighter;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
`

export default function Home() {
  return (
    <Layout>
      <Header>
        <div css={lead}>Welcome to Gatsby!</div>
      </Header>
      <h1>Home</h1>
      <p>
        <Link className="btn btn-warning" to="/about">
          Go to About
        </Link>
      </p>
    </Layout>
  )
}
