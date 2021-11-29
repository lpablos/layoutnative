/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const App = () => {
  return (
    <>
      <View style={styles.contenedor}>
        <View style={styles.caja1}></View>
        <View style={styles.caja2}></View>
        <View style={styles.caja3}></View>
        <View style={styles.caja4}></View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: 'cornflowerblue',
    // Toma todo lo alto de la pantalla
    flex: 1,
    // Cambias la direccion del flex box por default estan en columnas
    // flexDirection: 'row',
    // flexDirection: 'row-reverse',
    // flexDirection: 'columns', // defualt
    // flexDirection: 'column-reverse',
  },
  caja1: {
    padding: 20,
    backgroundColor: 'navy',
    // Indica que tomara todo el espacio sobrante dependiente del padre
    flex: 1,
  },
  caja2: {
    padding: 20,
    backgroundColor: 'yellow',
    // Tomara el espacio propocional
    flex: 1,
  },
  caja3: {
    padding: 20,
    backgroundColor: 'green',
    flex: 1,
  },
  caja4: {
    padding: 20,
    backgroundColor: 'teal',
    // Tomara mayour parte proporcional
    flex: 3,
  },
});
export default App;
