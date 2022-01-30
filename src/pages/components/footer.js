import React from 'react'
import { css } from '@emotion/react'
import * as footer from '../../styles/footer.module.css'

const lead = css`
  font-size: 0.8rem;
  font-weight: lighter;
  letter-spacing: 0.08rem;
`

export default function Footer(props) {
  return (
    <footer className={footer.main}>
      <small css={lead}>
        ® Copyright {props.copyrightYear}. All rights are reserved.
      </small>
    </footer>
  )
}
