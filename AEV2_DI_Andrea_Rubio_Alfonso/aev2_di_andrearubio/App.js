import { View, Text, StyleSheet } from 'react-native';
import CalculadoraIMC from './components/CalculadoraIMC';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora IMC</Text>
      <CalculadoraIMC />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6A1B9A',
    padding: 20,
    justifyContent: 'center',
  },
  titulo: {
    color: 'red',
    fontSize: 26,
    textAlign: 'center',
    marginBottom: 10,
  },
});
