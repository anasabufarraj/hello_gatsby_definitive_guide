//------------------------------------------------------------------------------
// Copyright 2022. Anas Abu Farraj.
//------------------------------------------------------------------------------
import React from 'react'
import { Link } from 'gatsby'
import Layout from './components/layout'

export default function About() {
  return (
    <Layout>
      <h1>About</h1>
      <Link className="btn btn-dark" to="/">
        Home
      </Link>
    </Layout>
  )
}
