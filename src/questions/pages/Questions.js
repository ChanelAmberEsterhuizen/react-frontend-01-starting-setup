import React from "react";
import QuestionsList from "../components/QuestionsList";
const Questions = () => 
{
    const QUESTIONS = [{id : 'q1', q: 'What is your favourite color ? ' , image: 'https://media.istockphoto.com/photos/green-number-1-picture-id173943775'  }, 
     {id : 'q2', q: 'What kind of pets do u have ? ' , image: 'https://media.istockphoto.com/photos/fun-number-two-picture-id883061952'  },
     {id : 'q3', q: 'Are you male or female ? ' , image: ''  },
     {id : 'q4', q: 'What is your age ? ' , image: ''  },
     {id : 'q4', q: 'Select the foods that you like from the list? ' , image: ''  }

     
    ] ; 
    return <QuestionsList items = {QUESTIONS} />; 
}; 
export default Questions ; 