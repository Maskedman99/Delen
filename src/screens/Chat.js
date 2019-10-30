import React from 'react';
import {GiftedChat} from 'react-native-gifted-chat';
import firebaseSvc from '../../FirebaseSvc';

export default class Chat extends React.Component {
  state = {
    messages: [],
  };

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={message => {
          firebaseSvc.sendMessage(message);
        }}
        user={{
          _id: firebaseSvc.getUid(),
          name: this.props.username,
        }}
      />
    );
  }
  componentDidMount() {
    firebaseSvc.loadMessages(message => {
      this.setState(previousState => {
        return {
          messages: GiftedChat.append(previousState.messages, message),
        };
      });
    });
  }
  componentWillUnmount() {
    firebaseSvc.closeChat();
  }
}

Chat.defaultProps = {
  username: 'Default Name',
};
