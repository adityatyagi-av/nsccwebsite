import { button } from '@nextui-org/react'
import React from 'react'

const Button = ({prop,onClick}) => {
  return (
    <button className='border bg-blue-800 text-white'
    onClick={onClick}>
      {prop}  
    </button>
  )
}

export default Button
