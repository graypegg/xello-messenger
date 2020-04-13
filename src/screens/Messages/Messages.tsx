import React from 'react'
import { StyleSheet, Button, FlatList } from 'react-native'
import { Screen } from '../../Screen'
import { StackNavigationProp } from '@react-navigation/stack'
import { hydrateInboxThunk } from '../../store/messages/messages.thunks'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store'
import { MessageRow } from './MessageRow'
import { RootStackParamList } from '../../Navigation'

type MessagesProps = {
  navigation: StackNavigationProp<
    RootStackParamList,
    'Messages'
  >
}

export const Messages: React.FC<MessagesProps> = (props) => {
  const inbox = useSelector((state: RootState) => state.messages.inbox)
  const refreshing = useSelector((state: RootState) => state.messages.loading)
  const dispatch = useDispatch()

  const refresh = () => dispatch(hydrateInboxThunk({ from: 0, to: 200 }))

  return (
    <Screen>
      <FlatList
        data={ inbox }
        renderItem={ ({item}) => <MessageRow message={item}/> }
        keyExtractor={ message => message.id.toString() }
        onRefresh={ refresh }
        refreshing={ refreshing }/>
      <Button title="Get" onPress={refresh} />
    </Screen>
  )
}

const styles = StyleSheet.create({
})
