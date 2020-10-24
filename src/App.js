import React, { useState, useEffect } from 'react';
import { Questionaire } from './components';

const API_URL = `https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple`;

function App() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [gameFinished, setGameFinished] = useState(false);

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

    if (answer === questions[currentIndex].correct_answer) {
      // Increase the score
      setScore(score + 1);
    }

    if (newIndex >= questions.length) {
      setGameFinished(true);
    }
  };

  return (
    gameFinished ? (
      <h1 className='text-3xl text-white fonst-bold'>Score: {score}</h1>
    ) : (questions.length > 0 ? (
      <div className="container">
        <Questionaire data={questions[currentIndex]} handleAnswer={handleAnswer} />
      </div>
      ) : (
        <h1>Loading...</h1>
      )
  ));
}

export default App;
