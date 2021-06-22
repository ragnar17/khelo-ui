import React,{ useState } from 'react';
import { StyleSheet, Text, TextInput, View,KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import {styles,colors} from '../styles/authStyle.js';
import base64 from 'react-native-base64';
import { AuthContext } from '../context.js';

function Login({navigation}){
    const [isUserNameHighlighted, setIsUserNameHighlighted] = useState(false)
    const [isPassHighlighted, setIsPassHighlighted] = useState(false)

    const [userName,setUserName] = useState('')
    const [password,setPassword] = useState('')

    const pressHandler = () => {
        navigation.navigate('Signup');
    }
    const {signIn} = React.useContext(AuthContext)

    const handleSignIn = () => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Accept': 'application/json' ,
            'Authorization': 'Basic '+ base64.encode(userName+':'+password)},
        };
        fetch("http://192.168.1.4:8080/auth/login",requestOptions).then(response => {
            const statusCode = response.status;
            const data = statusCode == 200 ? response.json() : response
            return Promise.all([statusCode, data]);
          })
          .then(([res, data]) => {
            if(res == 200){
                // alert(data.token)
                signIn(data.token)
            }
            else{
                alert("Invalid username and password.")
            }
          })
          .catch(function(error) {
            alert(error.message);
        });
    }
    return (
        <KeyboardAvoidingView behaviour="padding" style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>
                    Login
                </Text>
                <Text style={styles.infoText}>
                    Log in to your existent account of Khelo
                </Text>
            </View>
            <View style={styles.formContainer}>
                
                <View >
                    <TextInput
                        placeholder="UserName"
                        placeholderTextColor={colors.dgray}
                        returnKeyType="next"
                        style={[styles.input,isUserNameHighlighted && styles.isHighlighted]}
                        onFocus={() => { setIsUserNameHighlighted(true)}}
                        onBlur={() => {setIsUserNameHighlighted(false)}}
                        onSubmitEditing={() => passwordInput.focus()}
                        onChangeText = {setUserName}
                        value = {userName}
                    />
                </View>
                <View ref={(input) => this.passwordInput = input}>
                    <TextInput
                        placeholder="Password"
                        placeholderTextColor={styles.dgray}
                        secureTextEntry
                        returnKeyType="go"
                        style={[styles.input,isPassHighlighted && styles.isHighlighted]}
                        onFocus={() => { setIsPassHighlighted(true)}}
                        onBlur={() => {setIsPassHighlighted(false)}}
                        onChangeText = {setPassword}
                        value={password}
                    />
                </View>

                <TouchableOpacity onPress={handleSignIn} style={styles.buttonContainer}>
                    <Text style={[styles.buttonText]}>Login</Text>
                </TouchableOpacity>
            </View>
            <View  style={styles.footerContainer} >
                    <Text>Don't have an Account? </Text>
                    <Text style={styles.textButton} onPress={pressHandler}>Sign Up </Text>
            </View>
        </KeyboardAvoidingView>
    )
}

export default Login;