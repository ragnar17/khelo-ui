import React,{ useState } from 'react';
import { StyleSheet, Text, TextInput, View,KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import {styles,colors} from '../styles/authStyle.js';
import { AuthContext } from '../context.js';


function Profile({navigation}){
    // const [ profileData,setProfileData ] = useState(null);
    const { signOut } = React.useContext(AuthContext)
    const profileData = {
        "id": "60c9dc3275b4577227f88976",
        "firstName": "Ragnar",
        "lastName": "Lothbrok",
        "username": "amit7",
        "password": null,
        "email": "pandora10@gmail.com",
        "mobile": "121212",
        "role": null
        }
    return (
    <View style={pStyles.container}>
        <View >
            <View style = {pStyles.profileNameContainer}>
                <Text>
                    <Text style={[pStyles.boldText,pStyles.headingStyle]}>{profileData.firstName} </Text>
                    <Text style={[pStyles.headingStyle]}>{profileData.lastName}</Text>
                </Text>
            </View>
            <View style = {pStyles.profileDataContainer}>
                <Text>
                    <Text style={[pStyles.boldText,pStyles.textStyle]}>Username : </Text>
                    <Text style={[pStyles.textStyle]}>{profileData.username}</Text>
                </Text>

                <Text>
                    <Text style={[pStyles.boldText,pStyles.textStyle]}>Email : </Text>
                    <Text style={[pStyles.textStyle]}>{profileData.email}</Text>
                </Text>

                <Text>
                    <Text style={[pStyles.boldText,pStyles.textStyle]}>Mobile No. : </Text>
                    <Text style={[pStyles.textStyle]}>{profileData.mobile}</Text>
                </Text>

                <Text>
                    <Text style={[pStyles.boldText,pStyles.textStyle]}>Role : </Text>
                    <Text style={[pStyles.textStyle]}>{profileData.role}</Text>
                </Text>
            </View>
        </View>
        

        <TouchableOpacity onPress={signOut} style={styles.buttonContainer}>
            <Text style={[styles.buttonText]}>Log Out</Text>
        </TouchableOpacity>
    </View> )
        
}
const pStyles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor: colors.white,
        alignItems : 'center',
        justifyContent : 'center'
        
    },
    profileDataContainer : {
        marginTop : 30
    },
    profileNameContainer : {
        alignItems : 'center',
    },
    boldText : {
        fontWeight : 'bold'
    },
    textStyle : {
        fontSize : 15
    },
    headingStyle : {
        fontSize : 25
    }

     
})
export default Profile;