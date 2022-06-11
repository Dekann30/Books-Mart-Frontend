import BookCard from '../components/BookCard'

export default function Books({ getBooks, books, setShowBook, deleteBook }) {

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