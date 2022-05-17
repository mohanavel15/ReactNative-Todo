import { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Screen from './components/Screen';
import TopBar from './components/TopBar';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';
import { TodoItemModel } from './model';

export default function App() {
  const [screen, setSreen] = useState(0);
  const [todos, setTodos] = useState<TodoItemModel[]>([])

  useEffect(() => {
    AsyncStorage.getItem('todos').then(value => {
      if (value) {
        setTodos(JSON.parse(value));
      }
    });
  }, []);

  useEffect(() => {
    AsyncStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <Screen>
      <TopBar setScreen={setSreen} />
      {screen === 0 && <AddTodo setTodos={setTodos} />}
      <FlatList data={todos} keyExtractor={item => item.id.toString()} renderItem={({ item }) => <>
      { screen === 0 && !item.completed && <TodoItem todo={item} setTodos={setTodos} /> }
      { screen === 1 && item.completed && <TodoItem todo={item} setTodos={setTodos} /> }
      </>} />
    </Screen>
  );
}
