import tools from '../assets/tools.png'
import test from '../components/Questions'
import { useState } from 'react'

function SkillsCoach() {

    const [question, setQuestion] = useState(0)
    const [answers, setAnswers] = useState({})

    const array = [
        {
            Q: 0,
            Function: Start()
        },
        {
            Q: 1,
            Function: Question1()
        },
        {
            Q: 2,
            Function: Question2()
        }
    ]
    const nextQuestion = function () {
        setQuestion(question + 1)
        console.log(question)
    }
    const handleClick = function (e) {
        console.log(e.target.innerText);
    }

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
                        <a className="btn btn-success w-50 fs-2" onClick={() => { setQuestion(question + 1) }} >
                            Start
                        </a>
                    </div>
                </div>
            </div>
        )
    }

    function Question1() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center mx-auto mt-5">
                        <h1 className="fw-bold">What Emotion are you feeling?</h1>
                    </div>
                    <div className="col-lg-4 text-center mx-auto mt-5">
                        <img src={tools} alt="" className='w-50' />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-lg-10 text-center mx-auto mt-5" >
                        <a className="btn btn-danger w-50 fs-2" onClick={(e) => { setAnswers({ emotion: e.target.innerText }); setQuestion(question + 1) }} >
                            Emotion
                        </a>
                    </div>
                </div>
            </div>
        )
    }

    function Question2() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center mx-auto mt-5">
                        <h1 className="fw-bold">Any Secondary Emotions?</h1>
                    </div>
                    <div className="col-lg-4 text-center mx-auto mt-5">
                        <img src={tools} alt="" className='w-50' />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-lg-10 text-center mx-auto mt-5" >
                        <a className="btn btn-warning w-50 fs-2" onClick={(e) => { console.log(answers.emotion) }} >
                            More Emotions
                        </a>
                    </div>
                </div>
            </div>
        )
    }

    return (
        // question === 0 ?
        // <div>
        //     {Start()}
        // </div>
        // :
        <div>
            {array[question].Function}
        </div>
    )
}



export default SkillsCoach