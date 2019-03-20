import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {AppLoading, Font } from 'expo';
import Login from './Login';

export default class SplashScreen extends React.Component {

    state = {
        isLoading: true,
        fontsLoaded: false,
    }
    
    componentWillMount() {
        Font.loadAsync({
          'Aclonica-Regular': require('../assets/fonts/Aclonica-Regular.ttf')
        }).then( () => this.setState( { fontsLoaded: true } ) )
      }
    
    performTimeConsumingTask = async() => {
        return new Promise((resolve) =>
          setTimeout(
            () => { resolve('result') },
            
            2000
          )
        );
      }

      async componentDidMount() {
        // Preload data from an external API
        // Preload data using AsyncStorage
        const data = await this.performTimeConsumingTask();
      
        if (data !== null) {
          this.setState({ isLoading: false });
        }
      }

    render() {
      if( !this.state.fontsLoaded ) {
        return <AppLoading/>
    }
      const viewStyles = [
        { backgroundColor: 'orange' ,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
      }
      ];
      const textStyles = {
        color: 'white',
        fontSize: 40,
       fontFamily: 'Aclonica-Regular',
      };
  
      if(this.state.isLoading){
      return (
          
        <View style={viewStyles}>
          <Text style={textStyles}>
            HaveFun
          </Text>
        </View>
      );
    
     }else{
      return <Login/>;
    }
    }
  }
