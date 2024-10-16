import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function Detalhes(props) {
    return (
        <View style={styles.container}>
            <View style={styles.modalContainer}>
                
                <View style={styles.bgImagem}>
                    <Image source={props.imagem} style={styles.imagem} />
                </View>

                <Text style={styles.resultadoText}>{props.resultado}</Text>

                <Text style={{color: "#fdfdfd", fontSize: 22, fontWeight: 'bold'}}>Com os preços:</Text>
                <Text style={{color: "#fdfdfd", fontSize: 18}}>Álcool: {props.alcool}</Text>
                <Text style={{color: "#fdfdfd", fontSize: 18, marginBottom: 30}}>Gasolina: {props.gasolina}</Text>

                <TouchableOpacity style={styles.btnBack} onPress={props.voltar}>
                    <Text style={{color: '#E2424C', fontSize: 18, fontWeight: 'bold'}}>Calcular novamente</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00000090',
    },
    modalContainer: {
        width: '85%',
        backgroundColor: '#333',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    resultadoText: {
        color: '#4FC978',
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center'
    },
    btnBack: {
        padding: 10,
        backgroundColor: '#333',
        borderRadius: 5,
        borderColor: '#E2424C',
        borderWidth: 2,
        width: '70%',
        alignItems: 'center'
    },
    bgImagem: {
        backgroundColor: "#101215",
        borderRadius: 100,
        height: 200,
        width: 200,
        alignItems: 'center',
        paddingLeft: 33,
        justifyContent: 'center',
      },
      imagem: {
        height: 130,
        width: 130,
      },
});
