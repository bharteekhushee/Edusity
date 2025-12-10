import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Button({bgcolor,color,title,type}) {
  return (
    <>
    <button className={`common_btn ${bgcolor} ${color}`} type={type}>
      {title} 
      <span><FontAwesomeIcon icon={faArrowRightLong}/></span>
      </button>
    </>
  )
}

export default Button