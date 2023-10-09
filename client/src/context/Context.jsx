import { createContext, useState } from "react";

export const SkillsContext = createContext();

const SkillsContextProvider = (props) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [responses, setResponses] = useState([]);
    const prompts = [{ question: 'What emotion are you feeling?', type: 'button' }, { question: 'Any secondary emotions?', type: 'button' }]

    const nextQuestion = (() => {
        setCurrentQuestion(currentQuestion + 1);
        console.log(currentQuestion)
    });

    const previousQuestion = (() => {
        setCurrentQuestion(currentQuestion - 1);
    });

    const updateResponses = ((response) => {
        setResponses([...responses, response]);
        console.log(responses)
    });

    const resetResponses = (() => {
        setResponses([]);
    });

    return (
        <SkillsContext.Provider value={{ currentQuestion, nextQuestion, prompts, previousQuestion, updateResponses, resetResponses }}>
            {props.children}
        </SkillsContext.Provider>
    )

}

export default SkillsContextProvider;