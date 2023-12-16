import React from 'react'
import './header.css'
import Button from '../../components/button/button'
export default function Header() {
  return (
    <div className="header">
      <div className="header-content">
        <div className='content'>
          <h1>We Crush Your Competitors, Gols, And Sales Records Without The B.S.</h1>
        </div>
        <Button quote={'Get Free Consultation'} />

      </div>
    </div>
  )
}
