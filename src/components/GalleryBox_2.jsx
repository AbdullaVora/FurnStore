import React from 'react';
import {Link} from 'react-router-dom'

const GalleryBox_2 = ({img,title}) => {
    return (
        <>
            <div className="box_2 position-relative w-50 mx-2">
                <img src={img} alt="image" className='img-fluid' />
                <h2 className='position-absolute top-50 translate-middle-y ms-3 fs-1 fw-normal'>{title}</h2>
                <Link className='position-absolute translate-middle-y text-black' style={{top: '60%', left:'3%'}}>Discover Now</Link>    
            </div>
        </>
    )
}

export default GalleryBox_2
