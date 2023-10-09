import { useContext, useState } from "react";
import { SkillsContext } from "../../context/Context";

function Action() {

    const { nextQuestion, updateResponses, currentQuestion, responses, previousQuestion } = useContext(SkillsContext);
    const [input, setInput] = useState('')

    console.log(responses)
    return (

        <div className="container pt-4">
            <div className="row">
                <div className="col-6 mx-auto text-center mb-4">
                    <h1 className="fw-bold">Act on the emotion</h1>
                </div>
            </div>
            <div className="container pt-4 bg-secondary rounded w-75">
                <div className="row">
                    <div className="col-6 mx-auto ">
                        <p className="fs-3 text-white">Emotion: {responses[0]}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 mx-auto ">
                        <p className="fs-3 text-white">Secondary Emotion: {responses[1]}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 mx-auto ">
                        <p className="fs-3 text-white">Prompting Event: {responses[2]}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 mx-auto ">
                        <p className="fs-3 text-white">Objective: {responses[4]}</p>
                    </div>
                </div>
            </div>
            <div className="container pt-4 ">
                <div className="row mt-5">
                    <div className="col-8 mx-auto text-center">
                        <button className="btn btn-danger fs-3 fw-bold mx-2" onClick={() => { previousQuestion() }}>Back</button>
                        <button className="btn btn-success fs-3 fw-bold mx-2" onClick={() => { nextQuestion() }}>Next</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Action