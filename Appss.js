import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import Header from './src/component/common/header';


class App extends Component {
    state = {  }
    render() { 
        return ( 
            <View style={styles.container}>
                  <Header title='auth'/>
            </View>
         );
    }
}


const styles = StyleSheet.create({
     container : {
         flex : 1
     }
 })
 
export default App;