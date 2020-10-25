import React from 'react'
import { v4 as uuid_v4 } from "uuid";


const QuestionaCard = ({
  seconds,
  showAnswers,
  handleAnswer,
  data: { question, correct_answer, incorrect_answers },
}) => {
  const shuffledAnswers = [correct_answer, ...incorrect_answers ].sort(() => Math.random() - 0.5);

  return (
    <>
      <h3 className='text-2xl text-white'>
        {seconds}
      </h3>
      <div className="bg-white text-blue-800 p-10 rounded-lg shadow-md">
        <h2 className='text-2xl' dangerouslySetInnerHTML={{ __html: question }} />
      </div>
      <div className="grid grid-cols-2 gap-6 mt-6">
        {shuffledAnswers.map(answer => {
          // Change the textColor depending on the answer
          const textColor = showAnswers ? answer === correct_answer ? 'text-green-500' : 'text-red-500' : 'text-blue-800';

          return (
            <button
              className={`${textColor} bg-white p-4 rounded shadow text-blue-800 font-semibold`}
              key={uuid_v4()}
              onClick={() => handleAnswer(answer)}
              dangerouslySetInnerHTML={{ __html: answer }}
            />
        )})}
      </div>
    </>
  )
};

export default QuestionaCard;