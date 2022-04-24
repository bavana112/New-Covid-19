//This page is used to show the user before initialization with an icon
import { View, Text } from 'react-native'
import React from 'react'
import SplashScreen from 'react-native-splash-screen'
import {useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
const Splash = () => { 
  const navigation = useNavigation()
    useEffect(() => {
     //splash screen will stay for 1 second
        setTimeout(() => {
          SplashScreen.hide();
          navigation.navigate('login')
        }, 1000);
      }, []);
  //splash screen will hide after 1 second and navigates to login page automatically
  return (
    <View>
     
    </View>
  )
}

export default Splash
