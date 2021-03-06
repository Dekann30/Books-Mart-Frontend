import BookCard from '../components/BookCard'
import styled from 'styled-components'

const StyledDiv = styled.div`
  background-image: url(${props => props.bg});
  background-size: cover;
  display: flex;
  background-repeat: repeat;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
`

export default function Books({ getBooks, books, setShowBook, deleteBook, booksBg}) {

  return (
    <StyledDiv bg={booksBg}>
      {books.map((book) => 
        <BookCard
          setShowBook={setShowBook}
          book={book}
          key={book._id}
          idx={book._id} 
          author={book.author}
          title={book.title}
          description={book.description}
          genre={book.genre}
          price={book.price}
          deleteBook={deleteBook}
        />
      )}
    </StyledDiv>
  )
}