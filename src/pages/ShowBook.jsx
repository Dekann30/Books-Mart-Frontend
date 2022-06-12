import BookCard from "../components/BookCard"
export default function ShowBook({showBook}) {


  return(
    <BookCard
      key={showBook._id}
      author={showBook.author}
      title={showBook.title}
      description={showBook.description}
      genre={showBook.genre}
      price={showBook.price}
    />
  )
}