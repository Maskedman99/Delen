import React, {Component} from 'react';
import {Text, View, Button, Alert, TextInput} from 'react-native';
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
        <Text>Username</Text>
        <TextInput
          value={this.state.email}
          onChangeText={this.onChangeTextEmail}
        />
        <Text>Password</Text>
        <PasswordTextInput
          placeholder="enter password"
          label="Password"
          value={this.state.password}
          onChangeText={password => this.setState({password})}
        />
        <Button title="Login" onPress={this.onPressLogin} />
        <Button
          title="Create an Account"
          onPress={() => this.props.navigation.navigate('CreateAccountScreen')}
        />
      </View>
    );
  }
}

export default Login;
