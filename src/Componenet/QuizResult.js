import React from 'react'

export default function QuizResult({score,totalscore}) {
  return (
    <div className="scoreBord" >
     Your Score: {score} <br/>
     Out  of  : {totalscore}
        </div>
  )
}
