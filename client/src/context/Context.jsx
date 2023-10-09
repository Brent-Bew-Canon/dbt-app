import { createContext, useState } from "react";

export const SkillsContext = createContext();

const SkillsContextProvider = (props) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [responses, setResponses] = useState([]);
    const prompts = [
        { question: 'What emotion are you feeling?', type: 'button', options: [{ emotion: "Sadness", color: "blue" }, { emotion: "Anger", color: "red" }, { emotion: "Embarrassed", color: "yellow" }, { emotion: "Fear", color: "purple" }] },
        { question: 'Any secondary emotions?', type: 'button', options: [{ emotion: "Depressed", color: "blue" }, { emotion: "Livid", color: "red" }, { emotion: "happy", color: "yellow" }] }
    ]
    const promptingEvents = ["Having an important goal blocked", "You or someone you care about being attacked or threatened by others", "Losing power, status, or respect", "Not having things turn out as expected", "Physical or emotional pain", "None of the above"]

    const skills = ["Have a conversation about it", "Do intense exercise", "Use the TIP skill", "Listen to loud music"]

    const nextQuestion = (() => {
        setCurrentQuestion(currentQuestion + 1);
        console.log(currentQuestion)
    });

    const previousQuestion = (() => {
        setCurrentQuestion(currentQuestion - 1);
        responses.pop();
    });

    const updateResponses = ((response) => {
        setResponses([...responses, response]);
        console.log(responses)
    });

    const resetResponses = (() => {
        setResponses([]);
    });

    return (
        <SkillsContext.Provider value={{ currentQuestion, nextQuestion, prompts, promptingEvents, responses, skills, previousQuestion, updateResponses, resetResponses }}>
            {props.children}
        </SkillsContext.Provider>
    )

}

export default SkillsContextProvider;