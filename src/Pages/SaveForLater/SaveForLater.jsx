import React from 'react';
import image1 from '../../assets/image.png'
import backArrow from '../../assets/backArrow.png'
import { Link, useNavigate } from 'react-router-dom';
import './SaveForLater.css'
import '../Ordered/Order.css';
import { IoClose } from "react-icons/io5";



const books = [
  {
    id: 1,
    image: 'https://covers.openlibrary.org/b/id/7362336-L.jpg', // Example URL for Dune
    title: 'Dune Fiction',
    author: 'Frank Herbert',
    sellPrice: 100,
    originalPrice: 120,
    discountRate: '10',
  },
  {
    id: 2,
    image: 'https://covers.openlibrary.org/b/id/7222206-L.jpg', // Example URL for The Great Gatsby
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    sellPrice: 150,
    originalPrice: 200,
    discountRate: '25',
  },
  {
    id: 3,
    image: 'https://covers.openlibrary.org/b/id/7221988-L.jpg', // Example URL for 1984
    title: '1984',
    author: 'George Orwell',
    sellPrice: 80,
    originalPrice: 100,
    discountRate: '20',
  },
  {
    id: 4,
    image: 'https://covers.openlibrary.org/b/id/8222148-L.jpg', // Example URL for To Kill a Mockingbird
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    sellPrice: 120,
    originalPrice: 150,
    discountRate: '20',
  },
  {
    id: 5,
    image: 'https://covers.openlibrary.org/b/id/6941523-L.jpg', // Example URL for Pride and Prejudice
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    sellPrice: 90,
    originalPrice: 110,
    discountRate: '18',
  },
  {
    id: 6,
    image: 'https://covers.openlibrary.org/b/id/7670716-L.jpg', // Example URL for The Catcher in the Rye
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    sellPrice: 140,
    originalPrice: 180,
    discountRate: '22',
  },
  {
    id: 7,
    image: 'https://covers.openlibrary.org/b/id/8230816-L.jpg', // Example URL for Brave New World
    title: 'Brave New World',
    author: 'Aldous Huxley',
    sellPrice: 110,
    originalPrice: 130,
    discountRate: '15',
  },
  {
    id: 8,
    image: 'https://covers.openlibrary.org/b/id/7362250-L.jpg', // Example URL for The Hobbit
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    sellPrice: 130,
    originalPrice: 160,
    discountRate: '18',
  },
  {
    id: 9,
    image: 'https://covers.openlibrary.org/b/id/8242227-L.jpg', // Example URL for Moby Dick
    title: 'Moby Dick',
    author: 'Herman Melville',
    sellPrice: 115,
    originalPrice: 145,
    discountRate: '20',
  },
  {
    id: 10,
    image: 'https://covers.openlibrary.org/b/id/8363294-L.jpg', // Example URL for War and Peace
    title: 'War and Peace',
    author: 'Leo Tolstoy',
    sellPrice: 200,
    originalPrice: 250,
    discountRate: '20',
  },
];

const favoriteItems = [
  {
    id: 1,
    name: "MAESTRO Home & Office",
    image: "https://media.istockphoto.com/id/949118068/photo/books.webp?a=1&b=1&s=612x612&w=0&k=20&c=lxb-mHWs3AkeKR-J7ZwD8a5Mo9vmsq3uYPMaJbIUoCI=",
    price: 100,
    discount: 10, // percentage
  },
  {
    id: 2,
    name: "ErgoComfort Chair",
    image: "https://plus.unsplash.com/premium_photo-1669652639337-c513cc42ead6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D",
    price: 150,
    discount: 15, // percentage
  },
  {
    id: 3,
    name: "FlexPro Study Chair",
    image: "https://images.unsplash.com/photo-1559563458-527698bf5295?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YWNjZXNzb3JpZXN8ZW58MHx8MHx8fDA%3D",
    price: 200,
    discount: 20, // percentage
  },
];



export default function SaveForLater() {
  const navigate = useNavigate()
  return (
    <div className="order_main favorite_main">
      <h1 className='mb-3' onClick={() => navigate('/home')}> <img src={backArrow} alt="backArrow" />Wish List</h1>
      <div className='d-flex flex-wrap align-items-center justify-content-md-start justify-content-center'>
        {favoriteItems.map((item) => (
          <div
            key={item.id}
            className="favorite_card d-flex flex-column align-items-center justify-content-between px-3 py-2 gap-3">
            <div className="text-end w-100">
              <IoClose fontSize={20} />
            </div>
            <img src={item.image} alt={item.name} />
            <div className="w-100 mb-2 items-name">
              <Link className="m-0">{item.name}</Link>
              <p className="pricepara m-0 d-flex gap-2 align-items-center">
                <span>Price:</span>
                <span className="original_price m-0">₹{item.price}</span>
                <span className="percentage_rate">{item.discount}%</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}