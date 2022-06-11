import { useEffect, useState } from "react"
import Form from '../components/Form'

export default function Index() {

  const [book, setBook] = useState(null)

  const URL = "https://rj-books-mart-backend.herokuapp.com/books"

  // index
  const getBook = async () => {
    const data = await fetch(URL).then(res => res.json())
    setBook(data)
    console.log(data)
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
    getBook()
  }

  const updateBook = async (bookId) => {
    // the rest of the function
  }

  const deleteBook = async (bookId) => {
    // the rest of the function
  }

  useEffect(() => { getBook() }, [])

  return (
    <section>
      <Form createBook={createBook} />
    </section>
  )
}