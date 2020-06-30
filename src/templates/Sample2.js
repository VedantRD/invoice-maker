import React from 'react'
import '../styles/sample2.css'

const Sample2 = () => {
    return (
        <div className='sample2-container'>
            <div className='card'>
                <div className='card-body p-5'>
                    {/* Logo Row */}
                    <div className='row no-gutters justify-content-center mr-3 mb-4'>
                        <h1>
                            Invoice
                        </h1>
                    </div>
                    <hr className='w-50'></hr>
                    <div className='row'>
                        <div className='col-6'>
                            {/* From Details */}
                            <h5 className='mt-4'>From</h5>
                            <p>
                                Your Company Name
                            <br />
                            Your Name
                            </p>
                        </div>
                        <div className='col-6'>
                            {/* To Details */}
                            <h5 className='mt-4'>To</h5>
                            <p>
                                Customer Name
                            <br />
                            Customer Address
                            </p>
                        </div>
                    </div>
                    {/* Table of goods */}
                    <table className="table mt-5">
                        <thead className="">
                            <tr>
                                <th scope="col" className='py-2' style={{ border: 'none' }}>Item</th>
                                <th scope="col" className='py-2' style={{ border: 'none' }}>Qty</th>
                                <th scope="col" className='py-2' style={{ border: 'none' }}>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Item Name</td>
                                <td className='pl-3'>2</td>
                                <td>Rs. 400</td>
                            </tr>
                            <tr>
                                <td>Item Name</td>
                                <td>4</td>
                                <td>Rs. 500</td>
                            </tr>
                            <tr>
                                <td>Item Name</td>
                                <td>3</td>
                                <td>Rs. 100</td>
                            </tr>
                        </tbody>
                    </table>
                    {/* Show Total */}
                    <div className='d-flex justify-content-end pl-5 ml-5'>
                        <table className="table mt-5 w-50">
                            <thead className="">
                                <tr>
                                    <th className='py-2 pl-4' scope="col" colSpan="2" style={{ border: 'none' }}>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row" className='text-center'>Final Amount</th>
                                    <th scope="row" className='text-center'>Rs. 500</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sample2;
