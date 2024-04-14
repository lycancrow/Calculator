import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ButtonCalc from '../components/Buttons';


export default function App() {

    const hexaColor1 = '#000000'
    const hexaColor2 = '#FFFFFF'
    const opacity = 70

    // this const, stores the value to show
    const [displayText, setDisplayText] = useState(''); 

    const factorial = (num) => {
        if (num === 0 || num === 1) {
          return 1;
        } else {
          return num * factorial(num - 1);
        }
      };

    // this const refresh the value in the text
    const handleButtonPress = (value) => {
        if (value === 'AC') {
            setDisplayText(''); // Borrar el contenido del display si el valor es 'AC'
        } else if (value === 'DEL') {
            
            setDisplayText(displayText.slice(0, -1));
          } else if (value === '=') {
            try {
                let expression = displayText;

                expression = expression.replace('√', 'Math.sqrt(');
                expression = expression.replace('π', '3.14159265');
                expression = expression.replace('÷', '/');
                expression = expression.replace(/(\d+)exp(\d+)/g, 'Math.pow($1, $2)');
                expression = expression.replace(/(\d+)!/g, (_, num) => {
                    const factorialResult = factorial(parseInt(num));
                    return factorialResult.toString();
                  });
                  

                if (expression.includes('Math.sqrt(')) {
                    expression += ')';
                }

                
                const result = eval(expression);
                setDisplayText(result.toString()); 



            } catch (error) {
                setDisplayText('Error'); 
            }
        } else {
            setDisplayText(displayText + value);
        }
    };
    

    return(
        <View style = {styles.container}>

            
            <LinearGradient
                // Background Linear Gradient
                colors={['#FFFFFF', 'transparent']}
                style={styles.background}
            />

            <Text style = {styles.TextInput}>{displayText}</Text>


            <View style = {[styles.row, {marginTop: 50}]}>
                {['√', 'π', 'exp', '!'].map((number, index) => (
                <TouchableOpacity
                key={number}
                style = {[index !== 0, {marginLeft: 10}]}>
                <ButtonCalc buttonText={number.toString()}  gradientColor1={hexaColor1.toString()} gradientColor2={hexaColor2.toString() }  opacity={opacity} onPress={() => handleButtonPress(number.toString())} />
                </TouchableOpacity>
                 ))}
            </View>

            <View style = {styles.row}>
                {['AC', '(', ')', '÷'].map((number, index) => (
                <TouchableOpacity
                key={number}
                style = {[index !== 0, {marginLeft: 10}]}>
                 <ButtonCalc buttonText={number.toString()}  gradientColor1={hexaColor1.toString()} gradientColor2={hexaColor2.toString() }  opacity={opacity} onPress={() => handleButtonPress(number.toString())}/>
                </TouchableOpacity>
                 ))}
            </View>

         
            <View style = {styles.row}>
                {[7, 8, 9, '*'].map((number, index) => (
                <TouchableOpacity
                key={number}
                style = {[index !== 0, {marginLeft: 10}]}>
                 <ButtonCalc buttonText={number.toString()}  gradientColor1={hexaColor1.toString()} gradientColor2={hexaColor2.toString() }  opacity={opacity} onPress={() => handleButtonPress(number.toString())}/>
                </TouchableOpacity>
                 ))}
            </View>

         
            <View style = {styles.row}>
                {[4, 5, 6, '-'].map((number, index) => (
                <TouchableOpacity
                key={number}
                style = {[index !== 0, {marginLeft: 10}]}>
                 <ButtonCalc buttonText={number.toString()}  gradientColor1={hexaColor1.toString()} gradientColor2={hexaColor2.toString() }  opacity={opacity} onPress={() => handleButtonPress(number.toString())}/>
                </TouchableOpacity>
                 ))}
            </View>

         
            <View style = {styles.row}>
                {[1, 2, 3, '+'].map((number, index) => (
                <TouchableOpacity
                key={number}
                style = {[index !== 0, {marginLeft: 10}]}>
                 <ButtonCalc buttonText={number.toString()}  gradientColor1={hexaColor1.toString()} gradientColor2={hexaColor2.toString() }  opacity={opacity} onPress={() => handleButtonPress(number.toString())}/>
                 </TouchableOpacity>
                 ))}
            </View>


            <View style = {styles.row}>
                {[0, '.', 'DEL', '='].map((number, index) => (
                <TouchableOpacity
                key={number}
                style = {[index !== 0, {marginLeft: 10}]}>
                 <ButtonCalc buttonText={number.toString()}  gradientColor1={hexaColor1.toString()} gradientColor2={hexaColor2.toString() }  opacity={opacity} onPress={() => handleButtonPress(number.toString())}/>
                
                </TouchableOpacity>
                 ))}
            </View>

            
        </View>
        
    )
}

function buttonAction(){
    Alert.alert('Botón presionado')
  }

const styles = StyleSheet.create({
    container:{
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
        marginBottom: 10
      },

      column: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginBottom: 10,
      },
    TextInput:{
        //borderWidth: 1,
        backgroundColor: '#FFFFFF',
        paddingStart: 25,
        fontSize: 60,
        borderRadius: 25,
        padding: 13,
        width: '90%',
        color: '#424242',
        height: '30%',
        marginTop: 70,
        textAlign: 'right', // Alinea el texto a la derecha
        textAlignVertical: 'bottom', // Alinea el texto en la parte inferior
    }
});

