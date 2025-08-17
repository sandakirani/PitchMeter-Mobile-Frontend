import React from "react";
import { View, StyleSheet, Text } from 'react-native';

export default function startsinging(){
    return(
        <View style={styles.contain}>
            <Text style={styles.topic}>START RECORDING !!</Text>
        </View>
    );
}

const styles= StyleSheet.create({
    contain: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'black',
    },
    topic: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    },
})