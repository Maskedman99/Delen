import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import PasswordTextInput from '../components/PasswordInputText';
import firebaseSvc from '../../FirebaseSvc';

class CreateAccount extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  onPressCreate = async () => {
    try {
      const user = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
      };
      await firebaseSvc.createAccount(user);
    } catch ({message}) {
      console.log('create account failed. catch error:' + message);
    }
  };

  onChangeTextEmail = email => this.setState({email});
  onChangeTextName = name => this.setState({name});

  render() {
    return (
      <View>
        <Text style={styles.title}>Email:</Text>
        <TextInput
          style={styles.nameInput}
          placeHolder="enter your e-mail"
          placeholderTextColor="black"
          keyboardType="email-address"
          onChangeText={this.onChangeTextEmail}
        />
        <Text style={styles.title}>Password:</Text>
        <PasswordTextInput
          placeholder="enter password"
          label="Password"
          value={this.state.password}
          onChangeText={password => this.setState({password})}
        />
        <Text style={styles.title}>Name:</Text>
        <TextInput
          style={styles.nameInput}
          onChangeText={this.onChangeTextName}
        />
        <TouchableOpacity style={styles.button} onPress={this.onPressCreate}>
          <Text style={styles.buttonText}>Create Account</Text>
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
    margin: 16,
    marginTop: 64,
    backgroundColor: '#39ff14',
    borderRadius: 2,
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default CreateAccount;
