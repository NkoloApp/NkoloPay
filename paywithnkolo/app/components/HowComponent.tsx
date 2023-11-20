import React from 'react'
import styles from "../stiles/componentstyles.module.css"; 
import MoreItem from '../subcomponents/MoreItem';

const HowComponent = () => {
  return (
    <div className={`${styles.morePage} nk-bg-white flex flex-col justify-center items-center py-11`}>
      <div className="container flex flex-col justify-center items-center">
        <div className="content flex flex-col justify-center items-center">
          <h2 className="text-6xl font-bold p-6 m-6 text-center">Get more out of your business. </h2>
          <div className="grid grid-cols-2 gap-10 my-10">
            <MoreItem/> <MoreItem/> <MoreItem/> <MoreItem/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowComponent