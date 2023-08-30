import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Routes from './src/routes/Routes';


export default function App(): JSX.Element {
  return (
      <SafeAreaView style={styles.container}>
        <Routes />
      </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex:1,

    backgroundColor:'rgba(7,26,93,255)'
  },
});
