import React from 'react'
import './Form.css'

export default function Button({text, className, onClick}) {
  return (
    <button onClick={onClick} className={`${className} global_btn_style`}>
        {text}
    </button>
  )
}
