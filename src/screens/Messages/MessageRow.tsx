import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { Message } from '../../store/messages/types'
import UnreadIcon from '../../../assets/icons/unread.svg'
import SentIcon from '../../../assets/icons/sent.svg'
import { useNavigation } from '@react-navigation/native'

type MessageRowProps = {
  message: Message
}

export const MessageRow: React.FC<MessageRowProps> = (props) => {
  const navigation = useNavigation()

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={ () => navigation.navigate('Message', {id: props.message.id}) }>
      <View style={styles.container}>
        { props.message.status.viewed ? <SentIcon height={14} width={14} /> : <UnreadIcon height={14} width={14} /> }
        <Image style={styles.avatar} source={{ uri: props.message.sender.avatar }}/>
        <View style={styles.previewContainer}>
          <Text style={styles.name} numberOfLines={1}>{ props.message.sender.name }</Text>
          <Text style={styles.body} numberOfLines={1}>{ props.message.body }</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 12,
    paddingLeft: 15,
    paddingRight: 15,
    width: '100%'
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 100,
    marginLeft: 15
  },
  previewContainer: {
    marginLeft: 15,
    flexBasis: 150,
    flexGrow: 1
  },
  name: {
    fontWeight: 'bold',
    marginBottom: 2
  },
  body: {
    color: '#444444'
  }
})
