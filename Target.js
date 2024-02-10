import React, { useEffect, useState } from 'react';


const Target = () => {
  const [textData, setTextData] = useState([]);
  const [targetText, setTargetText] = useState('');

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await fetch('text.json'); 
        const data = await response.json();
        setTextData(data);
      } catch (error) {
        console.error('Error loading text data:', error);
      }
    };

    fetchData();
  }, []);

  const chooseRandomText = () => {
    const randomIndex = Math.floor(Math.random() * textData.length);
    const randomText = textData[randomIndex];
    setTargetText(randomText);
  };
};

export default Target;
