import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput, Alert } from 'react-native';

export default function App() {
    return(
        <View styles = {styles.container}>
            <Text>Hola mundo</Text>
        </View>
        
    )
}


const styles = StyleSheet.create({
    container:{
        flex : 1,
        alignItems: 'center',
        backgroundColor : '#D2E5FF'
    },
});

