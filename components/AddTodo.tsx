import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { TodoItemModel } from '../model'

export default function AddTodo({ setTodos }: { setTodos: React.Dispatch<React.SetStateAction<TodoItemModel[]>> }) {
  const [title, setTitle] = React.useState('')

  return (
    <View style={styles.AddTodoContainer}>
        <TextInput style={styles.input} placeholder='Add todo' value={title} onChangeText={(text) => {
          if (text.length > 24) {
            alert('Title is too long')
          }
          setTitle(text)
        }} />
        
        <TouchableOpacity style={styles.button} onPress={() => {
          if (title.length > 0) {
            if (title.length > 24) {
              alert('Title is too long')
              return
            }
            setTodos(prev => [...prev, { id: Math.random() * 100, title, completed: false }]);
            setTitle('');
          }
        }}>
          <MaterialCommunityIcons name="plus-circle" size={40} color="black" />
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    AddTodoContainer: {
        height: 60,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
    },
    input: {
        color: '#000',
        backgroundColor: '#fff',
        height: 40,
        width: '80%',
        padding: 10,
        borderRadius: 5,
        borderColor: '#000',
        borderWidth: 1,
    },
    button: {
      height: 40,
      width: 40,
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
    }
})