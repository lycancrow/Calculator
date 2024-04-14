import React from "react";
import { StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';



export default function buttons({buttonText, gradientColor1, gradientColor2, opacity, onPress})
 {


    const handlePress = () => {
        //alertMessage(); // Llama a la función de alerta cuando el botón es presionado
        onPress(); // Llama a la función onPress pasada como prop
    };


    return(
        //Con touchable opacity, el boton se opaca cuando es presionado
        <TouchableOpacity style={styles.container} onPress={handlePress}>
            

            <LinearGradient
                // Button Linear Gradient
                colors={[`${gradientColor1}${opacity}`, `${gradientColor2}${opacity}`]} 
                start={{x:0, y:1}}
                end={{x:1, y:0}}
                style={styles.button}
                >
                <Text style={styles.estiloText}>{buttonText}</Text>
             </LinearGradient>
        </TouchableOpacity>
    );
}

function alertMessage(){
    Alert.alert('here, it goes the action')
}


const styles = StyleSheet.create({
    container:{
        //flex: 1,
        width: 80
    },
    estiloText:{
        fontSize: 35,
        color: '#ffffff'
    },
    button: {
        width: '100%',
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50
    }
  });
  