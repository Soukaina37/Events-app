import React, { useState } from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import { Button,Input } from 'react-native-elements'//expo install react-native-elements


export default function Login() {

    const [ email,] = useState();

    return (
        <View  style={styles.container}>
            <ImageBackground source={require('./assets/bg.jpg')} resizeMode="cover" style={styles.backgroundImage}>

             <Input
                placeholder="Ecrivez votre mail svp!"
                inputStyle={styles.inputS}
                containerStyle={{
                    width: "90%",

                }}
                inputContainerStyle={{borderBottomWidth: 0}}
            />
            <Input
                placeholder='Ecrivez votre mot de passe!'
                inputStyle={styles.inputS}
                containerStyle={{
                    width: "90%",
                }}
                inputContainerStyle={{borderBottomWidth: 0}}
            />
            <Button
                title="Log in"
            />
            </ImageBackground>
           
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
    inputS:{
        height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#00000033',

    },
    backgroundImage:{
        flex: 1,
        alignItems: "center",
        width: "100%",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }

})
