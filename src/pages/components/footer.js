import React from 'react'
import * as footer from '../../styles/footer.module.css'

export default function Footer(props) {
  return (
    <footer className={footer.main}>
      <small>® Copyright {props.copyrightYear}. All rights are reserved.</small>
    </footer>
  )
}
