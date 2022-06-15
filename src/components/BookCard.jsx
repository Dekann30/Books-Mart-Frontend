import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledCard = styled.div`
  background: rgba(137, 96, 68, 0.9);
  border-radius: 20%;
  border: 3px solid black;
  margin: 10px;
  padding: 25px;
  width: 300px;
  height: auto;
  display: flex;
  text-align: center;
  justify-content: space-around;
  flex-direction: column;
  flex-wrap: wrap;
  .book-container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    h1, h2 {
      word-break: break-all;
      flex-wrap: wrap;
    }
  }
`

const ShowDiv = styled.div`
  background-color: #E0D8B0;
  color: white;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  word-wrap: break-word;

  .details-container {
    background-color: #FCFFE7;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 33% 33% 33%;
    word-wrap: break-word;
    grid-column-gap: 0px;
    grid-row-gap: 10px;
  }
  .item-detail {
    padding: 5px;
    text-align: center;
    background-color: #FCFFE7;
    border-radius: 15%;
    align-items: center;
    justify-content: center;
  }
  p {
    font-size: 20px;
    color: #dea057;
  }
  #title {
    color: #ce9461;
    font-size: 6rem;
    margin-bottom: 40px;
    margin-top: 15px;
  }
  h1 {
    font-weight: 400;
    font-style: normal;
    font-size: 1rem;
    line-height: 1.25;
    margin: 30px;
  }
  #description {
    grid-column: 1 / 4;
    grid-row: 1;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  button {
    width: 50%;
  }
`

export default function BookCard({
  idx,
  author,
  title,
  description,
  genre,
  price,
  setShowBook,
  book,
  deleteBook,
}) {
  let navigate = useNavigate();

  const handleClick = () => {
    setShowBook(book);
    navigate(`/books/${book._id}`);
  };

  const handleDelete = () => {
    deleteBook(book._id);
  };

  const handleUpdate = () => {
    setShowBook(book);
    navigate(`/books/${book._id}/update`);
  };

  // check to see the path
  const pathname = window.location.href.toString().split("/");
  console.log(pathname);
  // if the path ends with 'new' then return true false otherwise
  const isBook = () => {
    return !!(pathname.length === 4 ? true : false);
  };
  console.log(pathname.length);
  console.log(isBook());

  const allBooks = () => {
    return (
      <StyledCard>
        <div className="book-container" onClick={handleClick}>
          <h1>{title}</h1>
          <h2>{author}</h2>
          <h2>{genre}</h2>
          <h2>{price}</h2>
        </div>
        <ButtonContainer>
          <button onClick={handleUpdate}>update</button>
          <button onClick={handleDelete}>delete</button>
        </ButtonContainer>
      </StyledCard>
    );
  };

  const showPage = () => {
    return (
      <ShowDiv onClick={handleClick}>
        <h1 className="item-detail" id="title">
          {title}
        </h1>
        <div className="details-container">
          <div className="item-detail" id="author">
            <p>{author}</p>
          </div>
          <div className="item-detail" id="genre">
            <p>{genre}</p>
          </div>
          <div className="item-detail" id="description">
            <p>{description}</p>
          </div>
          <div className="item-detail" id="price">
            <p>${price}</p>
          </div>
        </div>
      </ShowDiv>
    );
  };

  return isBook() ? allBooks() : showPage();
}
