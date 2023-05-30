import React from 'react'

const MyButton = ({title,color}) => {
    
  return (
    <>
    <button className={color}>{title}</button>
    </>
  )
}

export default MyButton