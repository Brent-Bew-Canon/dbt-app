import { useContext, useState } from "react";
import { SkillsContext } from "../../context/Context";

function FitFacts() {

    const { nextQuestion, updateResponses, currentQuestion, responses, previousQuestion } = useContext(SkillsContext);
    const [input, setInput] = useState('')

    console.log(responses)
    return (

        <div className="container pt-4">
            <div className="row">
                <div className="col-6 mx-auto text-center">
                    <h1 className="fw-bold">Does <span className="text-primary">{responses[0]}</span> Fit The Facts?</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-6 mx-auto text-center">
                    <button className="btn w-50 fs-2 m-2 btn-primary" onClick={(e) => { setInput(e.target.innerText) }}> Yes </button>
                    <button className="btn w-50 fs-2 m-2 btn-warning text-white" onClick={(e) => { setInput(e.target.innerText) }}> No </button>
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

export default FitFacts