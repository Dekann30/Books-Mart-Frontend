import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Form({ createBook }) {
  const [form, setForm] = useState({
    title: '',
    description: '',
    author: '',
    genre: '',
    price: '',
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  let navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    // if (form is not filled out) {
    //   alert(user: hey you need to fill in these things.)
    // }

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
  
  // check to see the path
  const pathname = (window.location.href).toString().split('/')

  // if the path ends with 'new' then return true false otherwise
  const isNew = () => {
    return !!((pathname[4] === 'new') ? true : false)
  }

  const createForm = () => {
    return (
      <form onSubmit={handleSubmit}>
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
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Update Book</button>
      </form>
    )
  }

  return isNew() ? createForm() : updateForm()
}