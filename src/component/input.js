import React from 'react';
import { View, StyleSheet, TextInput, Text} from 'react-native';



const Input = (props) => {
    return (  
        <View style={styles.container}>
        <Text style={styles.label}>{props.label}</Text>
        <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        secureTextEntry={props.secureTextEntry}
        autoCorrect={false}
        autoCapitalize="none"
        value={props.value}
        onChangeText={props.onChangeText}
      />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex : 1,
      height : 60
    },
    label : {
        flex: 1, 
        color: "#707070",
        paddingLeft: 10,
        fontSize : 16
    },
    input : {
        flex: 1, 
        color: "#000",
        paddingLeft: 10,
        fontSize : 16
    }
 });
 
export default Input;

// { height: 40, borderColor: 'gray', borderWidth: 1 }