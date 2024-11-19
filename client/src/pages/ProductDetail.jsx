import React, { useState } from 'react'
import { RiStarSLine } from "react-icons/ri";


const ProductDetail = () => {
    const [hover, setHover] = useState(false)
    const hoverHandle = () => {
        alert('hi')
        setHover(!hover)
    }
    return (
        <>
            <div className="productDetail py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <img src="/images/detail_1.webp" alt="" className='img-fluid' />
                        </div>
                        <div className="col-6 px-5">
                            <div className="title">
                                <h4 className='fw-bold'>Fiamond Halo Stud Doneco</h4>
                            </div>
                            <div className="stars d-flex align-items-center">
                                {[0, 1, 2, 3, 4].map(() => (
                                    <RiStarSLine size={20} color='#d4d4d4' />
                                ))}
                                <span className='fw-bold ms-3 opacity-75 pr-detail-span'>View All Ratings</span>
                            </div>
                            <div className="priceArea py-3 d-flex align-items-center">
                                <span className='discount_price fw-bold opacity-50'><del>$820.00</del></span>
                                <span className='fw-bold opacity-50'>&nbsp;&nbsp;&nbsp;||&nbsp;&nbsp;&nbsp;</span>
                                <span className='fw-bold fs-5'>$380.00</span>
                                <span className='discount_per mx-3 fw-bold text-white py-1 px-3 rounded-5' style={{ backgroundColor: '#ff6400', fontSize: '12px' }}>-54%</span>
                            </div>
                            <p className='opacity-75 fw-medium' style={{ fontSize: '13px' }}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridicu lus mus. Donec quam felis, ultri cies nec, pellentesque...</p>
                            {/* <div className="bar bg-gray rounded-5 position-relative" style={{ width: '30%', height: '8px', backgroundColor: '#ff6400' }}>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetail
