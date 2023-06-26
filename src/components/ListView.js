import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const ListView = (props) => {
  return (
    <View style={styles.list}>
      <Text>List</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    backgroundColor: "blue",
    flex: 1,
    padding: 16,
  },
});
