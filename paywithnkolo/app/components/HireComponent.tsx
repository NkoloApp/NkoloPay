import React from 'react'
import styles from "../stiles/componentstyles.module.css"; 
import PrimaryButton from '../clickables/PrimaryButton';

const HireComponent = () => {
  return (
    <div className={`${styles.morePage} flex flex-col justify-center items-center nk-bg-primary-light-trans py-11`}>
        <div className="container grid grid-cols-2 justify-center items-center gap-8 py-11 my-11">
            
            <div className="imgContainer my-9">
                <img src="/atwork.webp" className='rounded-xl' alt="" />
            </div>
            <div className=" flex flex-col gap-5">
              <h2 className="font-bold text-5xl">Don not hire before you can afford to.</h2>
            <p className="font-normal text-xl ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate  reprehenderit beatae est laudantium voluptatibus nobis pariatur ad! Accusamus sed nulla neque?</p>
            <PrimaryButton params={{text:"Create my account", link:""}} />
            </div>
        </div>
    </div>
  )
}

export default HireComponent