import React, {Component} from 'react';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import HomeTab from "../tab/HomeTab";
import CardTab from "../tab/LoginTab";
import BookTab from "../tab/BookTab";
import PlanetTab from "../tab/PlanetTab";
import ShowListCount from '../component/tabHome/ShowListCount';
const MainNavigator = createBottomTabNavigator({
    HomeTab: HomeTab,
    CardTab: CardTab,
    BookTab: BookTab,
    PlanetTab: PlanetTab
});
const routers = createStackNavigator({
    Main: {
        screen: MainNavigator,
        navigationOptions: {header: null}
    },
    ShowListCount: {
        screen: ShowListCount,
        navigationOptions: {header: null}
    }
});
export default routers;
