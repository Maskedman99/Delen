import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Login from './src/screens/Login';
import Chat from './src/screens/Chat';

const AppNavigator = createStackNavigator({
  LoginScreen: {screen: Login, navigationOptions: {header: null}},

  ChatScreen: {screen: Chat, navigationOptions: {header: null}},
});

const App = createAppContainer(AppNavigator);

export default App;