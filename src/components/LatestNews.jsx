import React from 'react'

const LatestNews = ({ title, img }) => {
    return (
        <>
            <div className="row align-items-center">
                <div className="col-6">
                    <div className="img">
                        <img src={img} alt="news" className='img-fluid' />
                    </div>
                </div>
                <div className="col-6 px-5">
                    <div className="content">
                        <span className='opacity-75'>Oct 22, 2023 </span>
                        <span>- By Voniva Theme</span>
                        <h2 className='fw-normal pt-3'>{title}</h2>
                        <hr />
                        <p className='pt-2 opacity-75 pb-3'>
                            Valentine’s Day 2021 has no choice but to unfold rather differently than usual, so we already know it will be one to remember.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eiusmod tempor incididunt ut labore et dolore mag...
                        </p>
                        <button className='px-4 py-2 bg-transparent'>Read More</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LatestNews
