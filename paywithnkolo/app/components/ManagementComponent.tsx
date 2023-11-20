import React from 'react'
import styles from "../stiles/componentstyles.module.css"; 
import PrimaryButton from '../clickables/PrimaryButton';

const ManagementComponent = () => {
  return (
    <div className={`${styles.morePage} nk-bg-primary-light flex flex-col justify-center items-center`}>
        <div className="container">
            <div className="content grid grid-cols-2 gap-11">
                <div className="imgContainer">
                    <img src="/management.webp" alt="" />
                </div>
                <div className="contentSubContainer flex flex-col justify-center gap-4">
                    <h2 className="font-bold text-4xl">Lorem ipsum dolor sit amet.</h2>
                    <p className="font-normal text-xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate vitae sequi, corrupti consectetur vel, ea illum quaerat quia, reprehenderit beatae est laudantium voluptatibus nobis pariatur ad! Accusamus sed nulla neque?</p>
                    <PrimaryButton params={{text:"Get started", link:""}} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ManagementComponent