import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import { useFonts } from "expo-font";
import { useRouter } from "expo-router";

const screenWidth = Dimensions.get("window").width;

const singers = [
  {
    name: "amarasiri",
    image: require("../assets/images/singers/amarasiri.jpeg"),
  },
  { name: "sunil", image: require("../assets/images/singers/sunil.png") },
  { name: "priya", image: require("../assets/images/singers/priya.png") },
  { name: "amardewa", image: require("../assets/images/singers/amardewa.jpg") },
  {
    name: "sunilperera",
    image: require("../assets/images/singers/sunilperera.jpg"),
  },
  { name: "senaka", image: require("../assets/images/singers/senaka.jpg") },
];

export default function SingerScreen() {
  const router = useRouter();
  const [selectedSinger, setSelectedSinger] = useState<string | null>(null);
  const [fontsLoaded] = useFonts({
    Topic: require("../assets/fonts/JacquesFrancoisRegular.ttf"),
  });

  if (!fontsLoaded) return null;

  const handleNext = () => {
    if (selectedSinger) {
      router.push({
        pathname: "/songs/[singer]",
        params: { singer: selectedSinger },
      });
    } else {
      alert("Please select a singer first!");
    }
  };

  return (
    <View style={styles.contain}>
      <Text style={styles.topic}>Select the singer</Text>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.grid}>
          {singers.map((singer, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.singerBox,
                selectedSinger === singer.name && styles.selectedBox,
              ]}
              onPress={() => setSelectedSinger(singer.name)}
            >
              <Image source={singer.image} style={styles.image} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <View style={styles.btn}>
        <TouchableOpacity
          style={styles.backbtn}
          onPress={() => router.push("/mode")}
        >
          <Text style={styles.btntext}>BACK</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.backbtn,
            { backgroundColor: selectedSinger ? "yellow" : "white" },
          ]}
          onPress={handleNext}
        >
          <Text style={styles.btntext}>NEXT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contain: {
    backgroundColor: "black",
    flex: 1,
    paddingTop: 40,
  },
  topic: {
    color: "white",
    fontFamily: "Topic",
    fontSize: 35,
    textAlign: "center",
    marginBottom: 40,
  },
  scrollContent: {
    alignItems: "center",
    paddingBottom: 20,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    rowGap: 30,
    columnGap: 20,
    width: "100%",
    paddingHorizontal: 10,
  },
  singerBox: {
    width: screenWidth / 2 - 30, // 360/2 = 180-30 = 150
    height: screenWidth / 2 - 30, // 360/2 = 180-30 = 150
    backgroundColor: "black",
    alignItems: "center",
    margin: 5,
    borderColor: "white",
    borderWidth: 2,
  },
  selectedBox: {
    borderColor: "yellow",
    borderWidth: 2,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  btn: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingBottom: 35,
    paddingTop: 25,
  },
  backbtn: {
    width: 120,
    height: 40,
    backgroundColor: "white",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  btntext: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
