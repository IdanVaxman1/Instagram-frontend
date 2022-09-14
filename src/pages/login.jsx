
export const Login = () => {

    return (
        <section className="login-container">
            <section className="login-card">
                <div className="login-logo"><h2>Instgram</h2></div>
                <div className="login-input">
                    <div>
                        <input type='text' placeholder="username or email"></input>
                    </div>
                    <div>
                        <input type='password' placeholder="Password"></input>
                    </div>
                    <div className="login-btn">
                        <button>Log In</button>
                    </div>
                </div>
            </section>
            <section className="signup-card">
                    <p>Don't have an account?</p>
                    <a href="">Sign up</a>
            </section>
        </section>
    )
}