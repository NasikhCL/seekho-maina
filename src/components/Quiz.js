import React,{useEffect, useState} from 'react'
import uuid from 'react-uuid';



const Quiz = ({ques}) => {

    console.log(ques)
   
    // const ansOptions = ques && 
    // const shuffleOptions = ansOptions
    


  return (
    <div>
        <div key={uuid()} >
              {
                ques ?
                <>
                    <h3 className='text-xl'>{ques.question}</h3>
                    {/* <div className='w-100 flex flex-wrap justify-between items-center'> */}
                    <div>
                    {
                        [ques.incorrect_answers, ques.correct_answer].sort(() => Math.random() - 0.5).map((option, index)=>{
                            return(
                                <input type="radio" key={index} value={option} />
                            )
                        })
                    }
                    </div>
                </> : ''
              }
              
        </div>
    </div>
  )
}

export default Quiz