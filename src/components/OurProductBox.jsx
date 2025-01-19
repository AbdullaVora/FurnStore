import React, { useState } from 'react';
import { HiOutlineShoppingCart } from "react-icons/hi";
import { RiStarSmileLine } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { addProductToCart } from '../redux/slice/CollectionSlice';



const OurProductBox = ({ id, img, title, Cwidth }) => {
    const [hover, setHover] = useState(false);
    const dispatch = useDispatch()

    const handleHover = () => setHover(!hover);

    return (
        <div
            className="arrivalCard position-relative overflow-hidden px-2 mt-5"
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
            style={{ width: Cwidth ? '100%' : '195px' }}
            data-aos="zoom-in" data-aos-delay="150"

        >
            <div className="img">
                <img
                    src={img}
                    alt="arrival-img"
                    className="img-fluid"
                />
            </div>
            <div className="content mt-3 mb-3 text-center">
                <h6 className="fw-normal">{title}</h6>
                <span>$300.00</span>
            </div>
            <div className="sideIcons">
                <div className="cart" onClick={() => dispatch(addProductToCart(id))}>
                    <HiOutlineShoppingCart size={14} />
                </div>
                <div className="star">
                    <RiStarSmileLine size={17} />
                </div>
            </div>
        </div>
    );
};

export default OurProductBox;
