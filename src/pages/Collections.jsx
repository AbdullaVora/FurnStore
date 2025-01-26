import React, { useEffect, useState } from 'react';
import { HiMiniAdjustmentsHorizontal } from "react-icons/hi2";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import ArrivalCard from '../components/ArrivalCard';
import DropDown from '../components/DropDown';

const Collections = () => {
    const data = useSelector((state) => state.Collection.Collection);
    const [collection, setCollection] = useState(true);
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [product, setProductData] = useState([]);
    const [wishProduct, setwishProductData] = useState([]);

    const [filter, setFilter] = useState('');

    useEffect(() => {
        if (filter === 'a-z') {
            setProductData([...product].sort((a, b) => (a.title && b.title ? a.title.localeCompare(b.title) : 0)));
        } else if (filter === 'z-a') {
            setProductData([...product].sort((a, b) => (a.title && b.title ? b.title.localeCompare(a.title) : 0)));
        } else if (filter === 'price') {
            setProductData([...product].sort((a, b) => (a.price && b.price ? a.price - b.price : 0)));
        } else if (filter === 'price-reverse') {
            setProductData([...product].sort((a, b) => (a.price && b.price ? b.price - a.price : 0)));
        }
    }, [filter]);

    const ClearFilter = () => {
        setFilter('');
        setProductData(data?.product);
    }

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
                            <span className="fs-5 fw-bold ms-2">FILTER BY</span>
                        </div>
                        <hr />
                        <div className="row g-2">
                            <div
                                className="col me-2 text-center fw-medium py-2 bg-light d-flex align-items-center justify-content-center"
                                onClick={() => setFilter('a-z')}
                            >
                                SORT A-Z
                            </div>
                            <div
                                className="col me-2 text-center fw-medium py-2 bg-light d-flex align-items-center justify-content-center"
                                onClick={() => setFilter('z-a')}
                            >
                                SORT Z-A
                            </div>
                            <div
                                className="col me-2 text-center fw-medium py-2 bg-light d-flex align-items-center justify-content-center"
                                onClick={() => setFilter('price')}
                            >
                                SORT BY PRICE
                            </div>
                            <div
                                className="col me-2 text-center fw-medium py-2 bg-light d-flex align-items-center justify-content-center"
                                onClick={() => setFilter('price-reverse')}
                            >
                                SORT BY PRICE REVERSE
                            </div>
                        </div>
                        <button onClick={() => ClearFilter()} className="btn btn-dark d-flex align-items-center mt-3" >
                            <RiDeleteBin5Line size={22} />
                            <span className="ps-1 pt-1">CLEAR ALL</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* ****************************** Filter End ***************************** */}

            {/* ****************************** Collection Card Start ***************************** */}
            <div className="collectionCard mt-5">
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
