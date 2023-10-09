import Test from './Test'
import { useContext } from "react";
import { SkillsContext } from "../context/Context";

function Questions({ type, question, answers }) {

    const { nextQuestion, updateResponses, currentQuestion, prompts } = useContext(SkillsContext);

    return (type === 'button' ?
        <div className="container pt-4">
            <div className="row">
                <div className="col-6 mx-auto text-center">
                    <h1 className="fw-bold">{prompts[currentQuestion].question}</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-6 mx-auto text-center">
                    <h2 className="fw-bold">{type}</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-6 mx-auto text-center">
                    {Test.emotions.map(emote =>
                        <a className="btn btn-danger w-50 fs-2 m-2" onClick={(e) => { nextQuestion(), updateResponses(e.target.innerText) }}>
                            {emote}
                        </a>)}
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