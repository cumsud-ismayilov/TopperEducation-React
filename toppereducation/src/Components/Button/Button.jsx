import React from 'react'

const Button = ({type,className, tittle, ...props }) => {
  return (
    <button {...props} className={className}  >
    {tittle}
   </button>
  )
}

export default Button
