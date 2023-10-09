import { Link } from "react-router-dom"

function Profile() {

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-10 text-center mx-auto mt-5">
                    {/* Add logout functionality */}
                    <Link className="btn btn-primary w-25 fs-4" to={'/'}>Logout</Link>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-10 text-center mx-auto mt-5">
                    <h1 className="fw-bold">Skills Coach Results</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 col-lg-10 text-center mx-auto mt-5">
                    <button className="btn btn-danger w-50">
                        <h2 className="mb-2">Anger</h2>
                        <p>8/5/2023</p>
                    </button>
                </div>
                <div className="col-lg-10 text-center mx-auto mt-5">
                    <button className="btn btn-primary w-50">
                        <h2 className="mb-2">Sadness</h2>
                        <p>8/1/2023</p>
                    </button>
                </div>
                <div className="col-lg-10 text-center mx-auto mt-5">
                    <button className="btn btn-danger w-50">
                        <h2 className="mb-2">Anger</h2>
                        <p>7/25/2023</p>
                    </button>
                </div>
                <div className="col-lg-10 text-center mx-auto mt-5">
                    <button className="btn btn-dark w-50">
                        <h2 className="mb-2">Fear</h2>
                        <p>7/20/2023</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Profile