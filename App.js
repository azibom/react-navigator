import React from 'react';
import { Text, View } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import SettingsScreen from './app/SettingsScreen';
import AccountScreen from './app/AccountScreen';
import CameraScreen from './app/CameraScreen';
import AnalyticsScreen from './app/AnalyticsScreen';

const TabNavigator = createBottomTabNavigator({
  Settings: {
    screen: SettingsScreen,
    navigationOptions: { 
      tabBarIcon: () => { return <Icon name="md-settings" color="#247ece" size={20} /> },
      tabBarOptions: {
        activeTintColor: '#247ece',
        labelStyle: {
          fontSize: 10,
          marginBottom: 5
        },
        style: {
          backgroundColor: '',
        },
      }
    },
  },
  Account: {
    screen: AccountScreen,
    navigationOptions: { 
      tabBarIcon: () => { return <Icon name="md-person" color="#247ece" size={20} /> },
      tabBarOptions: {
        activeTintColor: '#247ece',
        labelStyle: {
          fontSize: 10,
          marginBottom: 5
        },
        style: {
          backgroundColor: '',
        },
      }
    },
  },
  Camera: {
    screen: CameraScreen,
    navigationOptions: { 
      tabBarIcon: () => { return <Icon name="md-camera" color="#247ece" size={20} /> },
      tabBarOptions: {
        activeTintColor: '#247ece',
        labelStyle: {
          fontSize: 10,
          marginBottom: 5
        },
        style: {
          backgroundColor: '',
        },
      }
    },
  },
  Analytics: {
    screen: AnalyticsScreen,
    navigationOptions: { 
      tabBarIcon: () => { return <Icon name="md-analytics" color="#247ece" size={20} /> },
      tabBarOptions: {
        activeTintColor: '#247ece',
        labelStyle: {
          fontSize: 10,
          marginBottom: 5
        },
        style: {
          backgroundColor: '',
        },
      }
    },
  },
}
);

export default createAppContainer(TabNavigator);