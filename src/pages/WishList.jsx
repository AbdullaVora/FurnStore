import React from 'react'
import Footer from '../components/Footer'
import { useSelector } from 'react-redux'
import ArrivalCard from '../components/ArrivalCard';

const WishList = () => {

    const wishlist = useSelector((state) => state.Collection.WishList);

    // Update the product state whenever data changes

    const parsedWish = wishlist
        ? wishlist.map(item => JSON.parse(item)).flat()
        : [];

    return (
        <>
            <div className='wishlist py-5 border-bottom'>
                <div className="container">
                    <h2 className='text-center fw-bolder display-5 mt-5 mb-5'>PAGE WISHLIST</h2>
                    {parsedWish.length <= 0 ? <h2 className='fw-bold' style={{ textAlign: 'center' }}>YOUR WishList IS EMPTY</h2>
                        :
                        <div className={`cards d-flex flex-wrap ${wishlist.length >= 4 ? "justify-content-between" : "justify-content-start"}`}>
                            {parsedWish.map((card, index) => (
                                <ArrivalCard
                                    key={index}
                                    img={card.img}
                                    id={card.id}
                                    title={card.title}
                                    price={card.price}
                                    iswish={true}
                                />
                            ))}
                        </div>
                    }
                </div>
            </div>
            <Footer />
        </>
    )
}

export default WishList
