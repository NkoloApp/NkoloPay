import React from 'react'
import styles from "../stiles/componentstyles.module.css"; 
import PrimaryButton from '../clickables/PrimaryButton';
import ImageButton from '../clickables/ImageButton';

const FeedbackComponent = () => {
  return (
    <div className={`${styles.morePage} nk-bg-white flex flex-col justify-center items-center p-11`}>
        <div className="container flex flex-col justify-center items-center gap-19 py-11">
            <h2 className="font-bold text-6xl px-11 mx-11 text-center">They've said some things about us, you should know. </h2>
            <div className={`${styles.feedbackTest} mt-9 p-10 `}>
                <p className="font-normal text-center text-xl p-10">
                    That is to say the assumption, that the significant improvement is a base for developing general features of the fundamental problem, results in a complete compliance with The Feature of Supervisory Bounce 
                </p>
                <p className="font-semibold text-xl text-center">Sana Draper</p>
                <p className="font-normal text-sm text-center">Shop Assistant at 45-19 Tailors</p>
            </div>
            <div className={`${styles.feedbackPeople} p-11 min-w-full`}>
                 <div className="flex flex-row gap-4 justify-center items-center">
                    <ImageButton params={{image:"/pers1.webp"}}/>
                    <ImageButton params={{image:"/pers2.webp"}}/>
                    <ImageButton params={{image:"/pers3.webp"}}/>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default FeedbackComponent