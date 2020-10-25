import React, { useState, useEffect } from 'react';
import { QuestionCard, Loader } from './components';

const API_URL = `https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple`;

function App() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setQuestions(data.results);
      });
  }, []);

  const handleAnswer = answer => {
    const newIndex = currentIndex + 1;
    setCurrentIndex(newIndex);
      // Prevent getting questions two times...
      if (answer === questions[currentIndex].correct_answer) {
        // Increase the score by one
        setScore(score + 1);
      }

    // setShowAnswers(true);
  };

  return questions.length > 0 ? (
    <div className="container">
      {currentIndex >= questions.length ? (
        <h1 className='text-3xl text-white fonst-bold'>Your score: {score}</h1>
    ) : (
      <QuestionCard
        data={questions[currentIndex]}
        showAnswers={showAnswers}
        handleAnswer={handleAnswer}
      />
    )}
    </div>
    ) : (
      <>
        <Loader />
        <h2 className='text-2xl text-white text-center'>Loading...</h2>
      </>
    );
};

export default App;
