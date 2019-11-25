import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Card from './common/Card';
import CardItem from './common/CardItem';
import Button from './common/Button';
import Input from './input';
import firebase from '../firebase';
import Spinner from './common/Spinner';


class LoginForm extends Component {
    state = {
        email: "",
        password: "",
        error: "",
        loading: false,
        loggedIn: null
    }

    onLoginPress = () => {
        const { email, password } = this.state;
        this.setState({ loading: true, error: "" })
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({
                    email: "",
                    password: "",
                    error: "",
                    loading: false
                })
            })
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(() => {
                        this.setState({
                            email: "",
                            password: "",
                            error: "",
                            loading: false
                        })
                    })
                    .catch(this.onErrorMessage)
            })
    }

    componentWillMount = () =>  {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({ loggedIn: true })
            } else {
                this.setState({ loggedIn: false })
            }
        })
    }

    onErrorMessage = () => {
        this.setState({ error: "authentcation failed", loading: false })
    }

    showButtonOrSpinner = () => {
        if (this.state.loading) {
            return <Spinner />
        } else {
            return <Button onPress={this.onLoginPress}> Login</Button>
        }
    }
    render() {
        if (this.state.loggedIn === null ) {
            return (
                <Spinner/>
            )
        } else if (this.state.loggedIn === true){
            return(
                <Button onPress={() => firebase.auth().signOut()}>log out</Button>
            )
        }else {
            return (
                <View>
                    <Card>
                        <CardItem>
                            <Input
                                label="Email"
                                placeholder="Enter your Email"
                                secureTextEntry={false}
                                onChangeText={(email) => this.setState({ email: email })}
                                value={this.state.email}
                            />
                        </CardItem>
                        <CardItem>
                            <Input
                                label="Password"
                                placeholder="Enter your Password"
                                secureTextEntry={true}
                                onChangeText={(pass) => this.setState({ password: pass })}
                                value={this.state.password}
                            />
                        </CardItem>
                        <Text style={styles.errorStyle}>{this.state.error}</Text>
                        <CardItem>
                            {this.showButtonOrSpinner()}
                        </CardItem>
                    </Card>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    errorStyle: {
        marginTop: 5,
        color: "#ff0000",
        alignSelf: "center",
        fontSize: 16
    }
})

export default LoginForm;