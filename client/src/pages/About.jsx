import React from 'react'
import Footer from '../components/Footer'

const About = () => {
    return (
        <>
            <div className="about">
                <div className="container">
                    <h2 className='my-5 display-5 text-center fw-bold'>ABOUT US</h2>
                    <div className="topSection my-5 pb-5">
                        <div className="img my-5">
                            <img src="/images/about_1.webp" alt="about" className='rounded-3 img-fluid' width={1300} />
                        </div>
                        <div className="title">
                            <p className='fw-bold'>Lorem ipsum dolor sit am et, consectetur adipiscing elit. Etiam consequat ut ex vel finibus. Nunc eget molestie purus. Fusce imperdiet pulvinar est, eget fermentum nisilin as. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curaes</p>
                            <p className='my-4'>Maecenas congue metus id turpis iaculis mattis. Sed pellentesque id arcu id scelerisque. Ut ullamcorper rutrum justo, at blandit eros maximus ut. Integer non tincidunt justo, rhoncus Aenean venenatis sed purus ac sollicitudin. Nulla mauris risus, commodo et luctus rutrum, lobortis sed mauris. Integer congue, sem elementum varius tristique, erat nulla rutrum risus, a imperdiet nulla lorem fermentum erat. Pellentesque elementum justo at velit fringilla, eu feugiat erat fermentum. Vivamus libero dolor, porta eget vehicula eu, iaculis id lacus. Sed interdum convallis sapien, eget faucibus sapien. Proin hendrerit lacus turpis.</p>
                            <p className='mb-5'>Maecenas congue metus id turpis iaculis mattis. Sed pellentesque id arcu id scelerisque. Ut ullamcorper rutrum justo, at blandit eros maximus ut. Integer non tincidunt justo, rhoncus Aenean venenatis sed purus ac sollicitudin. Nulla mauris risus, commodo et luctus rutrum, lobortis sed mauris.</p>
                        </div>
                    </div>
                    <div className="secondSection my-5">
                        <div className="commentBox rounded-5 p-5" style={{ width: '1300px', height: '300px', backgroundColor: '#f1f1f1' }}>
                            <div className="row justify-content-between align-items-center">
                                <div className="col-3">
                                    <img src="/images/about_2.avif" alt="" />
                                </div>
                                <div className="col-9">
                                    <p className='fs-4 mb-3'>Best purchase I’ve made this winter! The color and knitting are exquisite and it's so comfy! Went from NYC to Miami without ever taking it off. Super cute!!</p>
                                    <span className="fw-bold"> Kwang Shang - CEO VinovaThemes</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="thirdSection my-5">
                        <div className="row align-items-center">
                            <div className="col-6">
                                <span className='fs-3 d-block fw-bold mb-4'>Why Choose Us ?</span>
                                <p className='opacity-75' style={{ lineHeight: '30px', fontSize: '18px' }}>Maecenas congue metus id turpis iaculis mattis. Sed pellentesque id arcu id scelerisque. Ut ullamcorper rutrum justo, at blandit eros maximus ut. Integer non tincidunt justo, rhoncus Aenean venenatis sed purus ac sollicitudin. Nulla mauris risus, commodo et luctus rutrum, lobortis sed mauris. Integer congue, sem elementum varius tristique.</p>
                            </div>
                            <div className="col-6">
                                <img src="/images/about_3.webp" alt="" className='img-fluid' />
                            </div>
                        </div>
                    </div>
                    <div className="fourthSection">
                        <div className="row align-items-center">
                            <div className="col-6">
                                <img src="/images/about_4.gif" alt="" className='img-fluid' />
                            </div>
                            <div className="col-6">
                                <span className='fs-3 d-block fw-bold mb-4'>Trusted Online Shopping</span>
                                <p className='opacity-75' style={{ lineHeight: '30px', fontSize: '18px' }}>Maecenas congue metus id turpis iaculis mattis. Sed pellentesque id arcu id scelerisque. Ut ullamcorper rutrum justo, at blandit eros maximus ut. Integer non tincidunt justo, rhoncus Aenean venenatis sed purus ac sollicitudin. Nulla mauris risus, commodo et luctus rutrum, lobortis sed mauris. Integer congue, sem elementum varius tristique.</p>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default About
