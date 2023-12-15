import {View, Text, Alert} from 'react-native';
import React, {useEffect} from 'react';
import messaging from '@react-native-firebase/messaging';

export default function App() {
  const getToken = async () => {
    const token = await messaging().getToken();
    console.log('token', token);
  };
  useEffect(() => {
    console.log('welcome to app');
    getToken();
  }, []);

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);

  return (
    <View>
      <Text>App</Text>
    </View>
  );
}