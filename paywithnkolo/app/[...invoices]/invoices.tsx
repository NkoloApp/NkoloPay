import React from 'react'
import AccentButton from '../clickables/AccentButton'
import Brandwith from '../subcomponents/Brandwith'

export const InvoiceData = () => {

    const invoices  = [{itemname:"Transfer amount", itemvalue:"12, 450 xaf"},{itemname:"Fees", itemvalue:"150 xaf"}, 
{itemname:"Total payable", itemvalue:"12, 500 xaf"}, {itemname:"Reference", itemvalue:"X12J30IL"}, {itemname:"Date issued", itemvalue:"12-12-2023"},
{itemname:"Expiry date", itemvalue:"30-12-2023"}]



  return (
    <div className="payment-page max-w-2xl p-11 ">
        <div className="page-content  nk-bg-white ">
          <div className="brand p-4">
            <Brandwith />
          </div>
          <div className="">
            <div className="pc-top px-5 py-2">
              <h2 className="nk-ft-bold text-center text-4xl font-bold  py-8">
                Outstanding payment request.
              </h2>
              <p className="nk-ft-regular text-start px-5 py-7">
                Hey. This is an invoice from{" "}
                <span className="nk-ft-medium nk-tx-primary">
                  Boulevard Inc
                </span>{" "}
                for{" "}
                <span className="nk-ft-medium nk-tx-primary">
                  reason for the invoice.
                </span> If the details below are okay
                with you, please confirm and proceed to payment.
              </p>
            </div>
            <div className="pc-bottom nk-bg-primary-dark nk-tx-light">
              <div className="details px-8 py-8 nk-ft-medium">
                <p className="text-start font-semibold py-5 nk-text-primary">Invoice Data</p>
                {
                    invoices.map((item,index )=>{ return (
                       
                        <div className="deatials-item flex flex-row justify-between py-3" key={index}>
                            <p className="details-item_tag font-thin ">{item.itemname}</p>
                            <p className="details-item_tag">{item.itemvalue}</p>
                         </div>  
                    )})
                }
              </div>
              <hr />
              <div className="flex flex-col justify-start items-start py-10 px-8">
                <AccentButton params={{link:"",text:"Confirm and Proceed"}} />

                <small className="nk-tx-light font-thin  max-w- text-start py-7">
                  All transfers are subject to review, and could be delayed or
                  stopped if we identify an issue.
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
 

export const InvoiceForm = () => {

    const invoices  = [{itemname:"Transfer amount", itemvalue:"12, 450 xaf"},{itemname:"Fees", itemvalue:"150 xaf"}, 
{itemname:"Total payable", itemvalue:"12, 500 xaf"}, {itemname:"Reference", itemvalue:"X12J30IL"} ]



  return (
    <div className="payment-page max-w-2xl p-11 ">
        <div className="page-content  nk-bg-white ">
          <div className="brand p-4">
            <Brandwith />
          </div>
          <div className="">
            <div className="pc-top px-5 py-2">
              <h2 className="nk-ft-bold text-center text-4xl font-bold  py-8">
                Outstanding payment request.
              </h2>
               <div className="details px-8 py-8 nk-ft-medium"> 
                {
                    invoices.map((item,index )=>{ return (
                       
                        <div className="deatials-item flex flex-row justify-between py-3" key={index}>
                            <p className="details-item_tag font-thin ">{item.itemname}</p>
                            <p className="details-item_tag">{item.itemvalue}</p>
                         </div>  
                    )})
                }
              </div>
            </div>
            <div className="pc-bottom nk-bg-primary-dark nk-tx-light">
 
              <form action="" className='px-10 pt-8'>
                <h2 className="font-semibold text-3xl nk-tx-primary-light">How would you like to pay ?</h2>  
                <p className="nk-tx-light font-normal  max-w-2xl text-start py-4">
                    Please provide  a mobile money account number, from which we can pull funds to settle the invoice.
                    </p>
                <div className="flex flex-col bg-dark opacity-10 rounded inputcontainer"  >
                    <input type="text" className='min-w-4xl p-3  nk-tx-primary bg-transparent'   placeholder='e.g 678 000 123' />
                </div>

                <div className=" flex flex-row items-center gap-2 nk-tx-light font-normal  max-w-2xl text-start py-4">
                    <small>Auto detected payment method :</small> <span className='nk-tx-accent font-bold '>MTN MOMO</span>
                    </div>

                <div className="flex flex-col justify-start items-start py-10">

                <AccentButton params={{link:"",text:"Proceed"}} />

                <small className="nk-tx-light font-thin  text-start py-5">
                  All transfers are subject to review, and could be delayed or
                  stopped if we identify an issue.
                </small>

                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
  )
}


export const InvoicePaying = () => {

    const invoices  = [{itemname:"Transfer amount", itemvalue:"12, 450 xaf"},{itemname:"Fees", itemvalue:"150 xaf"}, 
{itemname:"Total payable", itemvalue:"12, 500 xaf"}, {itemname:"Reference", itemvalue:"X12J30IL"} ]



  return (
    <div className="payment-page max-w-2xl p-11 ">
        <div className="page-content  nk-bg-white ">
          <div className="brand p-4">
            <Brandwith />
          </div>
          <div className="">
            <div className="pc-top px-5 py-2">
              <h2 className="nk-ft-bold text-center text-4xl font-bold  py-8">
                Outstanding payment request.
              </h2>
               <div className="details px-8 py-8 nk-ft-medium"> 
                {
                    invoices.map((item,index )=>{ return (
                       
                        <div className="deatials-item flex flex-row justify-between py-3" key={index}>
                            <p className="details-item_tag font-thin ">{item.itemname}</p>
                            <p className="details-item_tag">{item.itemvalue}</p>
                         </div>  
                    )})
                }
              </div>
            </div>
            <div className="pc-bottom nk-bg-primary-dark nk-tx-light p-10">
  
                <h2 className="font-semibold text-3xl nk-tx-primary-light">Completing transactions.</h2>  
                <p className="nk-tx-light font-normal  max-w-2xl text-start py-4">
                    We have sent a payment request to your phone, if you cannot see the popup, please dial *126# and confirm the pull request with your five digit PIN.
                </p>
                 <div className="loaders-container py-10 flex flex-col justify-center items-center">
                    <div className="loaders flex flex-col justify-center items-center bg-dark">
                        <div className="line nk-bg-primary "></div>
                        <div className="line nk-bg-primary"></div>
                        <div className="line nk-bg-primary"></div>
                        <div className="line nk-bg-primary"></div>
                    </div> 
                </div>
 
            </div>
          </div>
        </div>
      </div>
  )
}

export const InvoicePaidSuccess = () => {

    const invoices  = [{itemname:"Transfer amount", itemvalue:"12, 450 xaf"},{itemname:"Fees", itemvalue:"150 xaf"}, 
{itemname:"Total payable", itemvalue:"12, 500 xaf"}, {itemname:"Reference", itemvalue:"X12J30IL"} ]



  return (
    <div className="payment-page max-w-2xl p-11 ">
        <div className="page-content  nk-bg-white ">
          <div className="brand p-4">
            <Brandwith />
          </div>
          <div className="">
            <div className="pc-top px-5 py-2">
              <h2 className="nk-ft-bold text-center text-4xl font-bold  py-8">
                Invoice Payment Completed.
              </h2>
               <div className="details px-8 py-8 nk-ft-medium"> 
                {
                    invoices.map((item,index )=>{ return (
                       
                        <div className="deatials-item flex flex-row justify-between py-3" key={index}>
                            <p className="details-item_tag font-thin ">{item.itemname}</p>
                            <p className="details-item_tag">{item.itemvalue}</p>
                         </div>  
                    )})
                }
              </div>
            </div>
            <div className="pc-bottom nk-bg-primary-dark nk-tx-light p-10">
  
                <h2 className="font-semibold text-3xl nk-tx-primary-light">Completing transactions.</h2>  
                <p className="nk-tx-light font-normal  max-w-2xl text-start py-4">
                    We have sent a payment request to your phone, if you cannot see the popup, please dial *126# and confirm the pull request with your five digit PIN.
                </p>
                 <div className="loaders-container py-10 flex flex-col justify-center items-center">
                    <div className="loaders flex flex-col justify-center items-center bg-dark">
                        <div className="line nk-bg-primary "></div>
                        <div className="line nk-bg-primary"></div>
                        <div className="line nk-bg-primary"></div>
                        <div className="line nk-bg-primary"></div>
                    </div> 
                </div>
 
            </div>
          </div>
        </div>
      </div>
  )
}

export const InvoicePaidFailed = () => {

    const invoices  = [{itemname:"Transfer amount", itemvalue:"12, 450 xaf"},{itemname:"Fees", itemvalue:"150 xaf"}, 
{itemname:"Total payable", itemvalue:"12, 500 xaf"}, {itemname:"Reference", itemvalue:"X12J30IL"} ]



  return (
    <div className="payment-page max-w-2xl p-11 ">
        <div className="page-content  nk-bg-white ">
          <div className="brand p-4">
            <Brandwith />
          </div>
          <div className="">
            <div className="pc-top px-5 py-2">
              <h2 className="nk-ft-bold text-center text-4xl font-bold  py-8">
                Invoice Payment Completed.
              </h2>
               <div className="details px-8 py-8 nk-ft-medium"> 
                {
                    invoices.map((item,index )=>{ return (
                       
                        <div className="deatials-item flex flex-row justify-between py-3" key={index}>
                            <p className="details-item_tag font-thin ">{item.itemname}</p>
                            <p className="details-item_tag">{item.itemvalue}</p>
                         </div>  
                    )})
                }
              </div>
            </div>
            <div className="pc-bottom nk-bg-primary-dark nk-tx-light p-10">
  
                <h2 className="font-semibold text-3xl nk-tx-primary-light">Completing transactions.</h2>  
                <p className="nk-tx-light font-normal  max-w-2xl text-start py-4">
                    We have sent a payment request to your phone, if you cannot see the popup, please dial *126# and confirm the pull request with your five digit PIN.
                </p>
                 <div className="loaders-container py-10 flex flex-col justify-center items-center">
                    <div className="loaders flex flex-col justify-center items-center bg-dark">
                        <div className="line nk-bg-primary "></div>
                        <div className="line nk-bg-primary"></div>
                        <div className="line nk-bg-primary"></div>
                        <div className="line nk-bg-primary"></div>
                    </div> 
                </div>
 
            </div>
          </div>
        </div>
      </div>
  )
}

export const InvoiceFetch = () => {

  return (
    <div className="payment-page flex flex-col justify-center items-center min-w-full min-h-full h-full nk-bg-white p-11 ">
      <Brandwith/>
        <div className="loaders flex flex-col justify-center items-center my-10">
          <div className="line nk-bg-primary-dark "></div>
            <div className="line nk-bg-primary-dark"></div>
            <div className="line nk-bg-primary-dark"></div>
            <div className="line nk-bg-primary-dark"></div>
        </div> 
        
      </div>
  )
}




 
