/* eslint-disable react/react-in-jsx-scope */
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Platform,
  StatusBar as StBar,
} from "react-native";
import { colors } from "./src/utils/colors";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.search}>Search</Text>
      <Text style={styles.list}>List</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StBar.currentHeight : 0,
  },
  search: {
    paddingBottom: 10,
    backgroundColor: colors.green,
    padding: 16,
  },
  list: { backgroundColor: colors.blue, flex: 1, padding: 16 },
});
