import React, { useEffect, useState } from 'react';
import { HiMiniAdjustmentsHorizontal } from "react-icons/hi2";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import ArrivalCard from '../components/ArrivalCard';
import DropDown from '../components/DropDown';

const Collections = () => {
    const [collection, setCollection] = useState(true);
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [product, setProductData] = useState([]);
    const [wishProduct, setwishProductData] = useState([]);

    const data = useSelector((state) => state.Collection.Collection);
    const wishlist = useSelector((state) => state.Collection.WishList);
    
    // Update the product state whenever data changes
    useEffect(() => {
        if (data?.product) {
            setProductData(data.product);
        }
        if (wishlist) {
            setwishProductData(wishlist);
        }
    }, [data, wishlist]);

    console.log(wishProduct);
    
    

    const DropdownEnter = () => setDropdownVisible(true);
    const DropdownLeave = () => setDropdownVisible(false);

    return (
        <>
            {/* ****************************** Banner Start ***************************** */}
            <div className="collection d-flex align-items-center justify-content-center">
                <div className="title text-center">
                    <h1>FurStore Collections</h1>
                    <span className='d-block'>Style your space, live in comfort. Furniture that feels like home</span>
                </div>
            </div>
            {/* ****************************** Banner End ***************************** */}

            {/* ****************************** Filter Start ***************************** */}
            <div className="filterMain py-5 mt-5">
                <div className="container">
                    <div className="filter p-4">
                        <div className="pb-3 d-flex align-items-center">
                            <HiMiniAdjustmentsHorizontal size={22} />
                            <span className='fs-5 fw-bold ms-2'>FILTER BY</span>
                        </div>
                        <hr />
                        <div className="row g-2">
                            <div
                                className="col position-relative me-2 d-flex align-items-center justify-content-center text-center fw-medium py-2 bg-light"
                                onMouseEnter={DropdownEnter}
                                onMouseLeave={DropdownLeave}
                            >
                                AVAILABILITY <FaAngleDown className='ms-1' />
                                {isDropdownVisible && <DropDown />}
                            </div>
                            <div className="col me-2 text-center fw-medium py-2 bg-light d-flex align-items-center justify-content-center">PRICE <FaAngleDown className='ms-1' /></div>
                            <div className="col-2 me-2 text-center fw-medium py-2 bg-light d-flex align-items-center justify-content-center">PRODUCT TYPE <FaAngleDown className='ms-1' /></div>
                            <div className="col me-2 text-center fw-medium py-2 bg-light d-flex align-items-center justify-content-center">BRAND <FaAngleDown className='ms-1' /></div>
                            <div className="col me-2 text-center fw-medium py-2 bg-light d-flex align-items-center justify-content-center">COLOR <FaAngleDown className='ms-1' /></div>
                            <div className="col text-center fw-medium py-2 bg-light d-flex align-items-center justify-content-center">SIZE <FaAngleDown className='ms-1' /></div>
                        </div>
                        <button className="btn btn-dark d-flex align-items-center mt-3">
                            <RiDeleteBin5Line size={22} />
                            <span className='ps-1 pt-1'>CLEAR ALL</span>
                        </button>
                    </div>
                </div>
            </div>
            {/* ****************************** Filter End ***************************** */}

            {/* ****************************** Collection Card Start ***************************** */}
            <div className="collectionCard">
                <div className="container">
                    <div className="cards d-flex flex-wrap justify-content-between">
                        {product.map((card) => (
                            <ArrivalCard
                                key={card.id}
                                img={card.img}
                                id={card.id}
                                title={card.title}
                                price={card.price}
                                isCollection={collection}
                            />
                        ))}
                    </div>
                </div>
            </div>
            {/* ****************************** Collection Card End ***************************** */}
        </>
    );
};

export default Collections;
