import { useContext, useState } from "react";
import { SkillsContext } from "../../context/Context";

function SelectSkills() {

    const { nextQuestion, updateResponses, currentQuestion, skills, responses, previousQuestion } = useContext(SkillsContext);
    const [input, setInput] = useState([])

    function addSkill(e) {
        setInput([...input, e.target.innerText])
        console.log(input);
    }

    return (

        <div className="container pt-4">
            <div className="row">
                <div className="col-6 mx-auto text-center">
                    <h1 className="fw-bold">Select Skills for acting on <span className="text-primary"> {responses[0]}</span></h1>
                </div>
            </div>
            <div className="row">
                <div className="col-6 mx-auto text-center">
                    {skills.map(skill =>
                        <button key={skill} className="btn btn-secondary w-100 fs-2 m-2" onClick={(e) => { addSkill(e) }}>{skill}   </button>)}
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

export default SelectSkills