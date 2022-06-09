import Login from '../components/Login'

export default function Home() {

    return (
        <div className="home-page">
            <div className="home-text">
                <div>Book Mart</div>
                <div>Your Online solution to all books.</div>
            </div>
            <Login />
        </div>
    )
}