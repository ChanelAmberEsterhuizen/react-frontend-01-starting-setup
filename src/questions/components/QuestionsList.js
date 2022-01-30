import React from "react";
import './QuestionsList.css'; 
import QuestionItem from "./QuestionItem";


const QuestionsList = props => {
    if(props.items.length === 0 ){
        return ( <div className="center">
            <h2>No Qs found </h2>
        </div>
        ) ; 
    }

    return (<ul className="questions-list">
        {props.items.map(question => 
            {
                return <QuestionItem key = {question.id} id = {question.id} image = {question.image} q = {question.q} />
            })}
    </ul>); 
}; 

export default QuestionsList; 