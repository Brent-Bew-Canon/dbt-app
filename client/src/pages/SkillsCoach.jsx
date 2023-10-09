import tools from '../assets/tools.png'
import Questions from '../components/Questions'
import { useState, useContext } from 'react'
import { SkillsContext } from "../context/Context";
import Emotions from '../components/coach/Emotions'
import SecondaryEmotions from '../components/coach/SecondaryEmotions';
import Prompting from '../components/coach/Prompting'
import FitFacts from '../components/coach/FitFacts';
import Effective from '../components/coach/Effective';
import Objective from '../components/coach/Objective';
import Action from '../components/coach/Action';
import SelectSkills from '../components/coach/SelectSkills';
import Results from '../components/coach/Results';


function SkillsCoach() {

    const { currentQuestion } = useContext(SkillsContext);
    const [start, setStart] = useState(false);


    function Start() {
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
                    <div className="col-sm-12 col-lg-10 text-center mx-auto mt-5" >
                        <a className="btn btn-success w-50 fs-2" onClick={() => { setStart(true) }} >
                            Start
                        </a>
                    </div>
                </div>
            </div>
        )
    }

    function render() {
        console.log(currentQuestion)

        if (currentQuestion === 0) {
            return <Emotions />
        }
        if (currentQuestion === 1) {
            return <SecondaryEmotions />
        }
        if (currentQuestion === 2) {
            return <Prompting />
        }
        if (currentQuestion === 3) {
            return <FitFacts />
        }
        if (currentQuestion === 4) {
            return <Objective />
        }
        if (currentQuestion === 5) {
            return <Effective />
        }
        if (currentQuestion === 6) {
            return <Action />
        }
        if (currentQuestion === 7) {
            return <SelectSkills />
        }
        if (currentQuestion === 8) {
            return <Results />
        }

    }

    return (start ?
        <div>
            {render()}
        </div>
        :
        <div>
            <Start />
        </div>
    )
}



export default SkillsCoach