import { useContext, useState } from "react";
import { SkillsContext } from "../../context/Context";

function Objective() {

    const { nextQuestion, updateResponses, currentQuestion, prompts, previousQuestion } = useContext(SkillsContext);
    const [input, setInput] = useState('')

    return (

        <div className="container pt-4">
            <div className="row mb-4">
                <div className="col-6 mx-auto text-center">
                    <h1 className="fw-bold">Take a minute to identify what your objective is in this situation</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-6 mx-auto text-center d-flex flex-column ">
                    <label htmlFor="objective" className="fw-2"> (Optional)</label>
                    <input name="objective" type="text" className="w-75 mx-auto fw-3" onChange={(e) => setInput(e.target.value)} />
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-8 mx-auto text-center">
                    <button className="btn btn-danger fs-3 fw-bold mx-2" onClick={() => { previousQuestion() }}>Back</button>
                    <button className="btn btn-success fs-3 fw-bold mx-2" onClick={() => { nextQuestion(), updateResponses(input) }}>Next</button>
                </div>
            </div>
        </div>

    )
}

export default Objective