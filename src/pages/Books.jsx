import BookCard from '../components/BookCard'
import { useEffect } from 'react'

export default function Books({ getBooks, books }) {
  useEffect(() => { getBooks() }, [])

  return (
    <div>
      {books.map((book, idx) => 
        <BookCard 
          key={book._id} 
          idx={idx} 
          author={book.author}
          title={book.title}
          description={book.description}
          genre={book.genre}
          price={book.price}
        />
      )}
    </div>
  )
}