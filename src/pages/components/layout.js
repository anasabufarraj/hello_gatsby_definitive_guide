//------------------------------------------------------------------------------
// Copyright 2022. Anas Abu Farraj.
//------------------------------------------------------------------------------
import React from 'react'
import Footer from './footer'

export default function Layout({ children }) {
  return (
    <div>
      {children}
      <Footer copyrightYear="2022" />
    </div>
  )
}
