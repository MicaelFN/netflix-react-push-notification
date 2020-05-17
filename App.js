import React ,{useEffect} from 'react';
import { Alert } from 'react-native';
import messaging from '@react-native-firebase/messaging';

import Home from './screen/Home'

messaging().setBackgroundMessageHandler(async remoteMessage => {
	console.log('Message handled in the background!', remoteMessage);
  });
  

const App = () => {

	useEffect(() => {
		const unsubscribe = messaging().onMessage(async remoteMessage => {
		  Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
		});
	
		return unsubscribe;
	  }, []);

	return <Home />
}

export default App
