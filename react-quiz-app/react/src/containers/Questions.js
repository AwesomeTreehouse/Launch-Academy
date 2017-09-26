import React from 'react'
import Answers from './Answers'

const Questions = props => {

  let answers = props.answers.map(answer => {

    let handleClick = () => {
      props.handleClick(answer.id, answer.correct)
    }

    return(
      <Answers
        key={answer.id}
        answer={answer.body}
        handleClick={handleClick}
      />
    )
  })

  return(
    <div>
      {answers}
    </div>
  )
};

export default Questions;
