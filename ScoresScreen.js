import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native'; 
import { useScore } from './ScoreContext';

const ScoresScreen = () => {
  const { scores } = useScore();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Scores:</Text>
      <FlatList
        data={scores}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.scoreItem}>
            <Text style={styles.scoreText}>{item}</Text>
          </View>
        )}
      />
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  scoreItem: {
    backgroundColor: '#f0f0f0',
    padding: 8,
    marginBottom: 8,
    borderRadius: 8,
  },
  scoreText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  
});
export default ScoresScreen;

