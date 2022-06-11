import BookCard from '../components/BookCard'
import { useEffect } from 'react'

export default function Books({ getBooks, books, setShowBook, deleteBook }) {
  useEffect(() => { getBooks() }, [])

  return (
    <div>
      {books.map((book) => 
        <BookCard
          setShowBook={setShowBook}
          book={book}
          key={book._id}
          idx={book._id} 
          author={book.author}
          title={book.title}
          description={book.description}
          genre={book.genre}
          price={book.price}
          deleteBook={deleteBook}
        />
      )}
    </div>
  )
}