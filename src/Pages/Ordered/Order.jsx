import React from 'react';
import image1 from '../../assets/image.png'
import backArrow from '../../assets/backArrow.png'
import './Order.css';
import { useNavigate } from 'react-router-dom';

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


export default function Order() {

  const navigate = useNavigate()
  return (
    <div className="order_main">
      <h1 className='mb-3' onClick={()=>navigate('/home')}> <img src={backArrow} alt="backArrow" />Order History</h1>
      {books.map(book => (
        <div className="order_cards d-flex flex-column gap-4 mb-3">
          <div key={book.id} className="d-flex align-items-start gap-4">
            <img src={book?.image} alt={book.title} style={{ width: '100px', height: 'auto' }} />
            <div className='flex-grow-1 align-items-center justify-content-between'>
              <h1>{book.title}</h1>
              <h2>₹ {book.sellPrice}/- </h2>
              <p className='m-0 d-flex gap-2 align-items-center'>
                <span className='original_price m-0'>₹{book.originalPrice}</span>
                <span className='percentage_rate'>{book.discountRate}%</span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
