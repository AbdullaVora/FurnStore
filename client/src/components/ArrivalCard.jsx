import React, { useState } from 'react';
import { HiOutlineShoppingCart } from "react-icons/hi";
import { RiStarSmileLine } from "react-icons/ri";

const ArrivalCard = ({ img, title, isCollection }) => {
  const [hover, setHover] = useState(false);

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
      <div className={`content text-center ${isCollection ? "mb-5 mt-3" : "mb-3"}`}>
        <h6 className="fw-normal">{title}</h6>
        <span style={{ display: hover && !isCollection ? 'none' : 'block' }}>$300.00</span>
      </div>
      {!isCollection && 
        <button className="bg-transparent rounded-1 mx-auto w-100 py-2 mb-3 mt-2">
          Quick Add
        </button>
      }
      <div className="sideIcons">
        <div className="cart">
          <HiOutlineShoppingCart size={14} />
        </div>
        <div className="star">
          <RiStarSmileLine size={17} />
        </div>
      </div>
    </div>
  );
};

export default ArrivalCard;
