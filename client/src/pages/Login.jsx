

function Login() {


    return (
        <div className="container">
            <div className="row">
                <div className="col mt-4 mb-3">
                    <h1 className="text-center">Login or create an account to get started</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 col-lg-6 mt-2 mx-auto">
                    <form>
                        <div class="form-floating my-3">
                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Email address</label>
                        </div>
                        <div class="form-floating">
                            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                            <label for="floatingPassword">Password</label>
                        </div>
                        <div className="text-center">
                            <button class="btn btn-primary py-2 px-4 my-5" type="submit">Sign in</button>
                        </div>
                        <div className="text-center">
                            <p>First time here? Click here to signup!</p>                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login