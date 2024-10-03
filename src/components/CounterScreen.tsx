import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import { AppDispatch} from '../redux/store';
import {increment, incrementByTwo, reset,selectCount} from '../redux/slices/counterSlice';

export default function CounterScreen () {
  const count = useSelector(selectCount);
  const dispatch: AppDispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(2);
  const [isDarkMode, setIsDarkMode] = useState(false); 

  // useEffect(() => {
  //   dispatch(incrementByTwo(incrementAmount));
  // }, [incrementAmount, dispatch]);

  // Toggle between dark and light themes
  const toggleTheme = () => setIsDarkMode(prevMode => !prevMode);

  // Styles based on the theme
  const themeStyles = isDarkMode ? darkTheme : lightTheme;

  return (
    <View style={[styles.container, themeStyles.container]}>
      <Text style={[styles.heading, themeStyles.text]}>Counter App</Text>
      <Text style={[styles.counter, themeStyles.text]}>{count}</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            {backgroundColor: isDarkMode ? '#ffffff' : '#4CAF50'},
          ]}
          onPress={() => dispatch(increment())}>
          <Text style={{color: isDarkMode ? '#000' : '#fff'}}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.textInput, themeStyles.textInput]}
          keyboardType="numeric"
          value={incrementAmount.toString()}
          onChangeText={value => setIncrementAmount(Number(value) || 0)}
        />
        <TouchableOpacity
          style={[
            styles.button,
            {backgroundColor: isDarkMode ? '#ffffff' : '#2196F3'},
          ]}
          onPress={() => dispatch(incrementByTwo(incrementAmount))}>
          <Text style={{color: isDarkMode ? '#000000' : '#fff'}}>
            Add Increment
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            {backgroundColor: isDarkMode ? '#ffffff' : '#f44336'},
          ]}
          onPress={() => dispatch(reset())}>
          <Text style={{color: isDarkMode ? '#000' : '#fff'}}>Refresh</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[
          styles.themeButton,
          {backgroundColor: isDarkMode ? '#ffffff' : '#000'},
        ]}
        onPress={toggleTheme}>
        <Text style={{color: isDarkMode ? '#000' : '#fff'}}>
          Switch to {isDarkMode ? 'Light' : 'Dark'} Theme
        </Text>
      </TouchableOpacity>
    </View>
  );

};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  counter: {
    fontSize: 48,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    width: '50%',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    padding: 3,
    borderRadius: 8,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#a3a3a3',
    padding: 8,
    marginRight: 10,
    width: 80,
    textAlign: 'center',
    fontSize: 18,
    backgroundColor: 'pink',
    color: 'gray',
  },
  button: {
    flex: 1,
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 6,
    alignItems: 'center',
  },
  themeButton: {
    padding: 10,
    marginVertical: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
});

// Light theme styles
const lightTheme = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  text: {
    color: '#000',
  },
  textInput: {
    borderColor: '#ddd',
  },
});

// Dark theme styles
const darkTheme = StyleSheet.create({
  container: {
    backgroundColor: '#000',
  },
  text: {
    color: '#ffffff',
  },
  textInput: {
    borderColor: '#444',
  },
});


