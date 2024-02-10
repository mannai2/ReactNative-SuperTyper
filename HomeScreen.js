import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';


import Instructions from './Instructions';


const image = { uri: 'https://wallpaperaccess.com/full/1143634.jpg' };





const HomeScreen = ({ navigation }) => {
  const handleStartGame = () => {
    navigation.navigate('Play'); 
  };

  const handleScores = () => {
    navigation.navigate('Scores');
  }


  return (
    <View style={styles.container}>
    
    
      <Text style={styles.title}>Super Typer</Text>
      <TouchableOpacity style={styles.startButton} onPress={
        () => { handleStartGame()}
        }>
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.startButton} onPress={
        handleScores
        }>
        <Text style={styles.buttonText}>Scores</Text>
      </TouchableOpacity>

      <Instructions/>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Clean Sports Stencil',
    marginBottom: 20,
  },
  startButton: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 15,
    fontFamily: 'Clean Sports Stencil',
  },
 
 
});

export default HomeScreen;
