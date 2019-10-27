import React from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export class PasswordTextInput extends React.Component {
  state = {
    hidden: true,
  };

  onInputLabelPressed = () => {
    this.setState({hidden: !this.state.hidden});
  };

  render = () => (
    <View style={styles.viewStyle}>
      <TextInput
        style={styles.inputStyle}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={this.state.hidden}
        {...this.props}
      />
      <TouchableOpacity onPress={this.onInputLabelPressed}>
        <Text style={styles.PSText}>{this.state.hidden ? 'SHOW' : 'HIDE'}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    borderRadius: 2,
    borderColor: 'black',
    borderWidth: 1,
  },
  inputStyle: {
    height: 50,
    fontSize: 16,
    flex: 2,
  },
  PSText: {
    textAlign: 'right',
    color: 'blue',
    marginRight: 5,
  },
});

export default PasswordTextInput;
