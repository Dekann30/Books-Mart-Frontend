export default function BookCard({ idx, author, title, description, genre, price }) {
  return <div>
    {idx}
    {author}
    {title}
    {description}
    {genre}
    {price}
  </div>
}