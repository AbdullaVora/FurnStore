// import { useState } from 'react'
import { RiStarSLine } from "react-icons/ri";
import payment from '../../public/images/payment.avif'
import { FaRegClock } from "react-icons/fa6";
import { FaShippingFast } from "react-icons/fa";
import Footer from "../components/Footer";
import { useState } from 'react'


const ProductDetail = () => {
    const [activeTab, setActiveTab] = useState('description')

    const tabContent = {
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridicu lus mus. Donec quam felis, ultri cies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
        delivery: "Our delivery policy ensures quick and reliable shipping. We process all orders within 24 hours and provide tracking information. Standard delivery takes 4-6 business days, while express delivery is available for urgent orders.",
        shipping: "Free shipping on all orders above $50. Returns accepted within 30 days of delivery. Items must be unused and in original packaging. Contact our customer service for return authorization.",
        custom: "Custom tab content can be tailored to your specific needs. Contact our support team for personalized solutions and special requirements."
    }

    return (
        <>
            <div className="productDetail py-5 border-bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-6">
                            <img src="/images/detail_1.webp" alt="" className='img-fluid' />
                        </div>
                        <div className="col-6 px-5">
                            <div className="title">
                                <h4 className='fw-bold'>Fiamond Halo Stud Doneco</h4>
                            </div>
                            <div className="stars d-flex align-items-center">
                                {[0, 1, 2, 3, 4].map((_, index) => (
                                    <RiStarSLine key={index} size={20} color='#d4d4d4' />
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
                            <div className="position-relative mb-2 rounded-5" style={{ width: '100%', height: '8px', backgroundColor: '#d4d4d4' }}>
                                <div className="position-absolute top-0 start-0 rounded-5" style={{ width: '60%', height: '100%', backgroundColor: '#ff6400' }}></div>
                            </div>
                            <span className='fw-bold opacity-50' style={{ fontSize: '13px' }}>60% items are sold -- only 40% left</span>
                            <span className="fw-bold d-block mt-4" style={{ fontSize: '13px' }}>PID: <span className='opacity-75'>1234567890</span></span>
                            <span className="fw-bold d-block mt-2" style={{ fontSize: '13px' }}>CATEGORY: <span className='opacity-75'>
                                Armchair, Bathroom, Bedroom, Clocks, Flash Deals, Flower vase, Hanging Light, Home page, Kitchen, Sofa, Tables</span></span>

                            <span className="fw-bold d-block mt-4" style={{ fontSize: '13px' }}>SIZE: SMALL </span>
                            <select
                                className="w-50 border-none outline-none p-2 fw-semibold opacity-75 mb-2"
                                style={{ backgroundColor: '#f1f1f1', fontSize: '12px' }}
                                name="currency"
                            >
                                <option selected value="small">SMALL</option>
                                <option value="medium">MEDIUM</option>
                                <option value="large">LARGE</option>
                            </select>
                            <span className="fw-bold d-block mt-4" style={{ fontSize: '13px' }}>SIZE: GREEN </span>
                            <select
                                className="w-50 border-none outline-none p-2 fw-semibold opacity-75 mb-4"
                                style={{ backgroundColor: '#f1f1f1', fontSize: '12px' }}
                                name="currency"
                            >
                                <option selected value="green">GREEN</option>
                                <option value="white">WHITE</option>
                                <option value="gray">GRAY</option>
                            </select>
                            <div className="border-bottom border-2">
                                <button className='w-100 rounded-3 fw-bold detail-btn-1 px-4 py-2 mt-3'>ADD TO CART</button>
                                <button className='w-100 rounded-3 fw-bold detail-btn-2 px-4 py-2 mt-3 mb-5'>BUY IT NOW</button>
                            </div>

                            <span className="fw-bold d-block mt-4" style={{ fontSize: '13px' }}>GUARANTED SAFE CHECKOUT: </span>
                            <img src={payment} alt="payment" className='img-fluid mt-2' />

                            <span className="d-flex align-items-center fw-bold opacity-75 mt-3" style={{ fontSize: '13px' }}><FaRegClock size={18} />&nbsp; Order ships within 4 to 6 days</span>
                            <span className="d-flex align-items-center fw-bold opacity-75 mt-2" style={{ fontSize: '13px' }}><FaShippingFast size={18} />&nbsp; Hoorray! this item is eligible for FREE shipping</span>
                        </div>
                    </div>
                    <div className="other-details mt-5">
                        <ul type="none" className="policy d-flex m-0 p-0 pb-4 position-relative border-bottom border-2">
                            <li
                                className={`fw-bold me-5 fs-6 cursor-pointer position-relative ${activeTab === 'description' ? 'active-tab' : ''}`}
                                onClick={() => setActiveTab('description')}
                            >
                                DESCRIPTION
                            </li>
                            <li
                                className={`fw-bold me-5 fs-6 cursor-pointer position-relative ${activeTab === 'delivery' ? 'active-tab' : ''}`}
                                onClick={() => setActiveTab('delivery')}
                            >
                                DELIVERY POLICY
                            </li>
                            <li
                                className={`fw-bold me-5 fs-6 cursor-pointer position-relative ${activeTab === 'shipping' ? 'active-tab' : ''}`}
                                onClick={() => setActiveTab('shipping')}
                            >
                                SHIPPING & RETURN
                            </li>
                            <li
                                className={`fw-bold me-5 fs-6 cursor-pointer position-relative ${activeTab === 'custom' ? 'active-tab' : ''}`}
                                onClick={() => setActiveTab('custom')}
                            >
                                CUSTOM TAB
                            </li>
                        </ul>
                        <p className="opacity-75 mt-4 fw-medium" style={{ fontSize: '14px' }}>
                            {tabContent[activeTab]}
                        </p>
                        <ul className='ps-3 p-0 gap-3 mt-4'>
                            <li className="fw-medium opacity-75" style={{ fontSize: '13px' }}>Ribbed and double stitched collar and armholes</li>
                            <li className="fw-medium opacity-75" style={{ fontSize: '13px' }}>High-density fabric for vivid print clarit</li>
                            <li className="fw-medium opacity-75" style={{ fontSize: '13px' }}>Machine-wash safe</li>
                            <li className="fw-medium opacity-75" style={{ fontSize: '13px' }}>Single right rear button flap pocket</li>
                            <li className="fw-medium opacity-75" style={{ fontSize: '13px' }}>Products are proudly printed in the United States</li>
                        </ul>
                        
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ProductDetail
