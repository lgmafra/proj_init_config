import React from 'react';
import {
  View, Text, ImageBackground, TextInput, TouchableOpacity, Image,
} from 'react-native';

import styles from './styles';

import header from '~/images/header.png';
import google from '~/images/google.png';
import facebook from '~/images/facebook.png';

export default function Login() {
  return (
    <View style={styles.container}>
      <ImageBackground source={header} style={styles.imageHeader} resizeMode="cover" />
      <View style={styles.content}>
        <Text style={styles.textInfo}>
          Faça
          {' '}
          <Text style={styles.textInfoBold}>login</Text>
        </Text>
        <View style={styles.form}>
          <TextInput
            style={styles.emailInput}
            placeholder="Email"
            autoCapitalize="none"
            autoCompleteType="email"
          />
          <TextInput
            style={styles.passwordInput}
            placeholder="Email"
            autoCapitalize="none"
            autoCompleteType="password"
          />
          <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
          <TouchableOpacity style={styles.buttonLogin} onPress={() => {}}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.socialLogos}>
          <Image source={facebook} style={styles.logos} />
          <Image source={google} style={styles.logos} />
        </View>
      </View>
    </View>
  );
}
