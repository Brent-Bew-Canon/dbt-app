import { useContext, useState } from "react";
import { SkillsContext } from "../../context/Context";

function Prompting() {

    const { nextQuestion, updateResponses, currentQuestion, promptingEvents, previousQuestion } = useContext(SkillsContext);
    const [input, setInput] = useState('')

    return (

        <div className="container pt-4">
            <div className="row">
                <div className="col-6 mx-auto text-center">
                    <h1 className="fw-bold">Prompting</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-6 mx-auto text-center">
                    {promptingEvents.map(prompt =>
                        <button key={prompt} className="btn btn-secondary w-100 fs-2 m-2" onClick={(e) => { setInput(e.target.innerText) }}>
                            {prompt}
                        </button>)}
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

export default Prompting