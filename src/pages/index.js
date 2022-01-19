//------------------------------------------------------------------------------
// Copyright 2022. Anas Abu Farraj.
//------------------------------------------------------------------------------
import React from 'react'
import Footer from './components/footer'
import { Link } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css'
import '/static/styles/index.css'

function Home() {
  return (
    <div>
      <h1>Hello World!</h1>
      <p>
        <Link to="/about">About</Link>
      </p>
      <Footer copyrightYear="2022" />
    </div>
  )
}

export default Home
