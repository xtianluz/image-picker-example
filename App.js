/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
  Button,
  PermissionsAndroid,
  Platform,
} from 'react-native';

import { launchImageLibrary } from 'react-native-image-picker';

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

const requestExternalWritePermission = async () => {
  if (Platform.OS === 'android') {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'External Storage Write Permission',
          message: 'App needs write permission',
        },
      );
      // If WRITE_EXTERNAL_STORAGE Permission is granted
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn(err);
      alert('Write permission err', err);
    }
    return false;
  } else return true;
};

const handleImagePicker = (type) => {
  let options = {
    mediaType: type,
    maxWidth: 300,
    maxHeight: 550,
    quality: 1,
  }

  launchImageLibrary(options, (response) => {
    console.warn('Response = ', response);

    if (response.didCancel) {
      alert('User cancelled camera picker');
      return;
    } else if (response.errorCode == 'camera_unavailable') {
      alert('Camera not available on device');
      return;
    } else if (response.errorCode == 'permission') {
      alert('Permission not satisfied');
      return;
    } else if (response.errorCode == 'others') {
      alert(response.errorMessage);
      return;
    }
    
  })
}

const App = () => {
  
  const defaultPath = require('./defaultavatar.jpg')
  const [avatarPath, setAvatarPath] = useState('')

  // useEffect(() => {
  //     setAvatarPath(defaultPath)
  // },[])

  


  return (
    
        <View style={styles.container}>
          <TouchableWithoutFeedback
          activeOpacity={1.0}
          style={styles.avatar}
          
          onPress={() => alert('hey')}
          >
            <View>
            <Image 
            style={styles.avatar}
            source={defaultPath}
            />
            </View>
          </TouchableWithoutFeedback>
          <Button 
          title={'Upload'}
          onPress={requestExternalWritePermission}
          />
        </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#bdbbbb',
  },
  avatar:{
    width: width * 0.4,
    height: width * 0.4,
    borderRadius: width * 0.2,
  }
});

export default App;
