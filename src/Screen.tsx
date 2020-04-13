import React from 'react'
import { StyleSheet, View } from 'react-native'

type ScreenProps = {}

export const Screen: React.FC<ScreenProps> = (props) => {
  return (
    <View style={styles.container}>
      { props.children }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%'
  },
})
