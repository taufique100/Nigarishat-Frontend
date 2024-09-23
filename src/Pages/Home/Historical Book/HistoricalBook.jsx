import React from 'react'
import BookCard from '../../../Component/BookCard/BookCard';
import './HistoricalBook.css'
import { useNavigate } from 'react-router-dom';

export default function HistoricalBook() {
    const navigate = useNavigate()
    const mixedBooks = [
        {
            id: 1,
            image: 'https://covers.openlibrary.org/b/id/7362336-L.jpg', // Dune
            title: 'Dune Fiction',
            author: 'Frank Herbert',
            sellPrice: 100,
            originalPrice: 120,
            discountRate: '10%',
        },
        {
            id: 2,
            image: 'https://covers.openlibrary.org/b/id/11191974-L.jpg', // آزادی کی جنگ
            title: 'آزادی کی جنگ',
            author: 'اقبال حسین',
            sellPrice: 400,
            originalPrice: 450,
            discountRate: '11%',
        },
        {
            id: 3,
            image: 'https://covers.openlibrary.org/b/id/7222206-L.jpg', // The Great Gatsby
            title: 'The Great Gatsby',
            author: 'F. Scott Fitzgerald',
            sellPrice: 150,
            originalPrice: 200,
            discountRate: '25%',
        },
        {
            id: 4,
            image: 'https://covers.openlibrary.org/b/id/10073362-L.jpg', // تاریخِ ہند
            title: 'تاریخِ ہند',
            author: 'رومی سکندر',
            sellPrice: 300,
            originalPrice: 350,
            discountRate: '14%',
        },
        {
            id: 5,
            image: 'https://covers.openlibrary.org/b/id/7221988-L.jpg', // 1984
            title: '1984',
            author: 'George Orwell',
            sellPrice: 80,
            originalPrice: 100,
            discountRate: '20%',
        },
        {
            id: 6,
            image: 'https://www.rekhta.org/BookCover/234x350/99c3c7a6ccce6796a9e7460f9e63f1bb.jpg', // ہندوستان کی تاریخ
            title: 'ہندوستان کی تاریخ',
            author: 'عبدالسلام',
            sellPrice: 250,
            originalPrice: 300,
            discountRate: '17%',
        },
        {
            id: 7,
            image: 'https://covers.openlibrary.org/b/id/8222148-L.jpg', // To Kill a Mockingbird
            title: 'To Kill a Mockingbird',
            author: 'Harper Lee',
            sellPrice: 120,
            originalPrice: 150,
            discountRate: '20%',
        },
        {
            id: 8,
            image: 'https://www.rekhta.org/BookCover/234x350/c1e8ff6e92f6e88f14f0db0f54b5e450.jpg', // مغلیہ سلطنت
            title: 'مغلیہ سلطنت',
            author: 'اسلم فاروقی',
            sellPrice: 500,
            originalPrice: 600,
            discountRate: '16%',
        },
        {
            id: 9,
            image: 'https://covers.openlibrary.org/b/id/6941523-L.jpg', // Pride and Prejudice
            title: 'Pride and Prejudice',
            author: 'Jane Austen',
            sellPrice: 90,
            originalPrice: 110,
            discountRate: '18%',
        },
        {
            id: 10,
            image: 'https://www.rekhta.org/BookCover/234x350/fe8436be19e646ada7ad2c97e3a2f4d8.jpg', // تاریخِ پاکستان و بھارت
            title: 'تاریخِ پاکستان و بھارت',
            author: 'فاطمہ طاہر',
            sellPrice: 350,
            originalPrice: 400,
            discountRate: '12%',
        },
        {
            id: 11,
            image: 'https://covers.openlibrary.org/b/id/7670716-L.jpg', // The Catcher in the Rye
            title: 'The Catcher in the Rye',
            author: 'J.D. Salinger',
            sellPrice: 140,
            originalPrice: 180,
            discountRate: '22%',
        },
        {
            id: 12,
            image: 'https://covers.openlibrary.org/b/id/8230816-L.jpg', // Brave New World
            title: 'Brave New World',
            author: 'Aldous Huxley',
            sellPrice: 110,
            originalPrice: 130,
            discountRate: '15%',
        },
        {
            id: 13,
            image: 'https://covers.openlibrary.org/b/id/7362250-L.jpg', // The Hobbit
            title: 'The Hobbit',
            author: 'J.R.R. Tolkien',
            sellPrice: 130,
            originalPrice: 160,
            discountRate: '18%',
        },
        {
            id: 14,
            image: 'https://covers.openlibrary.org/b/id/8242227-L.jpg', // Moby Dick
            title: 'Moby Dick',
            author: 'Herman Melville',
            sellPrice: 115,
            originalPrice: 145,
            discountRate: '20%',
        },
        {
            id: 15,
            image: 'https://covers.openlibrary.org/b/id/8363294-L.jpg', // War and Peace
            title: 'War and Peace',
            author: 'Leo Tolstoy',
            sellPrice: 200,
            originalPrice: 250,
            discountRate: '20%',
        },
    ];

    const handleRedirectToViewAll = () => {
        navigate('/home/view-all', {
            state: {
                title: 'Histocial Books'
            }
        })
    }

    return (
        <>
            <div className="books_container">
                <div className='d-flex align-items-center justify-content-between'>
                    <h1>Historical Book</h1>
                    <span onClick={handleRedirectToViewAll}>View All</span>
                </div>
                <div className='card_wrapper py-2 px-2 d-flex gap-2'>
                    <BookCard books={mixedBooks} />
                </div>
            </div>
        </>
    )
}
