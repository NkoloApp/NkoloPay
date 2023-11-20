import React from 'react'
import Brand from '../subcomponents/Brand'

const FooterComponent = () => {
  return (
    <div className='p-10 nk-bg-dark flex flex-col justify-center items-center nk-tx-light min-w-full'>
        <div className="container ">
            <footer className="footer p-10 justify-between items-start  text-base-content">
                <nav>
                    <Brand/>
                    <p className='nk-tx-light'> Asynchronous <br/> payments done right.</p>
                </nav>
                <nav>
                    <header className="footer-title nk-tx-accent">Company</header> 
                    <a className="link link-hover nk-tx-light">About</a>
                    <a className="link link-hover nk-tx-light">Careers</a>
                    <a className="link link-hover nk-tx-light">Contact us</a>
                    <a className="link link-hover nk-tx-light">News</a>
                </nav> 
                <nav>
                    <header className="footer-title nk-tx-accent">Apps</header> 
                    <a className="link link-hover nk-tx-light">Android App</a>
                    <a className="link link-hover nk-tx-light">iOS AP</a>
                    <a className="link link-hover nk-tx-light">Web App</a>
                </nav>
                <nav>
                    <header className="footer-title nk-tx-accent">Legal</header> 
                    <a className="link link-hover nk-tx-light">Terms of use</a>
                    <a className="link link-hover nk-tx-light">Privacy policy</a>
                    <a className="link link-hover nk-tx-light">Withdrawal policy</a>
                </nav>
            </footer>  
        </div>
    </div>
  )
}

export default FooterComponent