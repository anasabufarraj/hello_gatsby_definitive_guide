//------------------------------------------------------------------------------
// Copyright 2022. Anas Abu Farraj.
//------------------------------------------------------------------------------
import React from 'react'
import Footer from './footer'

export default function Layout({ children }) {
  return (
    <div>
      <p>Header</p>
      {children}
      <Footer />
    </div>
  )
}
