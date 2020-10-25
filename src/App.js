import React, { useState, useEffect } from 'react';
import { QuestionCard } from './components';

const API_URL = `https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple`;

function App() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);
  const [seconds, setSeconds] = useState(15);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setQuestions(data.results);
      });
  }, []);

  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      setScore(score + 1);
    }
  }, []);

  const handleAnswer = answer => {
    const newIndex = currentIndex + 1;
    setCurrentIndex(newIndex);
    // Prevent getting questions two times...
    if (answer === questions[currentIndex].correct_answer) {
      // Increase the score by one
      setScore(score + 1);
    }
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
        seconds={seconds}
      />
      )}
    </div>
    ) : (
      <h2 className='text-2xl text-white'>Loading...</h2>
    );
};

export default App;
