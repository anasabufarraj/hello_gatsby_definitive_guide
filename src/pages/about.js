//------------------------------------------------------------------------------
// Copyright 2022. Anas Abu Farraj.
//------------------------------------------------------------------------------
import React from 'react'
import Footer from './components/footer'
import { Link } from 'gatsby'

function About() {
  return (
    <div>
      <h1>About</h1>
      <p>
        <Link to="/">Home</Link>
      </p>
      <Footer copyrightYear="2022" />
    </div>
  )
}

export default About
