import React from 'react'
import Footer from '../components/Footer'
import { useDispatch, useSelector } from 'react-redux';
import { RiDeleteBin5Line } from "react-icons/ri";
import { TiMinusOutline, TiPlusOutline } from 'react-icons/ti';
import { removeProductFromCart, updateProductQuantity } from '../redux/slice/CollectionSlice';


const CartPage = () => {

  const dispatch = useDispatch()
  const cart = useSelector((state) => state.Collection.Cart);

  // Safely parse cart data
  const parsedCart = cart
    ? cart.map(item => JSON.parse(item)).flat()
    : [];


  const handleinc = (id, quantity) => {
    console.log(quantity);
    dispatch(updateProductQuantity({ id: id, quantity: quantity + 1 }))
  }
  const handledic = (id, quantity) => {
    if (quantity > 1) {
      dispatch(updateProductQuantity({ id: id, quantity: quantity - 1 }))
    } else {
      dispatch(removeProductFromCart(id));
      dispatch(updateProductQuantity({ id: id, quantity: 0 }))
    }
  }

  return (
    <>
      <div className='wishlist py-5 border-bottom'>
        <div className="container">
          <h2 className='text-center fw-bolder display-5 mt-5 mb-5'>YOUR SHOPPING CART</h2>

          <div className="row align-items-center justify-content-between">
            <div className="col-9">
              <div className="cartTable">
                <div className="row">
                  <div className="col-md-5">Product</div>
                  <div className="col-md-2" >Price</div>
                  <div className="col-md-2">Quantity</div>
                  <div className="col-md-1 p-0">Subtotal</div>
                  <div className="col-md-1 p-0">Remove</div>
                </div>
                {parsedCart.map((item, index) => (
                  <div key={index} className="row align-items-center my-3">
                    <div className="col-md-5 p-0">
                      <img src={item.img} alt={item.title} className='img-fluid' style={{ width: '120px' }} />
                      <span className='mx-3'>{item.title}</span>
                    </div>
                    <div className="col-md-2 ">
                      <span>{item.price}</span>
                    </div>
                    <div className="col-md-2 d-flex align-items-center">
                      <div className="dic" onClick={() => handledic(item.id, item.quantity)}>
                        <TiMinusOutline style={{ cursor: 'pointer' }} size={20} />
                      </div>
                      <span className='mx-2'>{item.quantity}</span>
                      <div className="inc" onClick={() => handleinc(item.id, item.quantity)}>
                        <TiPlusOutline style={{ cursor: 'pointer' }} size={20} />
                      </div>
                    </div>
                    <div className="col-md-1 ">
                      <span>{item.price * item.quantity}</span>
                    </div>
                    <div className="col-md-2 ">
                      <span onClick={() => dispatch(removeProductFromCart(item.id))}><RiDeleteBin5Line /></span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default CartPage
