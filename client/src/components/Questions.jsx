import { useContext } from "react";
import { SkillsContext } from "../context/Context";

function Questions() {

    const { nextQuestion, updateResponses, currentQuestion, prompts } = useContext(SkillsContext);

    return (prompts[currentQuestion].type === 'button' ?

        <div className="container pt-4">
            <div className="row">
                <div className="col-6 mx-auto text-center">
                    <h1 className="fw-bold">{prompts[currentQuestion].question}</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-6 mx-auto text-center">
                    <h2 className="fw-bold">{prompts[currentQuestion].type}</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-6 mx-auto text-center">
                    {prompts[currentQuestion].options.map(emote =>
                        <button key={emote.emotion} className="btn w-50 fs-2 m-2" style={{ backgroundColor: emote.color }} onClick={(e) => { updateResponses(e.target.innerText) }}>
                            {emote.emotion}
                        </button>)}
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-8 mx-auto text-center">
                    <button className="btn btn-success fs-3 fw-bold" onClick={nextQuestion}>Next</button>
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

export default Questions