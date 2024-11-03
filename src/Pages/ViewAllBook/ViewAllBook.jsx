import React, { useContext } from 'react'
import './ViewAllBook.css'
import { LiaAngleLeftSolid } from 'react-icons/lia';
import BookCard from '../../Component/BookCard/BookCard';
import { useLocation, useNavigate } from 'react-router-dom';
import StoreCotext from '../../Component/ContextAPI/StoreContext';
import BookDetail from '../SingleBookDeatail/BookDetail';

export default function ViewAllBook() {
    const navigate = useNavigate();
    const { state } = useLocation();
    const {  setViewAllModalShow, setSingleBookDetails } = useContext(StoreCotext);

    const bestSellers = [
        {
            id: 1,
            image: 'https://covers.openlibrary.org/b/id/7362336-L.jpg', // Example URL for Dune
            title: 'Dune Fiction',
            author: 'Frank Herbert',
            sellPrice: 100,
            originalPrice: 120,
            discountRate: '10%',
        },
        {
            id: 2,
            image: 'https://covers.openlibrary.org/b/id/7222206-L.jpg', // Example URL for The Great Gatsby
            title: 'The Great Gatsby',
            author: 'F. Scott Fitzgerald',
            sellPrice: 150,
            originalPrice: 200,
            discountRate: '25%',
        },
        {
            id: 3,
            image: 'https://covers.openlibrary.org/b/id/7221988-L.jpg', // Example URL for 1984
            title: '1984',
            author: 'George Orwell',
            sellPrice: 80,
            originalPrice: 100,
            discountRate: '20%',
        },
        {
            id: 4,
            image: 'https://covers.openlibrary.org/b/id/8222148-L.jpg', // Example URL for To Kill a Mockingbird
            title: 'To Kill a Mockingbird',
            author: 'Harper Lee',
            sellPrice: 120,
            originalPrice: 150,
            discountRate: '20%',
        },
        {
            id: 5,
            image: 'https://covers.openlibrary.org/b/id/6941523-L.jpg', // Example URL for Pride and Prejudice
            title: 'Pride and Prejudice',
            author: 'Jane Austen',
            sellPrice: 90,
            originalPrice: 110,
            discountRate: '18%',
        },
        {
            id: 6,
            image: 'https://covers.openlibrary.org/b/id/7670716-L.jpg', // Example URL for The Catcher in the Rye
            title: 'The Catcher in the Rye',
            author: 'J.D. Salinger',
            sellPrice: 140,
            originalPrice: 180,
            discountRate: '22%',
        },
        {
            id: 7,
            image: 'https://covers.openlibrary.org/b/id/8230816-L.jpg', // Example URL for Brave New World
            title: 'Brave New World',
            author: 'Aldous Huxley',
            sellPrice: 110,
            originalPrice: 130,
            discountRate: '15%',
        },
        {
            id: 8,
            image: 'https://covers.openlibrary.org/b/id/7362250-L.jpg', // Example URL for The Hobbit
            title: 'The Hobbit',
            author: 'J.R.R. Tolkien',
            sellPrice: 130,
            originalPrice: 160,
            discountRate: '18%',
        },
        {
            id: 9,
            image: 'https://covers.openlibrary.org/b/id/8242227-L.jpg', // Example URL for Moby Dick
            title: 'Moby Dick',
            author: 'Herman Melville',
            sellPrice: 115,
            originalPrice: 145,
            discountRate: '20%',
        },
        {
            id: 10,
            image: 'https://covers.openlibrary.org/b/id/8363294-L.jpg', // Example URL for War and Peace
            title: 'War and Peace',
            author: 'Leo Tolstoy',
            sellPrice: 200,
            originalPrice: 250,
            discountRate: '20%',
        },
    ];

    return (
        <>
        <BookDetail/>
            <div className='px-2 view_all_container'>
                <h1 className='category_book_title' onClick={()=>navigate('/home')}><LiaAngleLeftSolid fontSize={25}/> {state?.title}</h1>
                <div className="view_allcategory d-flex gap-2 flex-wrap py-2 justify-content-center justify-content-sm-start align-items-center">
                    <BookCard books={bestSellers} />
                </div>
            </div>
        </>
    )
}
