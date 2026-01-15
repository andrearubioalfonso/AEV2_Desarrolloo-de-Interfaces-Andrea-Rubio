import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

class CalculadoraIMC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peso: '',
      altura: '',
      resultado: '',
      color: 'green',
    };
  }

  calcularIMC = () => {
    const p = parseFloat(this.state.peso);
    const a = parseFloat(this.state.altura);

    if (!p || !a) return;

    const imc = p / (a * a);
    let texto = '';
    let textoColor = 'green';

    if (imc < 18.5) texto = 'Peso insuficiente';
    else if (imc < 25) texto = 'Normopeso';
    else if (imc < 27) texto = 'Sobrepeso grado I';
    else if (imc < 30) texto = 'Sobrepeso grado II (preobesidad)';
    else if (imc < 35) texto = 'Obesidad de tipo I';
    else if (imc < 40) texto = 'Obesidad de tipo II';
    else if (imc < 50) texto = 'Obesidad de tipo III (mórbida)';
    else texto = 'Obesidad de tipo IV (extrema)';

    if (imc < 27) textoColor = 'green';
    else if (imc < 40) textoColor = 'orange';
    else textoColor = 'red';

    this.setState({ resultado: texto, color: textoColor });
  };

  actualizaPeso = (peso) => {
    this.setState({ peso });
  };

  actualizaAltura = (altura) => {
    this.setState({ altura });
  };

  render() {
    return (
      <View style={styles.card}>
        <Text style={styles.subtitulo}>Datos</Text>

        <Text style={styles.label}>PESO</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={this.state.peso}
          onChangeText={this.actualizaPeso}
        />

        <Text style={styles.label}>ALTURA</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={this.state.altura}
          onChangeText={this.actualizaAltura}
        />

        <TouchableOpacity style={styles.boton} onPress={this.calcularIMC}>
          <Text style={styles.botonTexto}>Calcular IMC</Text>
        </TouchableOpacity>

        {this.state.resultado !== '' && (
          <View style={styles.resultado}>
            <Text>Resultado</Text>
            <Text style={{ color: this.state.color }}>
              {this.state.resultado}
            </Text>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 5,
  },
  subtitulo: {
    color: 'red',
    fontSize: 20,
    marginBottom: 10,
  },
  label: {
    color: 'blue',
    marginTop: 10,
  },
  input: {
    borderBottomWidth: 1,
    padding: 5,
  },
  boton: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#2196F3',
    padding: 10,
    alignItems: 'center',
    borderRadius: 3,
  },
  botonTexto: {
    color: '#2196F3',
  },
  resultado: {
    marginTop: 15,
  },
});

export default CalculadoraIMC;
