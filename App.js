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
} from 'react-native';


const height = Dimensions.get('window').height
const width = Dimensions.get('window').width



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
          
          onPress={() => alert('asdf')}
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
          onPress={() => alert('asdf')}
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
