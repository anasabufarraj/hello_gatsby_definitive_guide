//------------------------------------------------------------------------------
// Copyright 2022. Anas Abu Farraj.
//------------------------------------------------------------------------------
import React from 'react'
import { Link } from 'gatsby'
import Layout from './components/layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import '/static/styles/index.css'

export default function Home() {
  return (
    <Layout>
      <h1>Hello World!</h1>
      <p>
        <Link to="/about">About</Link>
      </p>
    </Layout>
  )
}
