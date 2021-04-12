import React from 'react'
import answeredQuestionArray from '../index'

function Footer(props){
    return(
      <footer className="p-4 mt-8 bg-green-600 text-gray-50">

        <p >{props.answeredQuestionArray.length} questions answered</p>


      </footer>
    )
    }
  

  export default Footer