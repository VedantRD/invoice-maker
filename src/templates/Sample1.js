import React from 'react'
import '../styles/sample1.css'

const Sample1 = () => {

    return (
        // <div className='sample1-container'>
        <div className='card'>
            <div className='card-body p-5'>
                {/* Logo Row */}
                <div className='row no-gutters justify-content-end mr-5'>
                    <h2>
                        Invoice
                        </h2>
                </div>
                {/* From Details */}
                <h5 className='mt-4'>From</h5>
                <p>
                    Your Company Name
                        <br />
                        Your Name
                    </p>
                {/* To Details */}
                <h5 className='mt-4'>To</h5>
                <p>
                    Customer Name
                        <br />
                        Customer Address
                    </p>
                {/* Table of goods */}
                <table className="table mt-5">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">Item</th>
                            <th scope="col">Qty</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Item Name</th>
                            <td className='pl-3'>2</td>
                            <td>Rs. 400</td>
                        </tr>
                        <tr>
                            <th scope="row">Item Name</th>
                            <td>4</td>
                            <td>Rs. 500</td>
                        </tr>
                        <tr>
                            <th scope="row">Item Name</th>
                            <td>3</td>
                            <td>Rs. 100</td>
                        </tr>
                    </tbody>
                </table>
                {/* Show Total */}
                <div className='d-flex justify-content-end pl-5 ml-5'>
                    <table className="table mt-5 w-50">
                        <thead className="thead-light text-center">
                            <tr>
                                <th scope="col" colspan="2">Total</th>
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
        // </div>
    )
}

export default Sample1;
