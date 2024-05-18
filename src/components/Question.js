import React from 'react';

const Question = ({ question, handleAnswerClick }) => {
  return (
    <div className='question'>
      <h2>{question.questionText}</h2>
      <div className='answer-options'>
        {question.answerOptions.map((answerOption, index) => (
          <button
            key={index}
            onClick={() => handleAnswerClick(answerOption.isCorrect)}
          >
            {answerOption.answerText}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
