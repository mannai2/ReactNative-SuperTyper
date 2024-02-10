import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './HomeScreen';
import PlayScreen from './PlayScreen';
import ScoresScreen from './ScoresScreen';
import { ScoreProvider } from './ScoreContext';

const image = { uri: 'https://wallpaperaccess.com/full/1143634.jpg' };

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transperent',
  },
};


const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    
    <NavigationContainer theme={MyTheme}>
      <ScoreProvider>
      <View style={styles.container}>  
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Play" component={PlayScreen} />
            <Stack.Screen name="Scores" component={ScoresScreen} />
          </Stack.Navigator>
          
        </ImageBackground>
        
      </View>
      </ScoreProvider>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  image: {
    width: "100%", 
    flex: 1, 
    justifyContent: "center"
  },
});

export default App;
