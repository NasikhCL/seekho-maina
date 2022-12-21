import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Quiz from './components/Quiz';
import Pagination from './components/Pagination';

function App() {

  const [questions, setQuestions]= useState([])
  const [currentPage, setCurrentPage] = useState(1);
  
  useEffect(()=>{
    fetch('https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple')
    .then(res=> res.json())
    .then(data=> setQuestions(data.results))
  },[])


  const quesPerPage = 1;
  const lastQuesIndex = currentPage * quesPerPage;
  const firstQuesIndex = lastQuesIndex - quesPerPage;

  let currentPageQues = questions.slice(firstQuesIndex, lastQuesIndex); 
  // let ansOptions= [currentPageQues[0].incorrect_answers, currentPageQues[0].correct_answer]
  // totalQues,
  // usersPerPage,
  // currentPage,
  // setCurrentPage,
  // console.log(currentPageQues)
  return (
    <div className="App">
      <Navbar />
      <Quiz ques={currentPageQues[0]} />
      <Pagination totalQues={questions.length} quesPerPage={quesPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;
