export default function Login() {
    return (
        <div className="login-container">
            <form>
                <input placeholder="UserName"></input>
                <input placeholder="Password"></input>
                <button>Log In</button>
            </form>
            <button>Create a New Account</button>
        </div>
    )
}