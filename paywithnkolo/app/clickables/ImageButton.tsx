"use client"

import React from 'react'
import styles from "../stiles/componentstyles.module.css";  

const ImageButton = ({params}:{params: {image:string}}) => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <img src={params.image} alt="headshot" className='max-h-40 cursor-pointer' />
    </div>
  )
}

export default ImageButton