import React, { useState } from 'react'
import { QuizData } from '../Data/quiz'
import QuizResult from './QuizResult'

function Quiz() {

  const [curQustion, setcurQuestion]=useState(0)
  const [score , setScore ]=useState(0)
  const [ clickOption , setclickOption] = useState(0)
  const [showresult ,setshowResult] = useState(false)


  const  changeQuestion = ()=>{
    updateScore()
    if(curQustion<QuizData.length-1){
        setcurQuestion(curQustion+1)
        setclickOption(0)
    }
    else{
      setshowResult(true)
    }
    }
    
    const updateScore=()=>{
      if(clickOption===QuizData[curQustion].answer){
        setScore(score+1)
      }
    }




  return (
    <div>
<p className="heading-txt">Quiz APP</p>
        <div className="container">  
        {showresult ? (
        <QuizResult score={score} totalscore ={QuizData.length}/>

        ):(
          <>
        <div className='question'> 
              <span id='question-txt'>{curQustion+1} . {QuizData[curQustion].question}</span>
              <span id='question-number'></span>
        </div>
        <div className='option-container'>
        {QuizData[curQustion].options.map((option,i)=>{
                return(
                    <button
                    className={`option-btn ${
                      clickOption == i+1 ? "checked": null
                    }`}
                    // className='option-btn'
                    key={i}
                      onClick={()=>setclickOption(i+1)}
                    >
                            {option}
                    </button>
            )
        })}
        </div>
        <input type='button' value="Next" id='next-button' onClick={changeQuestion}></input>
        </>)}
        </div>
    </div>
  )
}

export default Quiz