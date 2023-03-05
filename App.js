import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,SafeAreaView, View,Platform,StatusBar as StBar } from 'react-native';
import { colors } from "./src/utils/colors";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{paddingBottom:10,backgroundColor:colors.green,padding:16}}>Search</Text>
      <Text style={{backgroundColor:colors.blue,flex:1,padding:16}}>List</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS ==="android" ?StBar.currentHeight:0,
    

  },
});
