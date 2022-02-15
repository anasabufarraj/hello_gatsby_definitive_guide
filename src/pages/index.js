//------------------------------------------------------------------------------
// Copyright 2022. Anas Abu Farraj.
//------------------------------------------------------------------------------
import React from 'react'
import { Link } from 'gatsby'
import Layout from './components/layout'

export default function Home() {
  return (
    <Layout>
      <h1>Home</h1>
      <Link className="btn btn-dark" to="/about">
        About
      </Link>
    </Layout>
  )
}
