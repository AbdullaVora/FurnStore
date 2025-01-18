import { Link } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { TiMinusOutline, TiPlusOutline } from "react-icons/ti";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useState } from "react";
import { removeProductFromCart } from "../redux/slice/CollectionSlice";


const Cart = ({ id, img, title }) => {
    const dispatch = useDispatch();

    const [quantity, setquantity] = useState(1);

    const handleinc = () => {
        setquantity(quantity + 1);
    }
    const handledic = () => {
        if (quantity > 1) setquantity(quantity - 1);
        else dispatch(removeProductFromCart(id));
    }
    console.log(quantity);


    return (
        <div className="cart p-3">
            <div className="d-flex">
                <img src={img} alt={title} className="img-fluid" style={{ width: '150px' }} />
                <div className="mx-4 mt-2">
                    <h6 className="fw-bold fs-6">{title}</h6>
                    <span className="fw-bold">$300.00</span>
                    <div className="quantity d-flex align-items-center mt-2">
                        <div className="dic" onClick={handledic}>
                            <TiMinusOutline style={{ cursor: 'pointer' }} size={20} />
                        </div>
                        <span className="px-3">{quantity}</span>
                        <div className="inc" onClick={handleinc}>
                            <TiPlusOutline style={{ cursor: 'pointer' }} size={20} />
                        </div>
                        <div className="delete mx-4" onClick={() => (dispatch(removeProductFromCart(id)))}>
                            <RiDeleteBin5Line size={20} className="cursor-pointer" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const CartBar = ({ openSlide, closeSideBar }) => {
    const cart = useSelector((state) => state.Collection.Cart);

    // Safely parse cart data
    const parsedCart = cart
        ? cart.map(item => JSON.parse(item)).flat()
        : [];

    return (
        <div className="Cartbar">
            <div
                className={`slide position-fixed bg-white`}
                style={{
                    zIndex: "999",
                    top: 0,
                    right: openSlide ? 0 : "-30%",
                    height: "100vh",
                    width: "25%",
                    transition: "right 0.3s ease-in-out",
                }}
            >
                <div className="topBar border-bottom p-3">
                    <div className="d-flex align-items-start justify-content-between">
                        <div className="cartHead">
                            <HiOutlineShoppingCart size={25} />
                            <span className="ms-1 fw-bold">CART</span>
                        </div>
                        <IoClose size={30} style={{ cursor: "pointer" }} onClick={closeSideBar} />
                    </div>
                </div>

                {/* Render Cart Items or Show Empty Message */}
                <div className="d-flex flex-column py-1 align-items-center" style={{ maxHeight: "calc(100vh - 60px)", overflowY: "auto" }}>
                    {parsedCart.length === 0 ? (
                        <div className="emptyCart d-flex flex-column py-5 align-items-center">
                            <MdOutlineRemoveShoppingCart size={70} />
                            <h2 className="fs-4 text-center mt-3">Your cart is empty</h2>
                        </div>
                    ) : (
                        parsedCart.map((item, index) => (
                            <Cart key={index} id={item.id} img={item.img} title={item.title} />

                        ))
                    )}
                </div>
                <div className="cart mx-2">
                    <button className="btn btn-dark fw-bold  mt-2 w-100 d-block">VIEW CART</button>
                    <Link to="/collection" className="text-decoration-none"><button onClick={closeSideBar} className="btn cartbtn fw-bold btn-dark mt-2 w-100 d-block">ADD TO CART</button></Link> 
                </div>
            </div>
        </div>
    );
};

export default CartBar;
