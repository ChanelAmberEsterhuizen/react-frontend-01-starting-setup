import React from "react";
import QuestionsList from "../components/QuestionsList";
const Questions = () => 
{
    const QUESTIONS = [{id : 'q1', q: 'What is your favourite color ? ' , image: 'https://media.istockphoto.com/photos/green-number-1-picture-id173943775'  }, 
     {id : 'q2', q: 'What kind of pets do u have ?' , image: 'https://media.istockphoto.com/photos/fun-number-two-picture-id883061952', places: 7  }] ; 
    return <QuestionsList items = {QUESTIONS} />; 
}; 
export default Questions ; 