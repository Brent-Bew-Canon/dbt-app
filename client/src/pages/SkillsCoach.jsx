import tools from '../assets/tools.png'

function SkillsCoach() {

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center mx-auto mt-5">
                    <h1 className="fw-bold">Skills Coach</h1>
                </div>
                <div className="col-lg-4 text-center mx-auto mt-5">
                    <img src={tools} alt="" className='w-50' />
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 col-lg-10 text-center mx-auto mt-5">
                    <button className="btn btn-success w-50">
                        <h2 className="mb-2">Start</h2>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SkillsCoach