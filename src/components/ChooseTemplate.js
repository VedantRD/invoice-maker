import React, { useState, createRef } from 'react'
import { useHistory } from 'react-router-dom'
import Sample1 from '../templates/Sample1'
import Sample2 from '../templates/Sample2'
import ReactToPdf from 'react-to-pdf'

const ChooseTemplate = () => {

    const ref = createRef()

    const [template, setTemplate] = useState('template1')

    const handleOnChange = (e) => {
        setTemplate(e.target.value);
    }

    const allData = useHistory().location.state
    console.log(allData)

    return (
        <div style={{ paddingLeft: '20%', paddingRight: '20%' }}>

            {/* First Row */}
            <div className='row no-gutters align-items-center mb-4 mt-3'>
                <div className='col-8'>
                    {/* Choose Template */}
                    <select
                        className="form-control w-100"
                        onChange={handleOnChange}
                    >
                        <option value='template1'>Formal Design</option>
                        <option value='template2'>Minimal Design</option>
                    </select>
                </div>
                <div className='col-4 d-flex justify-content-end'>
                    {/* Download as PDF Option */}
                    {/* <button ton className='btn btn-success'>Download as PDF</button> */}
                    <ReactToPdf targetRef={ref} filename="div-blue.pdf">
                        {({ toPdf }) => (
                            <button onClick={toPdf} className='btn btn-success'>Download as PDF</button>
                        )}
                    </ReactToPdf>
                </div>
            </div >

            {/* Render According to Choice */}
            <div ref={ref}>
                {template === 'template1' ?
                    <Sample1></Sample1>
                    :
                    <Sample2 ref={ref}></Sample2>
                }
            </div >
        </div >
    )
}

export default ChooseTemplate;
