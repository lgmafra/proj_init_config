import React from 'react';
import {
  View, Text, TouchableOpacity, Image, ImageBackground, StatusBar,
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

import image from '~/images/image.png';
import logo from '~/images/logo.png';

export default function Intro({ navigation }) {
  return (
    <ImageBackground style={styles.container} resizeMode="cover" source={image} testID="background">
      <StatusBar barStyle="light-content" />
      <View style={styles.textInfo}>
        <Text style={styles.info}>Investimento</Text>
        <Text style={styles.info}>imobiliário</Text>
        <Text style={styles.infoBold}>simplificado</Text>
      </View>
      <Text style={styles.infoLogin}>Faça seu login ou crie sua conta</Text>
      <View style={styles.buttonsPlace}>
        <TouchableOpacity
          testID="buttonLogin"
          style={styles.buttonLogin}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonNew} onPress={() => {}}>
          <Text style={styles.buttonText}>Criar Conta</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.logo}>
        <Image source={logo} />
      </View>
    </ImageBackground>
  );
}

Intro.propTypes = PropTypes.shape({
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}).isRequired;
