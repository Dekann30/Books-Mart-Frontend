import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
import styled from 'styled-components'
import woodBg from '../images/woodBg.jpg'
import blankBookBg from '../images/blankBookBg.png'

const StyledForm = styled.form`
  background: #664e44;
  background-image: url(${blankBookBg}), url(${woodBg});
  background-size: 103%;
  background-position: top center;
  height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
    h2{
      margin-top: 1%;
      color: #664e44
    }
`

const StyledContainer = styled.div`
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0% 30%;
  padding: 0% 10%;
    input{
      width: 120%;
      margin: 5%;
      padding: 5%;
    }

    button{
      padding: 7%;
      background-color: #664e44;
      color: white;
    }
`


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
    if (form.price < 0) {
      e.preventDefault()
      alert("Price cannot be lower than 0!")
    } else {
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
       <StyledForm onSubmit={handleCreateSubmit}>
         <h2>Create A New Masterpiece</h2>
         <StyledContainer>
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
         </StyledContainer>
        </StyledForm>
    )
  }

  const updateForm = () => {
    return (
      <StyledForm onSubmit={handleUpdateSubmit}>
        <h2>Update Your Masterpiece</h2>
        <StyledContainer>
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
        </StyledContainer>
      </StyledForm>
    )
  }

  return isNew() ? createForm() : updateForm()
}