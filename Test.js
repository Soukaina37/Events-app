import React from 'react';
import { Image,  StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import logo from './assets/profile.jpg'; 

export default function Test() {
  return (
    <View style={styles.container}>
        <Text style={{color: '#888', fontSize: 18}}> 
        Profile de Soukaina 
      </Text>

      <Image source={logo} style={{ width: 305, height: 159, borderColor:"#657864", borderWidth:4 }} /> 
      <TouchableOpacity
        onPress={() => alert('Bonjour Soukaina comment çava ?')}
     style={styles.button}>
        <Text style={{ fontSize: 20, color: '#fff' }}>Tapez !</Text>
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "blue",
        padding: 20,
        borderRadius: 5,
      },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});