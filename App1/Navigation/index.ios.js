import { Navigation } from 'react-native-navigation';

import FirstTabScreen from '../Containers/ConnectScreen';
import SecondTabScreen from '../Containers/StartScene';

// register all screens of the app (including internal ones)
export function registerScreens(store, Provider) {
  console.log("Register scenes")
  Navigation.registerComponent('example.FirstTabScreen', () => FirstTabScreen,store, Provider);
  Navigation.registerComponent('example.SecondTabScreen', () => SecondTabScreen, store, Provider);
}