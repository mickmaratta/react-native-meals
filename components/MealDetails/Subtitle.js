import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Subtitle = ({children}) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
    subtitleContainer: {
        marginVertical: 4,
        marginHorizontal: 12,
        padding: 6,
        borderBottomWidth: 2,
        borderBottomColor: "black",
      },
      subtitle: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: 'center',
      },
});
