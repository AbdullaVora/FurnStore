import React from 'react'
import { FaComments } from "react-icons/fa6";


const TestiminoalBox = ({ text, author, img }) => {
    return (
        <>
            <div className="testimonialBox w-100 d-flex px-4 py-5 shadow justify-content-between">
                <div className="left col-5">
                    <div className="img">
                        <img src={img} alt="" className='img-fluid mx-3' />
                    </div>
                    <h5 className='fw-normal mt-2 text-center'>{author}</h5>
                    <span className='text-center d-block'>CEO Vinova</span>
                </div>
                <div className="right col-6">
                    <div className="icon text-center mb-2">
                        <FaComments size={45} color='#0A5D5D' />
                    </div>
                    <p className='text-center opacity-50'>{text}</p>
                </div>
            </div>
        </>
    )
}

export default TestiminoalBox
