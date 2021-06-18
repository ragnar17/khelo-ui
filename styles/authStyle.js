import { StyleSheet } from 'react-native';


const colors = {
    white : '#ffffff',
    black : '#22223b',
    lblue : '#0466c8',
    dblue : '#001845',
    gray  : '#e9ecef',
    dgray : '#adb5bd'
}
const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor: colors.white,
        alignItems : 'center',
        justifyContent : 'center'
        
    },
    formContainer : {
        padding : 30
   
        
    },
    titleContainer : {
        alignItems : 'center',
        justifyContent : 'center'
    },
    buttonContainer : {
        backgroundColor : colors.lblue,
        marginTop : 30,
        borderRadius : 100,
        width : 300,
        height : 50,
        justifyContent: 'center'
    },
    footerContainer : {
        position: 'absolute',
        bottom: 0,
        flexDirection : 'row',
        marginBottom : 10,
    },
    input : {
        height : 50,
        backgroundColor : colors.gray,
        width : 300,
        marginTop : 30,
        borderRadius : 30,
        paddingHorizontal : 20,
        color : colors.black
    },
    infoText : {
        color : colors.black,
        marginTop : 10,
        opacity : 0.75,
        width : 300,
        textAlign : 'center'
    },
    title : {
        fontWeight: 'bold',
        fontSize: 40,
        color: colors.black
    },
    buttonText : {
        textAlign: 'center',
        color: colors.white,
        fontWeight: 'bold'
    },
    isHighlighted : {
        borderColor : colors.lblue,
        borderWidth : 2,
        color : colors.lblue,
        fontWeight : 'bold'
    },
    textButton : {
        fontWeight : 'bold',
        color : colors.lblue
    }    
})

export {styles,colors};