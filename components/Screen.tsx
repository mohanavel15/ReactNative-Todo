import { StyleSheet, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'

export default function Screen({ children }: { children: React.ReactNode }) {
  return (
    <SafeAreaView style={styles.screen}>
      { children }
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    }
})