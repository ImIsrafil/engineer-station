import React from 'react'

const ButtonPrimary = ({children}) => {
  return (
    <button className="btn btn-primary shadow-lg border-0 bg-gradient-to-r from-primary to-secondary">
        {children}
    </button>
  )
}

export default ButtonPrimary
