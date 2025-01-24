import { useEffect, useState } from 'react';
import logo from '/images/Logo.webp';
import { Link } from 'react-router-dom';
import { FiSearch } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { RiStarSmileLine } from "react-icons/ri";
import { HiOutlineShoppingCart } from "react-icons/hi";
import SideBar from './SideBar';
import CartBar from './CartBar';
import { useSelector } from 'react-redux';

const Header = () => {
    const [sideBar, setSideBar] = useState(false);
    const [cartBar, setCartBar] = useState(false);
    const [Cartcount, setCartCount] = useState(0);
    const [Wishcount, setWishCount] = useState(0);

    const cart = useSelector((state) => state.Collection.Cart);
    const wish = useSelector((state) => state.Collection.WishList);

    useEffect(() => {
        setCartCount(cart.length)
        setWishCount(wish.length)
    }, [cart,wish])

    const closeSideBar = () => {
        setSideBar(false);
        setCartBar(false);
    };

    return (
        <>
            <SideBar openSlide={sideBar} closeSideBar={closeSideBar} />
            <CartBar openSlide={cartBar} closeSideBar={closeSideBar} />
            <div
                className={`trans-bg vh-100 w-100 position-fixed top-0 start-0 ${sideBar || cartBar ? 'd-block' : 'd-none'}`}
                onClick={() => { setSideBar(false); setCartBar(false); }}
                style={{ background: 'rgba(0, 0, 0, 0.5)', zIndex: '998' }}
            ></div>
            <div className="container">
                <header className='p-3 d-flex align-items-center justify-content-between'>
                    <div className="logo">
                        <img src={logo} alt="logo" className='img-fluid' />
                    </div>
                    <nav>
                        <Link to='/' className='px-4 py-2 text-decoration-none'>Home</Link>
                        <Link to='/collection' className='px-4 py-2 text-decoration-none'>Collection</Link>
                        <Link to='/blog' className='px-4 py-2 text-decoration-none'>Blog</Link>
                        <Link to='/about' className='px-4 py-2 text-decoration-none'>About Us</Link>
                        <Link to='/contact' className='px-4 py-2 text-decoration-none'>Contact Us</Link>
                    </nav>
                    <div className='icons d-flex'>
                        {/* <FiSearch size={38} className='me-2 rounded-3 p-2 iconHover' /> */}
                        <FaRegUser size={38} className='me-2 rounded-3 p-2 iconHover' onClick={() => setSideBar(true)} />
                        <div className="wish position-relative">
                            <Link to="/wishlist" className='text-decoration-none text-black'><RiStarSmileLine size={38} className='me-2 rounded-3 p-2 iconHover' /></Link>
                            <sup className='position-absolute end-0 translate-middle rounded-circle text-white' style={{ backgroundColor: '#0a5d5d', padding: '8px 6px', top: '22%' }}>{Wishcount}</sup>
                        </div>
                        <div className="cart position-relative">
                            <HiOutlineShoppingCart size={38} className='me-2 rounded-3 p-2 iconHover' onClick={() => setCartBar(true)} />
                            <sup className='position-absolute end-0 translate-middle rounded-circle text-white' style={{ backgroundColor: '#0a5d5d', padding: '8px 6px', top: '22%' }}>{Cartcount}</sup>
                        </div>
                    </div>
                </header>
            </div>
        </>
    );
};

export default Header;
