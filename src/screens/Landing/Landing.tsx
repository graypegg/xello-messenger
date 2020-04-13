import React, { useState, useRef, useEffect } from 'react'
import { Screen } from '../../Screen'
import { TextInput, Button, StyleSheet, View } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux';
import { loginThunk } from '../../store/user/user.thunks';
import { isLoggedIn } from '../../store/user/user.selectors';
import { RootStackParamList } from '../../Navigation';

type LandingProps = {
  navigation: StackNavigationProp<
    RootStackParamList,
    'Landing'
  >,
}

export const Landing: React.FC<LandingProps> = (props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const passwordRef = useRef<TextInput>(null);

  const dispatch = useDispatch()

  function submit () {
    dispatch(loginThunk({ username, password }))
  }

  return (
    <Screen>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="username"
          value={username}
          onChangeText={ setUsername }
          autoCompleteType="username"
          autoFocus={true}
          returnKeyType="next"
          autoCapitalize="none"
          onSubmitEditing={() => {passwordRef.current?.focus()}}
          blurOnSubmit={false}>
        </TextInput>
        <TextInput
          style={styles.input}
          placeholder="password"
          value={password}
          onChangeText={ setPassword }
          autoCompleteType="password"
          secureTextEntry={true}
          ref={passwordRef}
          returnKeyType="go"
          onSubmitEditing={submit}>
        </TextInput>
        <Button title="Log In" onPress={submit} />
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    padding: 30
  },
  input: {
    height: 25,
    fontSize: 20
  }
})