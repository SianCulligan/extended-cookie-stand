import React from 'react';

function QuestionForm(props){

    function questionAskedHandler(e){
        e.preventDefault();
        const randomReply = replies[Math.floor(Math.random() * replies.length)]
       { /* // alert(e.target.question.value);*/}
    
        const answeredQuestion = {
          question: e.target.question.value,
          reply: randomReply,
          id: answeredQuestions.length,
        }
        setAnsweredQuestions([...answeredQuestions, answeredQuestion])
        // console.log('AnsweredQuestion,', answeredQuestion)
        // setReply(randomReply);
      }



    return(
      <>
      <div className="w-3/4 p-4 mx-auto my-4 bg-green-300 rounded"> 
      <div className="flex items-center text-center containerTitle">
      <h3 className="w-full p-2 text-xl text-center ">Create Cookie Stand</h3>
      </div>

      <form onSubmit={questionAskedHandler} className="p-4 m-auto mt-0">
      <div className="w-full">
        <label className="text-xs">Location: 
          <input required placeholder="Enter location" className="w-10/12 p-0 ml-2" type="text" name="location"/>
        </label>
      </div>    
      
      <div className="grid grid-cols-4 grid-rows-1 mt-2 md:grid-flow-col justify-items-center md:stroke-6 ">
        <div className="w-11/12 pl-3 pr-3 text-center bg-green-200">
          <label className="text-xs">Minimum Customers per Hour<br/>
            <input className="w-11/12 p-0 mb-1 ml-1 mr-1" required placeholder="Enter customers" type="text" name="minCust"/>
          </label>
        </div>

        <div className="w-11/12 text-center bg-green-200">
          <label className="-mb-1 text-xs">Maximum Customers per Hour <br/>
            <input className="w-11/12 p-0 mb-1 ml-1 mr-1" required placeholder="Enter customers" type="text" name="maxCust"/>
          </label>
        </div>

        <div className="w-11/12 text-center bg-green-200">
          <label className="-mb-8 text-xs">Average Cookies per Sale <br/>
            <input className="w-11/12 p-0 mb-1 ml-1 mr-1" required placeholder="Enter cookies"type="text" name="avgCookies"/>
          </label>
        </div>      
        
        <div className="m-auto ">
            <button className="pt-3 pb-3 pl-10 pr-10 m-auto text-sm bg-green-500" type="submit" value="Submit">Create</button>
            </div>
          </div>
      </form>






      {/* <form onSubmit={questionAskedHandler} className="flex w-1/2 p-2 mx-auto my-4 bg-gray-200">
        <input name="question" className="flex-auto pl-1" />
        <button  className="px-2 py-1 bg-gray-500 text-gray-50">Ask</button>
      </form> */}
      </div>
      </>
    )
  }


//   const mapStateToProps = (state) => {
//     return {
//         products: state.products,
//         currentCategory: state.currentCategory,
//     };
// };

// export default connect(mapStateToProps)(QuestionForm);

export default QuestionForm