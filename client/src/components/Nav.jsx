import { Link } from "react-router-dom"
import { useEffect } from "react"
import Auth from '../utils/auth'

function Nav() {

    return (!Auth.loggedIn() ?
        <nav>
            <div className="container-fluid px-0">
                <div className="row">
                    <div className="col d-inline-flex text-center ">
                        <div className="flex-grow-1 btn btn-secondary rounded-0">
                            <Link to="/" className="link"><p className="pt-3 fs-2">Skills Coach</p></Link>
                        </div>
                        <div className="flex-grow-1 btn btn-light rounded-0">
                            <Link to="/" className="link"><p className="pt-3 fs-2">Profile</p></Link>
                        </div>
                        <div className="flex-grow-1 btn btn-secondary rounded-0">
                            <Link to="/" className="link"><p className="pt-3 fs-2">Exercise</p></Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        :
        <nav>
            <div className="container-fluid px-0">
                <div className="row">
                    <div className="col d-inline-flex text-center ">
                        <div className="flex-grow-1 btn btn-secondary rounded-0">
                            <Link to="/coach" className="link"><p className="pt-3 fs-2">Skills Coach</p></Link>
                        </div>
                        <div className="flex-grow-1 btn btn-light rounded-0">
                            <Link to="/profile" className="link"><p className="pt-3 fs-2">Profile</p></Link>
                        </div>
                        <div className="flex-grow-1 btn btn-secondary rounded-0">
                            <Link to="/profile" className="link"><p className="pt-3 fs-2">Exercise</p></Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Nav