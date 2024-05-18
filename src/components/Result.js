import React from 'react';

const Result = ({ score, totalQuestions }) => {
  return (
    <div className='result'>
      <h2>Você acertou {score} de {totalQuestions} perguntas!</h2>
    </div>
  );
};

export default Result;
