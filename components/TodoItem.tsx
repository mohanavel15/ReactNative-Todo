import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { TodoItemModel } from '../model'

export default function TodoItem({ todo, setTodos }: { todo: TodoItemModel, setTodos: React.Dispatch<React.SetStateAction<TodoItemModel[]>> }) {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20}}>{ todo.title }</Text>
      <View style={styles.ButtonContainer}>
        <TouchableOpacity onPress={() => {
          setTodos(prev => prev.map(item => item.id === todo.id ? { ...item, completed: !item.completed } : item));
        }}>
          { !todo.completed && <MaterialCommunityIcons name="checkbox-blank-outline" size={32} color="black" /> }
          { todo.completed && <MaterialCommunityIcons name="checkbox-marked" size={32} color="black" /> }
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => {setTodos(prev => prev.filter(item => item.id !== todo.id)) }}>
            <MaterialCommunityIcons name="trash-can" size={32} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 60,
        backgroundColor: 'dodgerblue',
        margin: 5,
        borderRadius: 12,
        padding: 16,
    },
    ButtonContainer: {
      width: 80,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    }
})