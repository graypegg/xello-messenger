import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

import { Landing } from './screens/Landing/Landing';
import { Messages } from './screens/Messages/Messages';
import { Message } from './screens/Message/Message';
import { useSelector } from 'react-redux';
import { isLoggedIn } from './store/user/user.selectors';

export type RootStackParamList = {
  Landing: undefined,
  Messages: undefined,
  Message: { id: number }
}

const Stack = createStackNavigator<RootStackParamList>();

export const Navigation: React.FC = () => {
  const loggedIn = useSelector(isLoggedIn)

  return (
    <NavigationContainer>
      <Stack.Navigator>
        { loggedIn
          ? <>
            <Stack.Screen name="Messages" component={Messages} />
            <Stack.Screen name="Message" component={Message} />
          </> : <>
            <Stack.Screen name="Landing" options={{ headerShown: false }} component={Landing} />
          </>
        }
      </Stack.Navigator>
    </NavigationContainer>
  )
}