import { useNavigate } from 'react-router-dom'

export default function BookCard({ idx, author, title, description, genre, price, setShowBook, book, deleteBook}) {

  let navigate= useNavigate()

  const handleClick = () => {
    setShowBook(book)
    navigate(`/books/${book._id}`)
  }

  const handleDelete = () => {
    deleteBook(book._id)
  }

  const handleUpdate = () => {
    setShowBook(book)
    navigate(`/books/${book._id}/update`)
  }

  // check to see the path
  const pathname = (window.location.href).toString().split('/')
  console.log(pathname)
  // if the path ends with 'new' then return true false otherwise
  const isBook = () => {
    return !!((pathname.length === 4) ? true : false)
  }
  console.log(pathname.length)
  console.log(isBook())

  const showPage = () => {
    return <div >
      <div onClick={handleClick}>
        {author}
        {title}
        {description}
        {genre}
        {price}
        </div>
      <button onClick={handleUpdate} >update</button>
      <button onClick={handleDelete} >delete</button>
    </div>
  }

  const otherPage = () => {
    return <div onClick={handleClick}>
      {author}
      {title}
      {description}
      {genre}
      {price}
    </div>
  }

  return isBook() ? showPage(): otherPage()
}