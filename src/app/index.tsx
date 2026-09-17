import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, World</Text>
      <Link href="/about" style={styles.button}>
        Go to about us
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    fontSize: 18,
    color: "#fff",
    backgroundColor: "#0084ff",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0084ff",
  },
  text: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
});
