import {
  Platform
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import reducer from './Reducers/reducers'
import {registerScreens} from './Navigation';
import thunk from 'redux-thunk'

// redux related book keeping
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducer);

// screen related book keeping
registerScreens(store, Provider);

const createTabs = () => {
  let tabs = [
    {
      label: 'One',
      screen: 'example.FirstTabScreen',
      title: 'Screen One'
    },
    {
      label: 'Two',
      screen: 'example.SecondTabScreen',
      title: 'Screen Two',
      navigatorStyle: {
        tabBarBackgroundColor: '#4dbce9',
      }
    }
  ];
  return tabs;
};
// this will start our app
Navigation.startTabBasedApp({
  tabs: createTabs(),
  appStyle: {
    tabBarBackgroundColor: '#0f2362',
    tabBarButtonColor: '#ffffff',
    tabBarSelectedButtonColor: '#63d7cc'
  }
});