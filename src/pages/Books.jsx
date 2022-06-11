import BookCard from '../components/BookCard'

export default function Index({ books }) {

  return (
    <div>
      {books.map((book, idx) => {
        <BookCard key={book._id} idx={idx} />
      })}
    </div>
  )
}