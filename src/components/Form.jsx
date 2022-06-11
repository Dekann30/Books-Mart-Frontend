import { useState } from "react"

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

  const handleSubmit = (e) => {
    e.preventDefault()
    createBook(form)
    setForm({
      title: '',
      description: '',
      author: '',
      genre: '',
      price: '',
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="title"
        onChange={handleChange}
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
      />

      <input
        type="text"
        name="genre"
        placeholder="genre"
        onChange={handleChange}
      />

      <input
        type="number"
        name="price"
        placeholder="price"
        onChange={handleChange}
      />
      <button type="submit">Add Book</button>
    </form>
  )
}