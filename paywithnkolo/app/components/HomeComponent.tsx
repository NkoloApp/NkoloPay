import React from 'react'
import PrimaryButton from '../clickables/PrimaryButton'
import AccentButton from '../clickables/AccentButton'
import styles from "../stiles/componentstyles.module.css"; 

const Home = () => {
  return (
    <div className={`${styles.homePage} nk-bg-primary-dark  flex flex-col justify-around`}>
      <div className=""></div>
      <div className='nk-bg-primary-dark flex flex-col justify-content-center items-center'>
        <div className="container flex flex-col justify-content-center items-center">
            <div className="content container flex flex-col justify-content-center items-center gap-4 p-10">
              <h1 className="text-6xl font-black nk-tx-light text-center">Asynchronous payments for small businesses done right.</h1>
              <p className="text-2xl font-regular nk-tx-light px-11 text-center">Nkolo is the preferred invoice management platform for small business owners who are growing fast and getting overwhelmed.</p>
              <div className="flex flex-row gap-6 m-4">
                <PrimaryButton params={{text:"Get started",link:""}} />
                <AccentButton params={{text:"Learn more",link:""}}/>
              </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Home