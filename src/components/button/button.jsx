import React from 'react'
import './button.css'
export default function Button({quote}) {
  return (
    <div className="button-container">
        <button><p>{quote}</p></button>
      </div>
  )
}
