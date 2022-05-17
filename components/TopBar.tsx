import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'
import React from 'react'

function TopBarButton({ title, onPress }: { title: string, onPress: () => void }) {
    return (
        <TouchableHighlight underlayColor={'#fff'} onPress={onPress} style={styles.button}>
            <Text style={{fontSize: 24, fontWeight: 'bold'}}>{title}</Text>
        </TouchableHighlight>
    )
}

export default function TopBar({ setScreen }: { setScreen: React.Dispatch<React.SetStateAction<number>> }) {
  return (
    <View style={styles.topbar}>
      <TopBarButton title='Todos' onPress={() => setScreen(0) } />
      <TopBarButton title='Completed' onPress={() => setScreen(1)}/>
    </View>
  )
}

const styles = StyleSheet.create({
    topbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 60,
        backgroundColor: '#fff',
        borderBottomColor: '#000',
        borderBottomWidth: 1,
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'dodgerblue',
        borderRadius: 5,
        margin: 5,
    }
})