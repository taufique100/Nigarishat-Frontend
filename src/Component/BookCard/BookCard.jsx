import React, { useContext } from 'react'
import imageNotAvaible from '../../assets/imageNotAvailable.png'
import './BookCard.css'
import StoreCotext from '../ContextAPI/StoreContext'

export default function BookCard({books}) {
    const {  setViewAllModalShow, setSingleBookDetails } = useContext(StoreCotext)
    
    const handleShowBookDetails=(book)=>{
        setViewAllModalShow(true)
        setSingleBookDetails(book)
        // console.log('bookDetails', book)

    }

  return (
    <>
                {books?.map(book => (
                    <div key={book.id} onClick={()=>handleShowBookDetails(book)} className="book_wapper">
                        <img src={book.image || imageNotAvaible} alt={book.title} />
                        <p className='book_title'>{book.title}</p>
                        <p>{book.author}</p>
                        <div className='price_section'>
                            <p className='m-0 d-flex gap-2 align-items-center'>
                                <span className='sell_price'>₹{book.sellPrice}</span>
                                <span className='original_price'>₹{book.originalPrice}</span>
                                <span className='percentage_rate'>{book.discountRate}</span>
                            </p>
                        </div>
                    </div>
                ))}
         {/* <div className='card_wrapper py-2 d-flex gap-2'>
            </div> */}
    </>
  )
}
