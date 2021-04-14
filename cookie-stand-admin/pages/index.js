import Head from 'next/head'
import React from 'react';


import { replies } from '../data'
import { useState } from 'react'
import { hours } from '../data'

import Header from './components/header'
import QuestionForm from './components/form'


export default function Home() {
  // const [reply, setReply] = useState("Ask Me Anything")
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  

  function getLatestReply(){
    // CONDITIONAL DISPLAY
    if(answeredQuestions.length === 0){
      return 'Ask Me Anything!'
    }
    return answeredQuestions[answeredQuestions.length -1].reply
  }

  function numberOfLocations(e){
    let rowCount = $("#Table_id tr").length;
          return rowCount; 
  }
  return (
    <div className="">
      <Head>
        <title>Cookie Stand Admin</title>
         <link rel="icon" href="/favicon.ico" /> 
      </Head>
      <main className="">

      <Header title="Cookie Stand Admin" /> 
      <QuestionForm /> 
      {/* <EightBall latestReply={getLatestReply()} /> */}
      <ResponseTable answeredQuestionArray={answeredQuestions} />
      <Footer answeredQuestionArray={answeredQuestions}/>
        
      </main>
    </div>
  )

 
  // function EightBall(props){
  //   return(
  //     <div className="mx-auto my-4 bg-gray-900 rounded-full w-96 h-96">
  //       <div className="relative flex items-center justify-center w-48 h-48 rounded-full bg-gray-50 top-16 left-16">
  //         <p className="text-xl text-center">{props.latestReply}</p>
  //       </div>
  //     </div>
  //   )
  // }


  function ResponseTable(props){
    console.log(props.answeredQuestionsArray)
    return(
      <table id="responseTab" className="w-3/4 mx-auto my-4 ">
        <thead className="rounded-md">
          <tr className="text-xs bg-green-500 rounded-md">
            <th>Location</th>
            <th>6am</th>
            <th>7am</th>
            <th>8am</th>
            <th>9am</th>
            <th>10am</th>
            <th>11am</th>
            <th>12pm</th>
            <th>1pm</th>
            <th>2pm</th>
            <th>3pm</th>
            <th>4pm</th>
            <th>5pm</th>
            <th>6pm</th>
            <th>7pm</th>
            <th>Totals</th>

          </tr>
        </thead>
        <tbody>
        <tr className="text-xs text-center odd:bg-green-400 even:bg-green-300">
              <td className="pl-2 border border-gray-700">Fake Location</td>
              <td className="pl-2 border border-gray-700">48</td>
              <td className="pl-2 border border-gray-700">42</td>
              <td className="pl-2 border border-gray-700">30</td>
              <td className="pl-2 border border-gray-700">24</td>
              <td className="pl-2 border border-gray-700">42</td>
              <td className="pl-2 border border-gray-700">24</td>
              <td className="pl-2 border border-gray-700">36</td>
              <td className="pl-2 border border-gray-700">42</td>
              <td className="pl-2 border border-gray-700">42</td>
              <td className="pl-2 border border-gray-700">48</td>
              <td className="pl-2 border border-gray-700">36</td>
              <td className="pl-2 border border-gray-700">42</td>
              <td className="pl-2 border border-gray-700">24</td>
              <td className="pl-2 border border-gray-700">36</td>
              <td className="pl-2 border border-gray-700">516</td>
            </tr>
            <tr className="text-xs text-center odd:bg-green-400 even:bg-green-300">
              <td className="pl-2 border border-gray-700">Fake Location</td>
              <td className="pl-2 border border-gray-700">48</td>
              <td className="pl-2 border border-gray-700">42</td>
              <td className="pl-2 border border-gray-700">30</td>
              <td className="pl-2 border border-gray-700">24</td>
              <td className="pl-2 border border-gray-700">42</td>
              <td className="pl-2 border border-gray-700">24</td>
              <td className="pl-2 border border-gray-700">36</td>
              <td className="pl-2 border border-gray-700">42</td>
              <td className="pl-2 border border-gray-700">42</td>
              <td className="pl-2 border border-gray-700">48</td>
              <td className="pl-2 border border-gray-700">36</td>
              <td className="pl-2 border border-gray-700">42</td>
              <td className="pl-2 border border-gray-700">24</td>
              <td className="pl-2 border border-gray-700">36</td>
              <td className="pl-2 border border-gray-700">516</td>
            </tr>


          {props.answeredQuestionArray.map(item =>(
            <tr className="even:bg-green-200">
              <td className="pl-2 border border-gray-700">{item.id}</td>
              <td className="pl-2 border border-gray-700">{item.question}</td>
              <td className="pl-2 border border-gray-700">{item.reply}</td>
            </tr>
          ))}

        </tbody>
        <tfoot>
          <tr className="text-xs font-bold text-center bg-green-500">
          <td className="pl-2 border border-gray-700">Totals</td>
              <td className="pl-2 border border-gray-700">48</td>
              <td className="pl-2 border border-gray-700">42</td>
              <td className="pl-2 border border-gray-700">30</td>
              <td className="pl-2 border border-gray-700">24</td>
              <td className="pl-2 border border-gray-700">42</td>
              <td className="pl-2 border border-gray-700">24</td>
              <td className="pl-2 border border-gray-700">36</td>
              <td className="pl-2 border border-gray-700">42</td>
              <td className="pl-2 border border-gray-700">42</td>
              <td className="pl-2 border border-gray-700">48</td>
              <td className="pl-2 border border-gray-700">36</td>
              <td className="pl-2 border border-gray-700">42</td>
              <td className="pl-2 border border-gray-700">24</td>
              <td className="pl-2 border border-gray-700">36</td>
              <td className="pl-2 border border-gray-700">516</td>
          </tr>
        </tfoot>
        
      </table>
    )
  }
  //   console.log(props.answeredQuestionArray)
  //   return(
  //     <table className="w-1/2 mx-auto my-4">
  //       <thead>
  //         <tr>
  //           <th className="text-xs bg-green-500 border border-gray-700">Location</th>
  //           {/* {props.hoursArray.map(item =>(
  //             <th className="text-xs bg-green-500 border border-gray-700">{item.id}</th>
  //         ))} */}
  //           <th className="text-xs bg-green-500 border border-gray-700">Totals</th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         {props.answeredQuestionArray.map(item =>(
  //           <tr className="odd:bg-green-500">
  //             <td className="pl-2 border border-gray-700">{item.id}</td>
  //             <td className="pl-2 border border-gray-700">{item.question}</td>
  //             <td className="pl-2 border border-gray-700">{item.reply}</td>
  //           </tr>
  //         ))}
  //       </tbody>
  //     </table>
  //   )
  // }
  

  function Footer(props){
    return(
      <footer className="absolute inset-x-0 bottom-0 h-16 p-3 text-left bg-green-500 text-m">
        <p >{props.answeredQuestionArray.length} Locations World Wide</p>
      </footer>
    )
    }
  }

