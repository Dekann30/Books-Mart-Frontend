import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"

export default function Form({ createBook, showBook, updateBook }) {
  const [form, setForm] = useState({
    title: '',
    description: '',
    author: '',
    genre: '',
    price: '',
  })

  const [updateFormState, setUpdateFormState] = useState({
    title: showBook.title,
    description: showBook.description,
    author: showBook.author,
    genre: showBook.genre,
    price: showBook.price,
  })

  const {id} = useParams()
  console.log(id)

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleUpdateChange = (e) => {
    setUpdateFormState({
      ...updateFormState,
      [e.target.name]: e.target.value
    })
  }

  // useEffect(() => {
  //   setUpdateFormState({
  //     title: showBook.title,
  //     description: showBook.description,
  //     author: showBook.author,
  //     genre: showBook.genre,
  //     price: showBook.price,
  //   })
  // }, [])

  let navigate = useNavigate()

  const handleCreateSubmit = (e) => {
    e.preventDefault()
    createBook(form)
    setForm({
      title: '',
      description: '',
      author: '',
      genre: '',
      price: '',
    })
    navigate('/books')
  }

  const handleUpdateSubmit = (e) => {
    e.preventDefault()
    updateBook(updateFormState, id)
    navigate('/books')
  }

  // check to see the path
  const pathname = (window.location.href).toString().split('/')

  // if the path ends with 'new' then return true false otherwise
  const isNew = () => {
    return !!((pathname[4] === 'new') ? true : false)
  }

  const createForm = () => {
    return (
      <form onSubmit={handleCreateSubmit}>
        <input
          type="text"
          name="title"
          placeholder="title"
          onChange={handleChange}
          required={true}
        />
  
        <input
          type="text"
          name="description"
          placeholder="description"
          onChange={handleChange}
        />
  
        <input
          type="text"
          name="author"
          placeholder="author"
          onChange={handleChange}
          required={true}
        />
  
        <input
          type="text"
          name="genre"
          placeholder="genre"
          onChange={handleChange}
          required={true}
        />
  
        <input
          type="number"
          name="price"
          placeholder="price"
          onChange={handleChange}
          required={true}
          step={0.01}
        />
        <button type="submit">Add Book</button>
      </form>
    )
  }

  const updateForm = () => {
    return (
      <form onSubmit={handleUpdateSubmit}>
        <input
          type="text"
          name="title"
          placeholder="title"
          onChange={handleUpdateChange}
          required={true}
        />
  
        <input
          type="text"
          name="description"
          placeholder="description"
          onChange={handleUpdateChange}
        />
  
        <input
          type="text"
          name="author"
          placeholder="author"
          onChange={handleUpdateChange}
          required={true}
        />
  
        <input
          type="text"
          name="genre"
          placeholder="genre"
          onChange={handleUpdateChange}
          required={true}
        />
  
        <input
          type="number"
          name="price"
          placeholder="price"
          onChange={handleUpdateChange}
          required={true}
          step={0.01}
        />
        <button type="submit">Update Book</button>
      </form>
    )
  }

  return isNew() ? createForm() : updateForm()
}