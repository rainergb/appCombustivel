import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Modal, Alert } from 'react-native';
import Detalhes from './src/Detalhes';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [gasolina, setGasolina] = useState('');
  const [alcool, setAlcool] = useState('');
  const [resultado, setResultado] = useState('');
  const [imagem, setImagem] = useState(require("./src/img/gas-station.png"));

  function Resultado(){
    if (alcool === '' || gasolina === '') {
      Alert.alert(
        "Campos Vazios",
        "Por favor, preencha os valores de álcool e gasolina para calcular.",
        [{ text: "OK" }]
      );
      return;
    }  

    let res = alcool / gasolina;

    if( res < 0.7 ){

      setResultado("Compensa usar álcool");
      setImagem(require("./src/img/fuel-alcohol.png"));
    } else {
      setResultado("Compensa usar gasolina");
      setImagem(require("./src/img/gas-fuel.png"));
    }
    setModalVisible(true);
  }

  function voltar() {
    setModalVisible(false);
    setAlcool('');
    setGasolina('');
  }

  return(
    <View style={styles.container}>
      <View style={styles.bgImagem}>
        <Image source={require("./src/img/gas-station.png")} style={styles.imagem} />
      </View>
      <Text style={styles.titulo}>Qual a melhor opção?</Text>
      <View style={styles.areaEntrada}>
        <View style={styles.entrada}>
          <Text style={styles.pergunta}>Álcool (preço por litro):</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex. 4.60"
            keyboardType="numeric"
            value={alcool}
            onChangeText={(valor) => setAlcool(valor)}
          />
        </View>
        <View style={styles.entrada}>
          <Text style={styles.pergunta}>Gasolina (preço por litro):</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex. 7.30"
            keyboardType="numeric"
            value={gasolina}
            onChangeText={(valor) => setGasolina(valor)}
          />
        </View>
        <TouchableOpacity style={styles.btn} onPress={Resultado}>
          <Text style={{ color: "#fdfdfd", fontSize: 25, fontWeight: 'bold' }}>Calcular</Text>
        </TouchableOpacity>

        <Modal animationType='slide' visible={modalVisible} transparent={true}>
          <Detalhes
            resultado={resultado}
            alcool={alcool}
            gasolina={gasolina}
            imagem={imagem}
            voltar={voltar}
          />
        </Modal>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101215',
    paddingTop: 40,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  bgImagem: {
    backgroundColor: "#fdfdfd",
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
  titulo: {
    color: '#fdfdfd',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  areaEntrada: {
    width: '100%',
    alignItems: 'center',
  },
  entrada: {
    width: '90%',
    marginBottom: 15,
  },
  pergunta: {
    color: '#fdfdfd',
    fontSize: 18,
    alignSelf: 'flex-start',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#D9D9D9',
    borderWidth: 1,
    borderColor: '#E3E3E3',
    width: '100%',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  btn: {
    backgroundColor: "#E2424C",
    width: '90%',
    alignItems: 'center',
    padding: 8,
    borderRadius: 5,
    marginTop: 8
  }
});
