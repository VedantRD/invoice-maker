import React, { useState } from 'react'
import '../styles/form.css'
import { useHistory } from 'react-router-dom'

export const Form = () => {

    const history = useHistory()

    const [allData, SetAllData] = useState({
        companyName: '',
        yourName: '',
        customerName: '',
        customerAddress: '',
        totalAmount: 0,
        items: [
            { item1Name: '', item1Qty: 0, item1Price: 0 },
            { item2Name: '', item2Qty: 0, item2Price: 0 },
            { item3Name: '', item3Qty: 0, item3Price: 0 }
        ],
    })

    const handleOnChange = (e) => {
        const value = e.target.value;
        SetAllData({
            ...allData,
            [e.target.name]: value
        });
        console.log(allData)
    }

    const handleGoodsChange = (e, i) => {
        const value = e.target.value;
        // console.log(value)
        const copyData = allData
        copyData.items[i] = {
            ...copyData.items[i],
            [e.target.name]: value
        }
        console.log(copyData)
        SetAllData(copyData)
    }

    const displayTemplate = () => {
        history.push('/show', allData)
    }

    return (
        <div className='form-container'>
            <div className='card p-3'>

                <h1 className='text-center mt-4'>Fill Details</h1>

                <div className='card-body'>
                    {/* <form> */}

                    {/* Your Details */}
                    <h5 className='card-title mb-4'>
                        Your Details
                        </h5>
                    <div className="form-group">
                        <label htmlFor="inputAddress">Company Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="companyName"
                            id="companyname"
                            placeholder="e.g. xyz company"
                            onChange={handleOnChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputAddress">Your Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="yourName"
                            id="yourname"
                            placeholder="full name"
                            onChange={handleOnChange}
                        />
                    </div>

                    {/* Customer Details */}
                    <h5 className='card-title mt-5 mb-4'>
                        Customer Details
                        </h5>
                    <div className="form-group">
                        <label htmlFor="inputAddress">Customer Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="customerName"
                            id="customername"
                            placeholder="full name"
                            onChange={handleOnChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputAddress">Customer Address</label>
                        <textarea
                            className="form-control"
                            name="customerAddress"
                            id="customeraddress"
                            placeholder="e.g. abc street"
                            onChange={handleOnChange}
                        />
                    </div>

                    {/* Goods Details */}
                    <h5 className='card-title mt-5 mb-4'>
                        Goods Details
                        </h5>
                    <table className="table table-borderless">
                        <thead>
                            <tr>
                                <th scope="col" style={{ width: '50%' }}>Item</th>
                                <th scope="col">Qty</th>
                                <th scope="col">Price (Rs)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name='item1Name'
                                        placeholder='item description'
                                        onChange={(e) => handleGoodsChange(e, 0)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        className="form-control"
                                        name='item1Qty'
                                        placeholder='3'
                                        onChange={(e) => handleGoodsChange(e, 0)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name='item1Price'
                                        placeholder='100'
                                        onChange={(e) => handleGoodsChange(e, 0)}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name='item2Name'
                                        onChange={(e) => handleGoodsChange(e, 1)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        className="form-control"
                                        name='item2Qty'
                                        onChange={(e) => handleGoodsChange(e, 1)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name='item2Price'
                                        onChange={(e) => handleGoodsChange(e, 1)}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name='item3Name'
                                        onChange={(e) => handleGoodsChange(e, 2)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        className="form-control"
                                        name='item3Qty'
                                        onChange={(e) => handleGoodsChange(e, 2)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name='item3Price'
                                        onChange={(e) => handleGoodsChange(e, 2)}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    {/* Total Amount */}
                    <h5 className='card-title mt-5 mb-4'>Total</h5>
                    <div className="form-group">
                        <label htmlFor="inputAddress">Amount Payable in Rs (incl. taxes)</label>
                        <input
                            type='number'
                            className="form-control w-50"
                            name="totalAmount"
                            id="customeraddress"
                            placeholder="e.g. 400"
                            onChange={handleOnChange}
                        />
                    </div>

                    {/* Confirm Details */}
                    <div className='row no-gutters align-items-end mt-5 pt-5'>
                        <div className='col d-flex justify-content-end'>
                            <button onClick={displayTemplate} className="btn btn-success w-25">
                                Save & Continue
                                    <i className='ml-2 fa fa-angle-right fa-lg'></i>
                            </button>
                        </div>
                    </div>

                    {/* </form> */}
                </div>
            </div>
        </div>
    )
}
