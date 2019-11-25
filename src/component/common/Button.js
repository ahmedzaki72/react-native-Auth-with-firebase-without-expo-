import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';




const Button = (props) => {
    return ( 
       <TouchableOpacity onPress={props.onPress} style={styles.buttonStyle}>
                       <Text style={styles.textStyle}>{props.children}</Text> 
       </TouchableOpacity>
     );
}

const styles = StyleSheet.create({
    buttonStyle: {
        height: 35,
        flex : 1,
        borderRadius : 5,
        justifyContent : 'center',
        backgroundColor: '#2a3744',
        marginVertical: 20
    },
    textStyle: {
        color: '#82b541',
        fontSize: 15,
        fontWeight: "bold",
        textAlign: 'center'
    }
})

export default Button;