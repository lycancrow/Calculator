import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ButtonCalc from '../components/Buttons';
import { useCalculatorViewModel } from '../viewModel/CalculatorViewModel';

export default function App() {
    const hexaColor1 = '#000000';
    const hexaColor2 = '#FFFFFF';
    const opacity = 70;

    const { displayText, handleButtonPress } = useCalculatorViewModel();

    // Función para renderizar una fila de botones
    const renderButtonRow = (buttons) => (
        <View style={[styles.row,  {marginTop: 8}]}>
            {buttons.map((number, index) => (
                <TouchableOpacity key={number} style={[index !== 0 && { marginLeft: 10 }]}>
                    <ButtonCalc
                        buttonText={number.toString()}
                        gradientColor1={hexaColor1.toString()}
                        gradientColor2={hexaColor2.toString()}
                        opacity={opacity}
                        onPress={() => handleButtonPress(number.toString())}
                    />
                </TouchableOpacity>
            ))}
        </View>
    );

    
    return (
        <View style={styles.container}>
            <LinearGradient
                // Background Linear Gradient
                colors={['#FFFFFF', 'transparent']}
                style={styles.background}
            />
            <Text style={styles.TextInput}>{displayText}</Text>
            {renderButtonRow(['√', 'π', 'exp', '!'])}
            {renderButtonRow(['AC', '(', ')', '÷'])}
            {renderButtonRow([7, 8, 9, '*'])}
            {renderButtonRow([4, 5, 6, '-'])}
            {renderButtonRow([1, 2, 3, '+'])}
            {renderButtonRow([0, '.', 'DEL', '='])}
        </View>
    );
}

function buttonAction() {
    Alert.alert('Botón presionado');
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#D2E5FF',
    },
    background: {
        position: 'absolute',
        height: '30%',
        width: '200%',
        transform: [{ rotate: '-25deg' }], // Rotar el gradiente 45 grados
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10,
    },
    TextInput: {
        backgroundColor: '#FFFFFF',
        paddingStart: 25,
        fontSize: 60,
        borderRadius: 25,
        padding: 13,
        width: '90%',
        color: '#424242',
        height: '30%',
        marginTop: 70,
        textAlign: 'right',
        textAlignVertical: 'bottom',
    },
});
