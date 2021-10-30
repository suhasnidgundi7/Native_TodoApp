import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import AddTodo from './Components/AddTodo';
import Header from './Components/Header';
import TodoItem from './Components/TodoItem';

export default function App() {

  const [todos, setTodos] = useState([])

  const onPressHandler = (key) => {
    setTodos((prevTodo) => {
      return prevTodo.filter(todo => todo.key != key)
    })
  }

  const submitHandler = (text) => {

    if(text.length > 3){
      setTodos((prevTodo) => {
        return [
          { text : text, key: Math.random().toString() },
          ...prevTodo
        ]        
      })
    }else{
      Alert.alert('OOPS!', 'TODO MUST BE OVER 3 CHARS LONG', [
        {
          text: 'Understood',          
        }
      ])
    }    

  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header/>
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} onPressHandler={onPressHandler} />
              )}
            />          
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f1faee',    
  },

  content: {
    flex: 1,
    padding: 40,
    backgroundColor: '#f1faee'
  },

  list: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#f1faee'
  }

});
