import React, { useContext } from 'react'
import { QuizContext } from "../Helpers/Contexts"
import { Questions } from '../Helpers/QuestionBank';
import '../Quiz/Quiz.css'

function EndScreen() {
  const { score } = useContext(QuizContext);


  return (
    <div className='EndScreen'>
      <h1>Quiz finished</h1>
      <h3> You scored:</h3>
      <h1>{score}/{Questions.length}</h1>
      <button>Apply</button>
    </div>
  )
}

export default EndScreen