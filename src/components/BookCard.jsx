import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const ShowDiv = styled.div `
  background-color: #E0D8B0;
  color: white;
  display: flex;
  flex-direction: column;
  width: 100%;

    .item-detail {
      margin: 25px;
      padding: 5px;
      text-align: center;
      background-color: #FCFFE7;
      border-radius: 15%;
      align-items: center;
      justify-content: center;
    }
    p {
      font-size: 20px;
      color: #DEA057;
    }
    #title {
      color: #CE9461;
      font-size: 6rem;
    }
    h1 {
    font-weight: 400;
    font-style: normal;
    font-size: 1rem;
    line-height: 1.25;
    word-wrap: break-word;
    }
`


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

  const allBooks = () => {
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

  const showPage = () => {
    return <ShowDiv onClick={handleClick}>
      <h1 className="item-detail" id="title">{title}</h1>
      <div className="item-detail" id="author"><p>{author}</p></div>
      <div className="item-detail" id="description"><p>{description}</p></div>
      <div className="item-detail" id="genre"><p>{genre}</p></div>
      <div className="item-detail" id="price"><p>${price}</p></div>
    </ShowDiv>
  }

  return isBook() ? allBooks(): showPage()
}