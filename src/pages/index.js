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
      <p>
        <Link className="btn btn-primary" to="/about">
          About
        </Link>
      </p>
    </Layout>
  )
}
