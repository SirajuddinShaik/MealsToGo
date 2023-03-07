import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { Searchbar } from "react-native-paper";
import { StatusBar, StyleSheet, SafeAreaView, Text, View } from "react-native";
import { RestaurentsScreen } from "./src/features/restaurents/screens/restarants.screen";

export default function App() {
  return (
    <>
      <RestaurentsScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}
