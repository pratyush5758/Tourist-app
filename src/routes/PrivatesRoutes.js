import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DetailsScreen, SearchScreen } from '../screen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator();
const PrivatesRoutes = () => {
  return (
    // <SearchScreen/>
    <Stack.Navigator initialRouteName='SearchScreen'>
    <Stack.Screen name='SearchScreen' component={SearchScreen}/>
    <Stack.Screen name='DetailsScreen' component={DetailsScreen} options={{headerShown:false}}/>

    </Stack.Navigator>

  )
}

export default PrivatesRoutes

const styles = StyleSheet.create({})