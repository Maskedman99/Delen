import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Alert,
  TextInput,
  StyleSheet,
  StatusBar,
} from 'react-native';
//import AsyncStorage from '@react-native-community/async-storage';

import PasswordTextInput from '../components/PasswordInputText';
import firebaseSvc from '../../FirebaseSvc';

export class Login extends Component {
  state = {
    email: 'testA@gmail.com',
    password: 'testapass',
  };

  // add login method to handle user press Login button
  onPressLogin = async () => {
    const user = {
      email: this.state.email,
      password: this.state.password,
    };
    firebaseSvc.login(user, this.loginSuccess, this.loginFailed);
  };

  loginSuccess = () => {
    console.log('login successful, navigate to chat.');
    this.props.navigation.navigate('ChatScreen', {
      name: this.state.name,
      email: this.state.email,
    });
  };

  loginFailed = () => {
    Alert.alert('Login failure. Please try again.');
  };

  // methods to handle user input and update the state
  onChangeTextEmail = email => this.setState({email});

  render() {
    return (
      <View>
        <StatusBar hidden={true} />
        <Text style={styles.title}>E-mail address</Text>
        <TextInput
          style={styles.nameInput}
          placeHolder={this.state.email}
          placeholderTextColor="black"
          keyboardType="email-address"
          onChangeText={this.onChangeTextEmail}
          value={this.state.email}
        />
        <Text style={styles.title}>Password</Text>
        <PasswordTextInput
          placeholder="enter password"
          label="Password"
          value={this.state.password}
          onChangeText={password => this.setState({password})}
        />

        <TouchableOpacity style={styles.button} onPress={this.onPressLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('CreateAccountScreen')}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    margin: 16,
    fontSize: 16,
  },
  nameInput: {
    height: 50,
    marginHorizontal: 16,
    borderColor: 'black',
    borderWidth: 1,
    fontSize: 16,
    borderRadius: 2,
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
    margin: 15,
  },
  button: {
    marginHorizontal: 16,
    marginTop: 32,
    backgroundColor: '#39ff14',
    borderRadius: 2,
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default Login;
