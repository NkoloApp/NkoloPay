'use client'
import React from 'react'
import Brand from '../subcomponents/Brand'
import Brandwith from '../subcomponents/Brandwith'
import FooterComponent from '../components/FooterComponent' 
import { InvoiceForm, InvoiceData, InvoiceFetch, InvoicePaidFailed, InvoicePaidSuccess,InvoicePaying } from './invoices'

const page = () => {
  const [currentPage, setCurrentPage] = React.useState("Loading"); 

    const getPage = () => {
    switch(currentPage){
      case "InvoiceData": return <><InvoiceData/> </>; 
      case "InvoiceForm": return <><InvoiceForm/> <FooterComponent />  </> ; 
      case "InvoicePaying": return <><InvoicePaying/> <FooterComponent />  </>; 
      case "InvoiceFailed": return <><InvoicePaidFailed/> <FooterComponent />  </>; 
      case "InvoiceSuccess": return <><InvoicePaidSuccess/> <FooterComponent />  </>; 
      default: return <InvoiceFetch/> ;
    }
  }

  return (
    <div className='invoices flex flex-col items-center nk-bg-light'> 
        {
           getPage()
        }
        
    </div>
  )


}

export default page