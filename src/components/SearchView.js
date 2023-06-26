import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const SearchView = () => {
  return (
    <View style={styles.search}>
      <Text>Search</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  search: {
    backgroundColor: "green",
    padding: 16,
    justifyContent: "center",
  },
});
