import React from 'react'
import { FaFacebookF, FaTwitter, FaPinterestP, FaInstagram } from "react-icons/fa";
import Footer from '../components/Footer';


const ContactUs = () => {
    return (
        <>
            <div className='contact pb-5 border-bottom'>
                <div className="container">
                    <h2 className='text-center fw-bolder display-5 mt-5 mb-5'>CONTACT US</h2>

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.54586602985!2d72.73989463380968!3d21.15918020356955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1731992594469!5m2!1sen!2sin" width="100%" height="550" style={{ border: '0', borderRadius: '20px' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    <div className="row align-items-center">
                        <div className="col-6">
                            <form action="">
                                <h4 className='mt-5 fw-bold'>GET IN TOUCH</h4>
                                <p>Please enter the details of your requesst. A member of our support staff will respond as soon as possible.</p>
                                <div className="row mb-3">
                                    <div className="col-6 w-full">
                                        <input type="text" name="name" id="" className='form-control fw-semibold opacity-75' placeholder='YOUR NAME' />
                                    </div>
                                    <div className="col-6 w-full">
                                        <input type="email" name="email" id="" className='form-control fw-semibold opacity-75' placeholder='YOUR EMAIL' />
                                    </div>
                                </div>
                                <input type="number" name="number" id="" className='form-control mb-3 fw-semibold opacity-75' placeholder='YOUR PHONE NUMBER' />
                                <textarea rows={5} name="number" id="" className='form-control fw-semibold opacity-75' placeholder='YOUR MESSAGE' />
                                <button className='py-2 px-5 outline-none text-white mt-3 rounded-2' type='submit'>Submit</button>
                            </form>
                        </div>
                        <div className="col-6 px-5">
                            <p className='fs-6'><span className='fw-bold'>Address: </span>123 Suspendis matti, Visaosang Building VST District, NY Accums, North American</p>
                            <span className='d-block mb-3'><span className='fw-bold'>Email: </span>support@domain.com</span>
                            <span className='d-block mb-3'><span className='fw-bold'>Call Us: </span>(012)-345-67890</span>
                            <span className='d-block mb-3'><span className='fw-bold'>Opening Store: </span>Our store has re-opened for shopping, exchanges every day 11am to 7pm</span>
                            <div className="d-flex">
                                <FaFacebookF className='social' size={38} />
                                <FaInstagram className='social' size={38} />
                                <FaPinterestP className='social' size={38} />
                                <FaTwitter className='social' size={38} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ContactUs
