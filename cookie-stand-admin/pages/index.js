import Head from 'next/head'
import React from 'react'
import Link from 'next/link'


import { useState } from 'react'
import { hours } from '../data'


import Header from './components/header'

export default function Home() {

  const [emptyTable, setEmptyTable] = useState('No Cookie Stands Available');
  const [flag, setFlag] = useState(false)
  
  const [conditionalLocation, setConditionalLocation] = useState()
  const [conditionalTotal, setConditionalTotal] = useState()
  const [hoursOfOperation, setHoursOfOperation] = useState([])
  const [cookieStandData, setCookieStandData] = useState([]);

  function questionAskedHandler(event){
    event.preventDefault();
    const standLocation = event.target.location.value
    const minCust = event.target.minCust.value
    const maxCust = event.target.maxCust.value
    const avgCookies = event.target.avgCookies.value
    const concatenateMinMaxAvg = [minCust, maxCust, avgCookies]
    const salesData = calcHourlySales(concatenateMinMaxAvg)

    
    
    let newCookieStand = {
      standLocations: standLocation,
      sales: salesData,
      count: cookieStandData.length,
    }
    
    setCookieStandData([...cookieStandData, newCookieStand])
    setFlag(true)
    setHoursOfOperation(hours)
    setEmptyTable('')
    setConditionalLocation('Location')
    setConditionalTotal('Totals')
    
  }

  return (
    <div className="">
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" /> 
      </Head>

      <Header title="Cookie Stand Admin" />
      <main className="">
        <QuestionForm />
        <ResponseTable hoursOfOperation={ hoursOfOperation } cookieStandData={ cookieStandData }  />
        <h2 className="mb-4 text-center">{ emptyTable }</h2>
      </main>
      <Footer />
      
    </div>
  )


  function QuestionForm(props){
    return(
      <div className="w-3/4 p-4 mx-auto my-4 bg-green-300 rounded"> 
      <div className="flex items-center text-center containerTitle">
      <h3 className="w-full p-2 text-xl text-center ">Create Cookie Stand</h3>
      </div>
      
      <form onSubmit={questionAskedHandler} className="p-4 m-auto mt-0">
          <div className="w-full">
            <label className="text-xs">Location
              <input required placeholder="Enter location" className="w-10/12 p-0 ml-2" type="text" name="location"/>
            </label>
          </div>    
          
          <div className="grid grid-cols-4 grid-rows-1 mt-2 md:grid-flow-col justify-items-center md:stroke-6 ">

            <div className="w-11/12 pl-3 pr-3 text-center bg-green-200">
              <label className="text-xs">Minimum Customers Per Hour<br/>
                <input className="w-11/12 p-0 mb-1 ml-1 mr-1" required placeholder="Enter customers" type="text" name="minCust"/>
              </label>
            </div>

          
            <div className="w-11/12 text-center bg-green-200">
              <label className="-mb-1 text-xs">Maximum Customers Per Hour <br/>
                <input className="w-11/12 p-0 mb-1 ml-1 mr-1" required placeholder="Enter customers" type="text" name="maxCust"/>
              </label>
            </div>

          
            <div className="w-11/12 text-center bg-green-200">
              <label className="-mb-8 text-xs">Average Cookies per Sale
              <br/>
                <input className="w-11/12 p-0 mb-1 ml-1 mr-1" required placeholder="Enter cookies" type="text" name="avgCookies" />
              </label>
            </div>


            <div className="m-auto ">
              <button className="pt-3 pb-3 pl-10 pr-10 m-auto text-sm bg-green-500" type="submit" value="Submit">Create</button>
            </div>

          </div>
      </form>
      </div>
    )
  }

  function ResponseTable(props){
    return(
      <table id="responseTab" className="w-3/4 mx-auto my-4 ">
        <thead className="rounded-md">
            <tr className="text-xs bg-green-500 ">
              < TableHelper />
                {props.hoursOfOperation.map(hours =>(
                  <th>{ hours }</th>
                  ))}
              < TotalHelper />
            </tr>
        </thead>
        <tbody>
              {props.cookieStandData.map(data =>(
                <tr className="text-xs text-center odd:bg-green-400 even:bg-green-300">
                  <td className="border border-gray-700">{data.standLocations}</td>
                  {data.sales[0].map(sale =>(
                    <td className="border border-gray-700">{sale}</td>
                  ))}
                  <td className="border border-gray-700">{data.sales[1]}</td>
                </tr>
              ))} 
        </tbody>
      </table>
    )
  }

  function calcHourlySales(data){
    console.log("data in calculate: ", data[0])
    let sales = []
    let totals = 0

    for (let i = 0; i < hours.length; i++){
      let hourly = Math.ceil(randomHelper(data[0], data[1]) * data[2])
      sales.push(hourly)
      totals += hourly
    }
    return [sales, totals]
  }

  
  function Footer(props){
    return(
      <footer className="absolute inset-x-0 bottom-0 h-16 p-3 text-left bg-green-500 text-m">
        <p>{cookieStandData.length} Locations World Wide</p>
      </footer>
    )
  }


  // HELPER FUNCTIONS

  // Random number reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  function randomHelper(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function TableHelper(props){
    if (!flag) {
      return ('')
    } else {
      return (
        <th>{ conditionalLocation }</th>
      )
    }
  }
  
  function TotalHelper(props){
    if (!flag) {
      return ('')
    } else {
            return (
                <th>{ conditionalTotal }</th>
            )
    }
  }
}