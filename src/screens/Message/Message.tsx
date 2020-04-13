import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Screen } from '../../Screen'
import { StackNavigationProp } from '@react-navigation/stack'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { RouteProp } from '@react-navigation/native'
import { RootStackParamList } from '../../Navigation'

type MessageProps = {
  navigation: StackNavigationProp<
    RootStackParamList,
    'Message'
  >,
  route: RouteProp<RootStackParamList, 'Message'>
}

export const Message: React.FC<MessageProps> = (props) => {
  const message = useSelector((state: RootState) => state.messages.inbox.find(message => message.id === props.route.params.id))

  if (message) {
    return (
      <Screen>
        <Text>{ message.body }</Text>
      </Screen>
    )
  } else {
    return (
      <Screen>
        <Text>:(</Text>
      </Screen>
    )
  }
}

const styles = StyleSheet.create({
})
