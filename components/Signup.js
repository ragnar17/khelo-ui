import React,{ useState } from 'react';
import { StyleSheet, Text, TextInput, View,KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { styles, colors } from '../styles/authStyle.js';
function Signup({navigation}){
    const [isEmailHighlighted, setIsEmailHighlighted] = useState(false)
    const [isPassHighlighted, setIsPassHighlighted] = useState(false)
    const [isUserNameHighlighted, setIsUserNameHighlighted] = useState(false)
    const [isFirstNameHighlighted, setIsFirstNameHighlighted] = useState(false)
    const [isLastNameHighlighted, setIsLastNameHighlighted] = useState(false)

    const [userName,setUserName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const [isSigningUp,setIsSigningUp] = useState(false)

    const handleSignUp = () => {
        setIsSigningUp(true)
        // const obj = {
        //         "firstName" : firstName,
        //         "lastName" : lastName,
        //         "username" : userName,
        //         "password" : password,
        //         "email" : email
        // }
        // alert(JSON.stringify(obj))
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "firstName" : firstName,
                "lastName" : lastName,
                "username" : userName,
                "password" : password,
                "email" : email
            })
        };
        fetch("http://192.168.1.4:8080/user",requestOptions).then(response => {
            const statusCode = response.status;
        
            const data = response.text();
            return Promise.all([statusCode, data]);
          })
          .then(([res, data]) => {
            
            if(res == 201){
                alert("Account created.")
                navigation.push("Login")
                
            }
            else{
                console.log(data)
                alert(data)
            }
            setIsSigningUp(false)
          })
          .catch(function(error) {
            console.log("Api call error");
            setIsSigningUp(false)
            alert(error.message);
        });
    }
    
    const pressHandler = () => {
        navigation.navigate('Login');
    }
    return (
        <KeyboardAvoidingView behaviour="padding" style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>
                    SignUp
                </Text>
                <Text style={styles.infoText}>
                    Create an account of Khelo
                </Text>
            </View>
            <View style={styles.formContainer}>
                <View>
                    <TextInput
                        placeholder="First Name"
                        placeholderTextColor={colors.dgray}
                        returnKeyType="next"
                        style={[styles.input,isFirstNameHighlighted && styles.isHighlighted]}
                        onFocus={() => { setIsFirstNameHighlighted(true)}}
                        onBlur={() => {setIsFirstNameHighlighted(false)}}
                        onChangeText={(firstName) => setFirstName(firstName)}
                        value = {firstName}
                        onSubmitEditing={() => lastNameInput.focus()}
                    />
                </View>

                <View ref={(input) => this.lastNameInput = input}>
                    <TextInput
                        placeholder="Last Name"
                        placeholderTextColor={colors.dgray}
                        returnKeyType="next"
                        style={[styles.input,isLastNameHighlighted && styles.isHighlighted]}
                        onFocus={() => { setIsLastNameHighlighted(true)}}
                        onBlur={() => {setIsLastNameHighlighted(false)}}
                        onChangeText={(input) => setLastName(input)}
                        onSubmitEditing={() => userNameInput.focus()}
                        value = {lastName}
                    />
                </View>

                <View ref={(input) => this.userNameInput = input}>
                    <TextInput
                        placeholder="User Name"
                        placeholderTextColor={colors.dgray}
                        returnKeyType="next"
                        style={[styles.input,isUserNameHighlighted && styles.isHighlighted]}
                        onFocus={() => { setIsUserNameHighlighted(true)}}
                        onBlur={() => {setIsUserNameHighlighted(false)}}
                        onChangeText={(input) => setUserName(input)}
                        onSubmitEditing={() => emailInput.focus()}
                        value = {userName}
                    />
                </View>

                <View ref={(input) => this.emailInput = input}>
                    <TextInput
                        placeholder="Email"
                        placeholderTextColor={colors.dgray}
                        returnKeyType="next"
                        style={[styles.input,isEmailHighlighted && styles.isHighlighted]}
                        onFocus={() => { setIsEmailHighlighted(true)}}
                        onBlur={() => {setIsEmailHighlighted(false)}}
                        onChangeText={(input) => setEmail(input)}
                        onSubmitEditing={() => passwordInput.focus()}
                        value = {email}
                    />
                </View>
                
                <View ref={(input) => this.passwordInput = input}>
                    <TextInput
                        placeholder="Password"
                        placeholderTextColor={colors.dgray}
                        secureTextEntry
                        returnKeyType="go"
                        style={[styles.input,isPassHighlighted && styles.isHighlighted]}
                        onFocus={() => { setIsPassHighlighted(true)}}
                        onChangeText={(input) => setPassword(input)}
                        onBlur={() => {setIsPassHighlighted(false)}}
                        value = {password}
                    />
                </View>

                <TouchableOpacity disabled={isSigningUp} onPress={handleSignUp} style={styles.buttonContainer}>
                    <Text style={[styles.buttonText]}>Signup</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.footerContainer}>
                    <Text>Already have an Account? </Text>
                    <Text style={styles.textButton} onPress={pressHandler}>Login here </Text>
            </View>
        </KeyboardAvoidingView>
    )
}

export default Signup;