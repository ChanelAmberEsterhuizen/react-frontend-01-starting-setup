import React from "react";
import'./QuestionItem.css';
import { Link } from "react-router-dom";

import Card from "../../shared/components/UIElements/Card";

const QuestionItem = props => {
    return (
        <li className="question-item">
                <Card className= "question-item__content">
                <Link>
            <div className="question-item__info">
                <h2>{props.q}</h2> 
            </div>
            <br></br>
            <div>
            <input type="text" className="form-control"  />
            </div>
            <br/>
            <button>Submit</button>
            </Link>
            </Card>
        

        </li>
    ); 
}; 

export default QuestionItem ; 