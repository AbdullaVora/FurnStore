import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import apiInstance from '../api/instance';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const [input, setInput] = useState({});
    const navigate = useNavigate();

    const handleInput = (e) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        registerUser();
    };

    const registerUser = async () => {
        try {
            const response = await apiInstance.post('/register', input);
            console.log(response.status);

            if (response.status === 200) {
                // Show success toast
                toast.success('Account created successfully!', { autoClose: 2000 });
                navigate('/login');
            }
        } catch (error) {
            // Show error toast
            toast.error('Registration failed. Please try again.', { autoClose: 2000 });
        }
    };


    return (
        <>
            <h2 className='text-center fw-bolder display-5 mt-5 mb-5'>CREATE ACCOUNT</h2>
            <div className="d-flex flex-column vh-100 align-items-center justify-contant-center py-5">
                <div className="login" style={{ width: "500px" }}>
                    {/* <h4 className='fw-bold mb-2'>SIGN IN</h4>
                    <span className='d-block' style={{ fontSize: '13px' }}>Insert Your Account Information: </span> */}
                    <form onSubmit={handleSubmit} >
                        <input type="text" name="name" id="name" onChange={handleInput} className='form-control mt-3 py-3' placeholder='ENTER YOUR NAME' />
                        <input type="text" name="email" id="email" onChange={handleInput} className='form-control mt-3 py-3' placeholder='ENTER YOUR EMAIL' />
                        <input type="password" name="password" onChange={handleInput} id="" className='form-control mt-3 py-3 mb-2' placeholder='ENTER YOUR PASSWORD' />
                        <span style={{ fontSize: '13px', opacity: '80%' }}>If you have an account, please <Link to='/login' className='text-decoration-none text-black'><span className='greenHover fw-bold'>Login Here.</span></Link></span>
                        <button className='d-block w-100 mt-2 py-3 border-0 fw-semibold text-white rounded-1' type='submit'>Register</button>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default Register
