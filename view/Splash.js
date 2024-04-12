import React, { Dispatch } from "react";
import LottieView from "lottie-react-native";
import { StyleSheet, View } from "react-native";



export default function Splash() {
    return (
        <View style={styles.container}>
            <LottieView 
                source={require("../assets/animation_calculator.json")}
                autoPlay
                loop={false}
                resizeMode="cover"
                style={styles.animation}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#D2E5FF'
    },
    title: {
      fontSize: 60,
      fontWeight: 'bold'
    },
    animation: {
      width: 400,
      height: 400,
    },
});
