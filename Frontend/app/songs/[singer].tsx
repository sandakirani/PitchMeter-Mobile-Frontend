import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useFonts } from "expo-font";

// You can store songs for each singer in an object
const songDatabase = {
  amarasiri: [
    "Oba apple malak wage",
    "Iki gasa hadana",
    "Hanthanat payana sanda",
    "Mage punchi rosa male",
    "Snehaye ",
  ],
  sunil: [
    "Pura poya handata",
    "Ada Deegeka Giya Nuba Mata",
    "Ahasa Polawa Watapitawa",
    "Lenchina Mage Nangiye",
    "Mage Amal Biso Dora Arinnepa",
  ],
  priya: [
    "Asurin Mideela",
    "Atha Ran Wiman",
    "Ratakin Eha",
    "Sudu Paravi Rena",
    "Lihinin Rena Piya Salanne",
  ],
  amardewa: [
    "Nim Him Sewwa",
    "Etha kadukara himaw arane",
    "Wakkada langa",
    "Aradhana",
    "Heena hathak meda",
  ],
  sunilperera: [
    "Amma Amma Me Mata",
    "Aiyai Malli",
    "Koththa Malli",
    "Linda Langa Sangamaya",
    "Lunu Dehi-Api Denna Ekweela",
  ],
  senaka: [
    "Api sanasille",
    "Sanasennam ma",
    "Api kawruda",
    "Sanasuma",
    "Sihina mawannathi",
  ],
};

export default function SongList() {
  const router = useRouter();
  const { singer } = useLocalSearchParams(); // Extract singer parameter from URL
  const [selectedSong, setSelectedSong] = useState<string | null>(null);
  const [fontsLoaded] = useFonts({
    Topic: require("../../assets/fonts/JacquesFrancoisRegular.ttf"),
  });

  if (!fontsLoaded) return null;
  const songs = songDatabase[singer as keyof typeof songDatabase] || []; // Get the songs based on the singer's name

  return (
    <View style={styles.contain}>
      <Text style={styles.topic}>Select the song</Text>

      <FlatList
        data={songs}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => setSelectedSong(item)}>
            <View
              style={[
                styles.songbox,
                selectedSong === item && styles.selectedSong,
              ]}
            >
              <Text style={[styles.songText, selectedSong === item && styles.selectedSongText]}>{item}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

      <View style={styles.btn}>
        <TouchableOpacity
          style={styles.backbtn}
          onPress={() => router.push("/singer")}
        >
          <Text style={styles.btntext}>BACK</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.backbtn,
            { backgroundColor: selectedSong ? "yellow" : "white" },
          ]}
          onPress={() => {
            if (selectedSong) {
              router.push("/pitch");
            } else {
              alert("Please select a song first!");
            }
          }}
        >
          <Text style={styles.btntext}>NEXT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: 40,
  },
  topic: {
    color: "white",
    fontFamily: "Topic",
    fontSize: 35,
    textAlign: "center",
    marginBottom: 40,
  },
  songbox: {
    borderRadius: 30,
    backgroundColor: "black",
    borderColor: "white",
    borderWidth: 2,
    padding: 15,
    marginVertical: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  selectedSong: {
    borderColor: "yellow",
  },
  songText: {
    fontSize: 25,
    color: "white",
  },
  selectedSongText: {
    fontWeight: 'bold',
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

