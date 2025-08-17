import React from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Text
} from "react-native";
import { useRouter } from "expo-router";

export default function ModeScreen() {
  const router = useRouter();

  return (
    <View style={styles.contain}>
      <TouchableOpacity onPress={() => router.push("/singer")}>
        <View style={styles.spotlight}>
          <ImageBackground
            source={require("../assets/images/spotlight.jpg")}
            resizeMode="cover"
            style={styles.image}
          >
            <Text style={styles.spottext}>SPOTLIGHT MODE</Text>
          </ImageBackground>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/singer")}>
        <View style={styles.studio}>
          <ImageBackground
            source={require("../assets/images/studio.png")}
            resizeMode="cover"
            style={styles.image}
          >
            <Text style={styles.studiotext}>STUDIO MODE</Text>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  spotlight: {
    width: 300,
    height: 200,
    borderColor: "white",
    borderWidth: 3,
    borderRadius: 30,
    overflow: "hidden", // Needed to clip corners with borderRadius
    backgroundColor: "black",
  },
  studio: {
    width: 300,
    height: 200,
    borderColor: "white",
    borderWidth: 3,
    borderRadius: 30,
    overflow: "hidden", // Needed to clip corners with borderRadius
    backgroundColor: "black",
    marginTop: 70,
  },
  image: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  spottext: {
    color: "white",
    fontSize: 20,
    marginTop: 30,
  },
  studiotext: {
    color: 'white',
    marginLeft: 140,
    fontSize: 20,
  },
});
