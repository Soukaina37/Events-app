import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Login from './Components/Event';



export default function App() {
  return (
    <>
      <StatusBar style='default'/>
      <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Login />
      </View>
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
