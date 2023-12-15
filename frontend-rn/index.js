/**
 * @format
 */
import React, {useEffect} from 'react';
import {AppRegistry} from 'react-native';
import {View, Text, Alert} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import messaging from '@react-native-firebase/messaging';

const checkNotificationPermission = async () => {
    try {
      const authStatus = await messaging().hasPermission();
      console.log('Permission status:', authStatus);
  
      if (authStatus === messaging.AuthorizationStatus.AUTHORIZED) {
        console.log('Notification permission is granted.');
        // You can proceed to handle notifications here
      } else {
        console.log('Notification permission is not granted.');
        // You may choose to request permission at this point
      }
    } catch (error) {
      console.error('Error checking notification permission:', error);
    }
  };
// Call the function where needed
checkNotificationPermission();



// Register background handler
messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
});

// Handle the initial notification when the app is opened
messaging().getInitialNotification().then(remoteMessage => {
  if (remoteMessage) {
    // Extract the notification data
    const { notification } = remoteMessage;
    if (notification) {
      // Show an alert with the notification message
      Alert.alert(notification.title, notification.body);
    }
  }
});

AppRegistry.registerComponent(appName, () => App);
