import React, { useState, useEffect } from 'react';
import { QuestionCard, Loader } from './components';

const API_URL = `https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple`;

function App() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);
  // const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setQuestions(data.results);
      });
  }, []);

  // useEffect(() => {
  //   if (timeLeft === 0) {
  //     setTimeLeft(null)
  //   }
  //   if (!timeLeft) return;
  //   const intervalId = setInterval(() => {

  //     setTimeLeft(timeLeft - 1);
  //   }, 1000);
  //   return () => clearInterval(intervalId);
  // }, [timeLeft]);

  const handleAnswer = answer => {
    const newIndex = currentIndex + 1;
    setCurrentIndex(newIndex);
      // Prevent getting questions rerender twice...
      if (answer === questions[currentIndex].correct_answer) {
        // Increase the score by one
        setScore(score + 1);
      }

    setShowAnswers(true);
    // setTimeLeft(15);
  };

  // Didn't quite get the timer to work.
  // Need to find a way to stop it from rerendering every second.
  // Need to how to implement the timer in a good way.

  return (questions.length > 0 ? (
    <div className="container">
      {currentIndex >= questions.length ? (
        <div> {/* Score Card */}
          <h1 className='text-3xl text-blue-500 bg-white rounded p-4 mb-4 font-bold'>Your score: {score} / {questions.length}</h1>
          <h2 className='text-2xl text-green-500 bg-white rounded p-4 mb-4'>Total correct answers: {score}</h2>
          <h2 className='text-2xl text-red-500 bg-white rounded p-4'>Total incorrect answers: {questions.length - score}</h2>
        </div>
    ) : (
      <div>
        <div className='flex justify-end bg-white p-4 rounded text-blue-800 mb-4'>
            <span>Question: {currentIndex + 1}</span> / {questions.length}
        </div>
        <QuestionCard
          data={questions[currentIndex]}
          showAnswers={showAnswers}
          handleAnswer={handleAnswer}
        />
      </div>
    )}
    </div>
    ) : (
      <>
        <Loader />
        <h2 className='text-2xl text-white text-center'>Loading...</h2>
      </>
    ));
};

export default App;
