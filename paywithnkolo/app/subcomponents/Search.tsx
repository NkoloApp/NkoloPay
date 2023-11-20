import React from 'react'
import styles from "../stiles/componentstyles.module.css"; 

const SearchBar = () => {
  return (
    <div>
        <form action="" className={`${styles.searchForm} nk-border-accent nk-bg-primary-dark rounded-xl flex flex-row gap-2 p-2`}>
            <img src="/search.svg" alt="" />
            <input type="text " className={` ${styles.searchput} bg-transparent`} placeholder='find invoice' />
        </form>
    </div>
  )
}

export default SearchBar