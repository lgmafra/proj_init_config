import React, { useState } from 'react';
import {
  View, Text, ImageBackground, TextInput, TouchableOpacity, Image,
} from 'react-native';

import styles from './styles';

import header from '~/images/header.png';
import google from '~/images/google.png';
import facebook from '~/images/facebook.png';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [logged, setLogged] = useState(false);

  function handleLogin() {
    if (email !== '' && password !== '') {
      setLogged(true);
    }
  }

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
            testID="email"
            style={styles.emailInput}
            placeholder="Email"
            autoCapitalize="none"
            autoCompleteType="email"
            onChangeText={text => setEmail(text)}
            value={email}
          />
          <TextInput
            testID="password"
            style={styles.passwordInput}
            placeholder="Senha"
            autoCapitalize="none"
            autoCompleteType="password"
            onChangeText={text => setPassword(text)}
            value={password}
          />
          <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
          <TouchableOpacity
            testID="loginButton"
            style={styles.buttonLogin}
            onPress={() => handleLogin}
          >
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
