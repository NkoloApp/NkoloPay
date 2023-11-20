import React from 'react'
import styles from "../stiles/componentstyles.module.css"; 
import PrimaryButton from '../clickables/PrimaryButton';
import AccentButton from '../clickables/AccentButton';

const DownloadsComponent = () => {
  return (
    <div className={`${styles.morePage} nk-bg-primary-dark flex flex-col justify-center items-center`}>
        <div className="container flex flex-col justify-center nk-tx-light">
            <div className="content grid grid-cols-2 gap-11">
                
                <div className="contentSubContainer flex flex-col justify-center gap-6">
                    <h2 className="font-bold text-5xl">Manage your business on the go.</h2>
                    <p className="font-normal text-xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate vitae sequi, corrupti consectetur vel, ea illum quaerat quia, reprehenderit beatae est laudantium voluptatibus nobis pariatur ad! Accusamus sed nulla neque?</p>
                    <div className="flex flex-row gap-5 justify-start items-center my-8">
                        <PrimaryButton params={{text:"For Android", link:""}} />
                        <AccentButton params={{text:"For iOS", link:""}}/>
                    </div>
                </div>
                <div className="imgContainer">
                    <img src="/mockups.png" className='rounded-xl' alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default DownloadsComponent