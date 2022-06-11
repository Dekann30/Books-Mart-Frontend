import Header from './components/Header'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Home from './pages/Home'
import Books from './pages/Books'
import BookForm from './pages/BookForm'
import woodBg from '../src/images/woodBg.jpg'
import bookShelfBg from '../src/images/bookShelfBg.jpg'
import './styles.sass'

export default function App() {

  const [books, setBooks] = useState(null)

  const URL = "https://rj-books-mart-backend.herokuapp.com/books"

  // index
  const getBooks = async () => {
    const data = await fetch(URL).then(res => res.json())
    setBooks(data)
  }

  // create
  const createBook = async (book) => {
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(book)
    })
    getBooks()
  }

  const updateBook = async (bookId) => {
    // the rest of the function
  }

  const deleteBook = async (bookId) => {
    // the rest of the function
  }

  useEffect(() => { getBooks() }, [])

  return (
    <div className="App">
      <Header woodBg={woodBg}  />
      <Routes>
        <Route path='/' element={<Home bookShelfBg={bookShelfBg}/>} />
        <Route path='/books' element={<Books books={books} getBooks={getBooks}/>} />
        <Route path='/new' element={<BookForm createBook={createBook} />}/>
      </Routes>
      <Footer woodBg={woodBg} />
    </div>
  )
}
