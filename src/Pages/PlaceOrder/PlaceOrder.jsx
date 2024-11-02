import React, { useState } from 'react'
import image1 from '../../assets/image.png'
import './PlaceOrder.css'
import { useNavigate } from 'react-router-dom';
import backArrow from '../../assets/backArrow.png'
export default function PlaceOrder() {
    const [items, setItems] = useState(1);
    const [descountValue, setDiscountValue] = useState(48)
    const navigate = useNavigate()

    return (
        <>
            <div className="order_book_price_details ">
                <div onClick={()=>navigate(-1)} className='backArrow d-flex align-items-center gap-2 mb-3'>
                    <img src={backArrow} alt="backArrow" />
                    <span>Back</span>
                </div>
                <div className="order_price_card mb-3">
                    <h1 className='d-flex align-items-center gap-4 m-0'>
                        <span>Taufique Ali</span>
                        <span>+91-7079215509</span>
                    </h1>
                </div>
                <div className='group-card-price d-flex align-items-start justify-content-between gap-3'>
                    <div className="order_price_card order-details">
                        <h1 className='d-flex align-items-center pb-2 mb-2 gap-4 m-0'> Price Details </h1>
                        <p className='mb-2'>
                            <span>Price ({items} Items)</span>
                            <span>₹{items * 112}</span>
                        </p>
                        <p className='mb-2'>
                            <span>Delivery Charge</span>
                            <span>₹50</span>
                        </p>
                        <p className='mb-2'>
                            <span>Discount</span>
                            <span>- ₹{items * 48}</span>
                        </p>
                        <hr />
                        <h1 className='d-flex align-items-center border-0 justify-content-between pb-2 gap-4 m-0'>
                            <span> Total Payabal</span>
                            <span> ₹130</span>
                        </h1>
                    </div>
                    <div className='flex-grow-1'>
                        <div className='order_price_card flex-grow-1 mb-3'>
                            <div className='address_list d-flex align-items-center gap-4'>
                                <span>Abdur Rahman</span>
                                <span>+91-7079215509</span>
                            </div>
                            <div className='address_list d-flex gap-2'>
                                <p className='m-0'>Jaipur Engineering College, Riico Industrial Area, Kukas</p>
                                <span>302028</span>
                            </div>
                        </div>
                        <div className='order_price_card flex-grow-1'>
                            <div className='book-details-card gap-4 d-flex'>
                                <img src={image1} alt="image" />
                                <div>
                                    <h1>The Psychology of Money</h1>
                                    <p className='mb-2'>Author: Morgan Housel</p>
                                    <div className='price_section mb-1'>
                                        <p className='m-0 d-flex gap-2 align-items-center'>
                                            <span className='sell_price'>₹100</span>
                                            <span className='original_price'>₹160</span>
                                            <span className='percentage_rate'>30%</span>
                                        </p>
                                    </div>
                                    <p className='mb-2'>Publication: Millat Publication</p>
                                </div>
                            </div>
                            <div className='noOf_items mt-3 d-flex align-items-center gap-2'>
                                <button onClick={()=>setItems(prev=>prev-1)} disabled={items===1}>-</button>
                                <input value={items} onChange={()=>setItems(prev=>prev+1)} type="text" />
                                <button onClick={()=>setItems(prev=>prev+1)}>+</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex align-items-center justify-content-center mt-4'>
                <button className='place_order_btn ms-auto'>Place Order</button>
                </div>
            </div>
        </>
    )
}
