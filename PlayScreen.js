import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Alert } from 'react-native';

import { useScore } from './ScoreContext';




const PlayScreen = ({ navigation }) => {
  const [challengeCountdown, setChallengeCountdown] = useState(5);
  const [playingCountdown, setPlayingCountdown] = useState(60);
  const [score, setScore] = useState(0);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [scorer, setScorer] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [inputDisabled, setInputDisabled] = useState(true);
  const [fetchedText, setFetchedText] = useState('');
  const [targetText, setTargetText] = useState('');


  const textData = require('./text.json');
  const chooseRandomText = () => {
    const randomIndex = Math.floor(Math.random() * textData.length);
    const randomText = textData[randomIndex];
    setTargetText(randomText);
  };

  useEffect(() => {
    chooseRandomText();
  }, []);
  


  


  

  const incrementScorer = () => {
    setScorer(scorer + 1);
  };

  const { addScore } = useScore();


  const handleEndGame = () => {
    addScore(score); 
    navigation.navigate('Scores');
  };
  



const displayGameResult = () => {
  Alert.alert(
    'Game Result',
    `Your score: ${score}`,
    [
      {
        text: 'OK',
        onPress: handleEndGame,
        
      },
    ],
    { cancelable: false }
  );
};



 

useEffect(() => {
  const countdownTimer = setInterval(() => {
    
    if (challengeCountdown > 0) {
      setChallengeCountdown(challengeCountdown - 1);
      setInputDisabled(true);
    } else if (playingCountdown > 0) {
      setInputDisabled(false);
      setPlayingCountdown(playingCountdown - 1);
      
    } else {
      clearInterval(countdownTimer); 
      displayGameResult();
    }
  }, 1000);

  return () => {
    clearInterval(countdownTimer);
  };
}, [challengeCountdown, playingCountdown]);


  useEffect(() => {
    compareTexts();
  }, [userInput]);
  
  

  const compareTexts = (inputChar) => {
    let newInput = '';
    let score = 0;
    
    for (let i = 0; i < userInput.length; i++) {
      if (userInput[i] === targetText[i]) {
        score++;
        newInput += userInput[i]; 
        
      }
      else {
        incrementScorer();
        
      }
  
    setUserInput(newInput);
  
  setScore(score-scorer);
  setCurrentPosition(score);

 
  if (newInput.length === targetText.length) {
    displayGameResult();
  }
}
};

const renderTargetTextWithMarker = () => {
  
    return (
      <Text style={styles.textToType}>
        {targetText.split('').map((char, index) => ( 
          <Text key={index} style={getIndexStyle(index)}>
            {char}
          </Text>
        ))}
      </Text>
    );
  
};


const getIndexStyle = (index) => {
  if (index === currentPosition) {
    return styles.marker;
  } else if (index < userInput.length && targetText[index] !== userInput[index]) {
    return styles.incorrectMarker;
  } else {
    return {};
  }
};

  return (
    <View style={styles.container}>
      <Text style={styles.countdownText}>{challengeCountdown}</Text>
      <Text style={styles.instructions}>Type the following text:</Text>
      {renderTargetTextWithMarker()}
      <TextInput
        placeholder='Type here'
        style={styles.textInput}
        onChangeText={(text) => setUserInput(text)}
        value={userInput}
        editable={!inputDisabled}
      />
      <Text style={styles.countdownText}>{playingCountdown}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  countdownText: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  instructions: {
    fontSize: 20,
    marginBottom: 10,
  },
  textInput: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'black',
    padding: 8,
    width: '80%',
    textAlign: 'center',
  },
  textToType: {
    fontFamily: 'Clean Sports Stencil',
  },
  resultText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  marker: {
    backgroundColor: 'yellow', 
  },
  incorrectMarker: {
    backgroundColor: 'red', 
  }
});

export default PlayScreen;
