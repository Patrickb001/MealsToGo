import React from "react";
import { StyleSheet, Platform, SafeAreaView, StatusBar } from "react-native";
import { SearchView } from "./src/components/SearchView";
import { ListView } from "./src/components/ListView";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <SearchView />
        <ListView />
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "andriod" && StatusBar.currentHeight,
  },
});
