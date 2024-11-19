import { Link } from "react-router-dom";
import logo from "../../public/images/Logo.webp"
const SideBar = ({ openSlide, closeSideBar }) => {
    return (
        <div className="sidebar">
            <div
                className={`slide d-flex flex-column justify-content-center align-items-start position-fixed bg-white`}
                style={{
                    zIndex: '999',
                    top: 0,
                    right: openSlide ? 0 : '-30%',
                    height: '100vh',
                    width: '25%',
                    transition: 'right 0.3s ease-in-out',
                }}
            >
                <img
                    src={logo}
                    alt="logo"
                    className="img-fluid position-absolute start-50 translate-middle-x"
                    style={{ top: '8%', width: '50%' }}
                />
                <div className="blank">&nbsp;&nbsp;&nbsp;</div>
                <ul type="none" className="border-bottom w-100 ms-0 ps-4">
                    <Link to="/login" className="text-decoration-none text-black" onClick={closeSideBar}>
                        <li className="fs-5 py-3">Login</li>
                    </Link>
                    <Link to="/register" className="text-decoration-none text-black" onClick={closeSideBar}>
                        <li className="fs-5 py-3">Register</li>
                    </Link>
                    <li className="fs-5 py-3">Wishlist</li>
                    <li className="fs-5 py-3">Check out</li>
                </ul>
                <span className="px-4 fw-semibold d-block mb-2">CURRENCY</span>
                <select
                    className="mx-4 w-75 border-none outline-none p-2 fw-semibold mb-4"
                    style={{ backgroundColor: '#f1f1f1', fontSize: '12px' }}
                    name="currency"
                >
                    <option selected value="INR">INR</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                </select>
                <span className="px-4 fw-semibold d-block mb-2">LANGUAGE</span>
                <select
                    className="mx-4 w-75 border-none outline-none p-2 fw-semibold"
                    style={{ backgroundColor: '#f1f1f1', fontSize: '12px' }}
                    name="language"
                >
                    <option selected value="english">ENGLISH</option>
                    <option value="french">FRENCH</option>
                </select>
            </div>
        </div>
    );
};

export default SideBar; 