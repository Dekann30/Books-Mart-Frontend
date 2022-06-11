import { useNavigate } from 'react-router-dom'

export default function BookCard({ idx, author, title, description, genre, price, setShowBook, book, deleteBook}) {

  let navigate= useNavigate()

  const handleClick = () => {
    setShowBook(book)
    navigate(`/books/${book._id}`)
  }

  const handleDelete = (e) => {
    deleteBook(book._id)
  }

  return <div >
    <div onClick={handleClick}>
      {author}
      {title}
      {description}
      {genre}
      {price}
      </div>
    <button>update</button>
    <button onClick={handleDelete} >delete</button>
  </div>
}