import React, { FC, useState } from 'react';
import { Text, TextInput, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export interface IRegisterProps{

}

const Register : FC<IRegisterProps> = ({}) => {

    const [login, setLogin] = useState({username: "", email: "", password: ""})

    const onChangeUsername = (value: string) =>{
        setLogin(state=>({
            ...state,
            username: value
        }))
    }

    const onChangeEmail = (value: string) =>{
        setLogin(state=>({
            ...state,
            email: value
        }))
    }

    const onChangePassword = (value: string) =>{
        setLogin(state=>({
            ...state,
            password: value
        }))
    }

    const seConnecter = () => {
        console.log(login)
    }

    return(
        <View style={style.contenaire}>
            <Text style={style.title}>Itune seeker</Text>
            <View> 
                <TextInput style={style.input} onChangeText={onChangeUsername} value={login.username} placeholder={"username"}/>
            </View>
            <View>
                <TextInput style={style.input} onChangeText={onChangeEmail} value={login.email} placeholder={"email"}/>
            </View>
            <View>
                <TextInput style={style.input} onChangeText={onChangePassword} value={login.password} placeholder={"password"}/>
            </View>
            
            <TouchableOpacity onPress={seConnecter}>
                <View style={style.btn}>
                    <Text style={style.btn_text}>S'inscrire</Text>
                </View>
            </TouchableOpacity>

        </View>
)}

const style = StyleSheet.create({
    contenaire:{
        flex: 1,
        backgroundColor: "#141414",
        justifyContent: "center",
        alignItems: "center"
        
    },
    input:{
        width:300,
        height: 50,
        paddingLeft: 15,
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        marginBottom: 20
    },
    title:{
        fontSize: 52,
        color: "white",
        marginBottom: 52,
    },
    btn:{
        width: 200,
        height: 50,
        borderRadius: 10,
        backgroundColor: "#ff4154",
        justifyContent:"center",
        alignItems:"center"
    },
    btn_text:{
        fontSize: 18
    }
})

export default Register;