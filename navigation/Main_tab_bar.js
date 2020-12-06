import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/FontAwesome';
import About from '../components/About';
import SearchTab from './Search_tab';

const tabStyles = StyleSheet.create({
    testTabText: {
        flex : 1,
        justifyContent:'center',
        alignItems:'center'
    },
})

const Tab = createBottomTabNavigator();

const MainTabBar = () => {
    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Search"
          
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused }) => {
              let iconName;
  
            if (route.name === 'About') {
                iconName = 'info-circle';
            }
              // Adding the search icon
            else if (route.name === 'Search') {
            iconName = 'search';
            }
  
            return <Ionicons name={iconName} size={26} color={focused ? '#58AADA' : 'grey'} />;
            },
          })}
        >
          <Tab.Screen name="Search" component={SearchTab} />
          <Tab.Screen name="About" component={About} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  };

export default MainTabBar;