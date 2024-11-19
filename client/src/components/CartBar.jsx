import { Link } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";



const CartBar = ({ openSlide, closeSideBar }) => {
    return (
        <div className="Cartbar">
            <div
                className={`slide position-fixed bg-white`}
                style={{
                    zIndex: '999',
                    top: 0,
                    right: openSlide ? 0 : '-30%',
                    height: '100vh',
                    width: '25%',
                    transition: 'right 0.3s ease-in-out',
                }}
            >
                <div className="topBar border-bottom p-3">
                    <div className="d-flex align-items-start justify-content-between">
                        <div className="cartHead">
                            <HiOutlineShoppingCart size={25} />
                            <span className="ms-1 fw-bold">CART</span>
                        </div>
                        <IoClose size={30} style={{ cursor: 'pointer' }} onClick={closeSideBar} />
                    </div>
                </div>

                {/* <div className="emptyCart d-flex flex-column py-5 align-items-center">
                    <MdOutlineRemoveShoppingCart size={70} />
                    <h2 className="fs-4 text-center mt-3">Your cart is empty</h2>
                </div> */}

            </div>
        </div>
    );
};

export default CartBar; 