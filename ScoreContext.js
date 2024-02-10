import React, { createContext, useContext, useState } from 'react';

const ScoreContext = createContext();

export const ScoreProvider = ({ children }) => {
  const [scores, setScores] = useState([]);

  const addScore = (score) => {
    setScores([...scores, score]);
  };

  return (
    <ScoreContext.Provider value={{ scores, addScore }}>
      {children}
    </ScoreContext.Provider>
  );
};

export const useScore = () => {
  const context = useContext(ScoreContext);
  if (!context) {
    throw new Error('useScore must be used within a ScoreProvider');
  }
  return context;
};
