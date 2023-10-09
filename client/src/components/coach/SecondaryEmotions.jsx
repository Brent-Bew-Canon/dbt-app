import { useContext, useState } from "react";
import { SkillsContext } from "../../context/Context";

function SecondaryEmotions() {

    const { nextQuestion, updateResponses, currentQuestion, prompts, previousQuestion } = useContext(SkillsContext);
    const [input, setInput] = useState('')

    return (prompts[currentQuestion].type === 'button' ?

        <div className="container pt-4">
            <div className="row">
                <div className="col-6 mx-auto text-center">
                    <h1 className="fw-bold">{prompts[currentQuestion].question}</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-6 mx-auto text-center">
                    {prompts[currentQuestion].options.map(emote =>
                        <button key={emote.emotion} className="btn w-50 fs-2 m-2" style={{ backgroundColor: emote.color }} onClick={(e) => { setInput(e.target.innerText) }}>
                            {emote.emotion}
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
        :
        <div className="container pt-4">
            <div className="row">
                <div className="col-6 mx-auto text-center">
                    <h1 className="fw-bold">{question}</h1>
                </div>
                <div className="col-6 mx-auto text-center">
                    <h2 className="fw-bold">{type}</h2>
                </div>
            </div>
        </div>
    )
}

export default SecondaryEmotions