import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useRouter } from "expo-router";
import { useFonts } from "expo-font";

export default function FourthPage() {
  const router = useRouter();
  const [selectedPitch, setSelectedPitch] = useState<string | null>(null);
  const [fontsLoaded] = useFonts({
    Topic: require("../assets/fonts/JacquesFrancoisRegular.ttf"),
  });

  if(!fontsLoaded) return null;

  // Go back to the previous page in the history stack
  const handleBack = () => { router.back(); };

  const pitchItems = ['C', 'C#D♭', 'D', 'D#E♭', 'E', 'F', 'F#G♭', 'G', 'G#A♭', 'A', 'A#B♭', 'B'];

  
  return (
    <View style={styles.contain}>
      <Text style={styles.topic}>Select the pitch</Text>

      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
        <Image 
        source={require('../assets/images/back.png')}
        style={styles.back}
        resizeMode="contain"/>
      </TouchableOpacity>

    <View style={styles.grid}>
        {pitchItems.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => setSelectedPitch(item)}>
                <View
                style={[
                    styles.pitchBox,
                    selectedPitch === item && styles.selectedPitch,
                ]}
                >
                    <Text
                    style={[
                        styles.pitchText,
                        selectedPitch === item && styles.selectedpitchText,
                    ]}
                    >
                        {item}
                    </Text>
                </View>
            </TouchableOpacity>
        ))}
    </View>
      
      <View style={styles.btn}>
              <TouchableOpacity
                style={[
                  styles.start,
                  {backgroundColor: selectedPitch ? "yellow" : "white" }
                ]}
                onPress={() => router.push("/startsinging")}
              >
                <Text style={styles.btntext}>START</Text>
              </TouchableOpacity>
            </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: 60,
  },
  topic: {
    color: "white",
    fontFamily: "Topic",
    fontSize: 35,
    textAlign: "center",
    marginBottom: 40,
  },
 backButton: {
    marginTop: -120,
    marginLeft: 20,
 },  
 back: {
    width: 25,
    height: 25,
 },
 grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 15,
    marginTop: 150,
 },
 pitchBox: {
     backgroundColor: 'black',
     width: 80,
     height: 80,
     borderColor: 'white',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
 },
 selectedPitch: {
    borderColor: 'yellow',
 },
 pitchText: {
    color: 'white',
    fontSize: 30,
 },
 selectedpitchText: {
    fontWeight: 'bold',
 },
 btn: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingBottom: 15,
    paddingTop: 70,
  },
  start: {
    width: 150,
    height: 50,
    backgroundColor: "white",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  btntext: {
    fontSize: 25,
    fontWeight: "bold",
  },
});
