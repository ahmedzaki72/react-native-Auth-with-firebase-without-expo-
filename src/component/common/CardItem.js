import React from 'react';
import { View, Text, StyleSheet } from 'react-native';



const CardItem = (props) => {
    return ( 
        <View style={styles.container}>
             {props.children}
        </View>
     );
}
 

const styles = StyleSheet.create({
    container: {
       justifyContent: "flex-start",
       flexDirection: "row",
       borderBottomWidth: 1, 
       padding: 5,
       backgroundColor:"#fff",
       borderColor: "#ddd"
    }
 });

export default CardItem;