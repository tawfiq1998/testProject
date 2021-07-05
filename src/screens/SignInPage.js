/**
 * this method is responsible for sign in page
 *
 * by: tawfiq toubeh
 *
 * v:1.0.0 last update 2021/7/1
 * */
import React, { useContext, useState } from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import {Button, Input} from "react-native-elements";
import { Context } from '../context/AuthContext'

const SignInPage = () => {
  const [number,setNumber]=useState('');
  const {state,getVarCode}=useContext(Context);
    return (
        <View style={styles.viewStyle}>
            <Image style={styles.imageLogo} source={require("../../assets/images.png")}/>
            <Input
                inputContainerStyle={styles.inputStyle}
                placeholder="Mobile Number"
                value={number}
                onChangeText={(val)=>setNumber(val)}
            />
          {state.errorMessage?<Text>wrong cardinals</Text>:null}
            <Button
                containerStyle={styles.buttonStyle}
                title="sign in"
                onPress={()=> {
                  getVarCode( number );
                }}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    viewStyle: {
        paddingTop: '40%',
        alignItems: 'center',
        flex: 1,
      backgroundColor:'white'
    },
    imageLogo: {
        width: 150,
        height: 150
    },
    inputStyle: {
        marginHorizontal: 15,
        marginVertical: 10
    },
    buttonStyle: {
        marginTop: 15, width: 100
    }
});
export default SignInPage;
