import { useEffect, useState } from "react";

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

useEffect(() => {getBook()},[])


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
            [e.target.title]: e.taret.value
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
        <section>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    placeholder="title"
                    value={form.title}
                    onChange={handleChange}
                    />
                
                <input
                    type="text"
                    name="description"
                    placeholder="description"
                    value={form.description}
                    onChange={handleChange}
                    />

                <input
                    type="text"
                    name="author"
                    placeholder="author"
                    value={form.author}
                    onChange={handleChange}
                    />

                <input
                    type="text"
                    name="genre"
                    placeholder="genre"
                    value={form.genre}
                    onChange={handleChange}
                    />

                <input
                    type="text"
                    name="price"
                    placeholder="price"
                    value={form.price}
                    onChange={handleChange}
                    />
                    <button type="submit">Add Book</button>
            </form>
            
        </section>
    )

}