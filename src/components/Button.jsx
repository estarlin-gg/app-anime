import React from 'react'

export const Button = ({classes,text,onClick}) => {
  return (
    <button onClick={onClick} className={classes}>{text}</button>
  )
}

