/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';

import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from "@react-navigation/stack";

import FormationView from "./assets/Components/FormationView";
import Parcours from './assets/Components/Parcours';
import Profils from "./assets/Components/Profils";
import Competences from "./assets/Components/Competences";

import {Image, Switch ,View, Text,SafeAreaView} from "react-native";
import profC from './assets/image/icons8_profile_color_64px.png'
import profN from './assets/image/icons8_profile_noir_64px_1.png'
import parcC from './assets/image/icons8_new_job_color_100px_1.png'
import parcN from './assets/image/icons8_new_job_noir_100px.png'
import compC from './assets/image/icons8_development_skill_100px_Couleur_1.png'
import compN from './assets/image/icons8_development_skill_noir_100px.png'


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

class App extends Component {

    constructor(props) {
        super(props);
        this.state={
            isEnabled:false,
            themesA:{background:`#b0e0e6`,background1:`#FFFFFF`,color:`#fff8dc`},
            backG:`#cd853f`
        }
    }

    /**
     * fonction de switch
     */
    toggleSwitch = () => {
        this.setState({
            isEnabled:(!this.state.isEnabled)
        })
        {(this.state.isEnabled)?(this.setState({
                themesA:{background:`#b0e0e6`,background1:`#FFFFFF`,color:`#fff8dc`}}
            )
        ):(
            this.setState({
                themesA:{background:`#ffffff`,background1:`#b0e0e6`,color:`#696969`}}
            )
        )}
    }


  render() {
      /**
       * fonction d'option pour chaque navigation
       * @returns {{headerRight: (function(): *), headerStyle: {backgroundColor: (string)}}}
       */
        const options=()=>({
            headerStyle: {
                backgroundColor: this.state.themesA.background,
            },
            headerRight: () => (
                <SafeAreaView>
                    <View style={{paddingHorizontal: 10}}>
                        <Text>Theme</Text>
                        <Switch
                            trackColor={{false: "#767577", true: "#81b0ff"}}
                            thumbColor={this.state.isEnabled ? "#b0e0e6" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={this.toggleSwitch}
                            value={this.state.isEnabled}
                        />
                    </View>
                </SafeAreaView>

            ),
        })
      /**
       * fonction de gestion de vu pour enfant et parent
       * @returns {*}
       * @constructor
       */
      const ProflsFonct=()=>{
          return(

              <Stack.Navigator initialRouteName="Profils">
                  <Stack.Screen name="Profils" options={options}>{props => <Profils {...props} extraData={this.state.themesA} />}</Stack.Screen>
              </Stack.Navigator>

          )
      }

      const CompetenceFonct=()=>{
          return(
              <Stack.Navigator initialRouteName="Competences">
                  <Stack.Screen name="Competences"  options={options}>{props=><Competences {...props} extraData={this.state.themesA} />}</Stack.Screen>
              </Stack.Navigator>

          )
      }

      const ParcoursFonct=()=>{
          return(
              <Stack.Navigator initialRouteName="Parcours">
                  <Stack.Screen name="Parcours"  options={options}>{props=><Parcours {...props} extraData={this.state.themesA} />}</Stack.Screen>
                  <Stack.Screen name="Mise en Details"  options={options}>{props=><FormationView {...props} extraData={this.state.themesA} />}</Stack.Screen>

              </Stack.Navigator>

          )
      }

      /**
       * Naavigation en global
       * @returns {*}
       * @constructor
       */
      const Vu=()=>(
          <NavigationContainer >

              <Tab.Navigator tabBarOptions={{
                  activeBackgroundColor:`#ffe4c4`,
                  inactiveBackgroundColor:this.state.themesA.background,

              }} >
                  <Tab.Screen name="Profils" component={ProflsFonct} initialRouteName="Profils" options={
                      {
                          tabBarLabel: "Profiils",
                          tabBarIcon:(props)=>{
                              if(props.focused){
                                  return(
                                      <Image source={profC} style={{height:props.size,width:props.size}}/>
                                  )
                              }else{
                                  return(
                                      <Image source={profN} style={{height:props.size,width:props.size}}/>
                                  )
                              }
                          }
                      }
                  }/>
                  <Tab.Screen name="Parcours" component={ParcoursFonct}
                              options={
                                  {
                                      tabBarLabel: "Parcours",
                                      tabBarIcon:(props)=>{
                                          if(props.focused){
                                              return(
                                                  <Image source={parcC} style={{height:props.size,width:props.size}}/>
                                              )
                                          }else{
                                              return(
                                                  <Image source={parcN} style={{height:props.size,width:props.size}}/>
                                              )
                                          }


                                      }
                                  }
                              }/>
                  <Tab.Screen name="Competences" component={CompetenceFonct} options={
                      {
                          tabBarLabel: "Competences",
                          tabBarIcon:(props)=>{
                              if(props.focused){
                                  return(
                                      <Image source={compC} style={{height:props.size,width:props.size}}/>
                                  )
                              }else{
                                  return(
                                      <Image source={compN} style={{height:props.size,width:props.size}}/>
                                  )
                              }


                          }
                      }
                  }/>
              </Tab.Navigator>
          </NavigationContainer>
      )
      return (

          Vu()

      );

    }

}


export default App;
