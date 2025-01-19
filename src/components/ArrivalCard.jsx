import React, { useState } from 'react';
import { HiOutlineShoppingCart } from "react-icons/hi";
import { RiStarSmileLine } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { addProductToCart } from '../redux/slice/CollectionSlice';

const ArrivalCard = ({ id, img, title, price, isCollection }) => {
  const [hover, setHover] = useState(false);

  const dispatch = useDispatch()
  const handleHover = () => setHover(!hover);

  return (
    <div
      className="arrivalCard position-relative overflow-hidden px-2"
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      data-aos="zoom-in"
      data-aos-delay="150"
    >
      <div className="img">
        <img
          src={img}
          alt="arrival-img"
          style={{ width: isCollection ? '280px' : '195px', height: isCollection ? '350px' : '240px' }}
          className="img-fluid"
        />
      </div>
      <div className={`content text-center ${isCollection ? "mb-5 mt-3" : "my-3"}`}>
        <h6 className="fw-normal">{title}</h6>
        <span style={{ display: hover && !isCollection ? 'none' : 'block' }}>${price}</span>
      </div>
      {!isCollection && 
        <button onClick={() => dispatch(addProductToCart(id))} className="bg-transparent rounded-1 mx-auto w-100 py-2 mb-3 mt-2">
          Quick Add
        </button>
      }
      <div className="sideIcons">
        <div className="cart" onClick={() => (dispatch(addProductToCart(id)))}>
          <HiOutlineShoppingCart size={14}  />
        </div>
        <div className="star">
          <RiStarSmileLine size={17} />
        </div>
      </div>
    </div>
  );
};

export default ArrivalCard;
