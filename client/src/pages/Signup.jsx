import { useState, } from "react"
import { Link } from "react-router-dom";

function Signup() {
    const [formState, setFormState] = useState({});

    const formHandler = async (event) => {
        event.preventDefault();
        try {
            console.log(formState);
            // const response = await fetch(`/api/user`, {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json"
            //     },
            //     body: JSON.stringify({
            //         firstName: formState.firstName,
            //         lastName: formState.lastName,
            //         email: formState.email,
            //         password: formState.password
            //     }),
            // })
            // const result = await response.json()
            // if (result.message === 'Success') {
            //     navigate('/login')
            // }
            // console.log(result)

        } catch (error) {
            console.log(error);
        }
    }

    //handle form change and update formState
    const handleChange = event => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value
        });
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col mt-4 mb-3">
                    <h1 className="text-center">Sign Up To Get Started!</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 col-lg-6 mt-2 mx-auto">
                    <form onSubmit={formHandler}>
                        <div className="form-floating my-3">
                            <input type="text" className="form-control" id="firstName" name="firstName" placeholder="First Name..." onChange={handleChange} />
                            <label htmlFor="firstName">First Name</label>
                        </div>
                        <div className="form-floating my-3">
                            <input type="text" className="form-control" id="lastName" name="lastName" placeholder="Last Name..." onChange={handleChange} />
                            <label htmlFor="lastName">Last Name</label>
                        </div>
                        <div className="form-floating my-3">
                            <input type="email" className="form-control" id="email" name="email" placeholder="name@example.com" onChange={handleChange} />
                            <label htmlFor="email">Email address</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" className="form-control" id="password" name="password" placeholder="Password" onChange={handleChange} />
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className="text-center">
                            <button className="btn btn-primary py-2 px-4 my-5" type="submit" >Sign Up</button>
                        </div>
                        <div className="text-center">
                            <p>Already have an account? Click here to <Link to={'/'}>login!</Link> </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup