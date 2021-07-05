/**
 * this method is responsible for verification page
 *
 * by: tawfiq toubeh
 *
 * v:1.0.0 last update 2021/7/5
 * */
import React, { useContext, useState } from "react";
<<<<<<< HEAD
import { Button, TextInput, View } from "react-native";
=======
import { Button, Text, TextInput, View } from "react-native";
>>>>>>> pro
import {Context} from "../context/AuthContext";


const VerificationScreen=()=>{
  const [varNum,setVarNum]=useState("")
<<<<<<< HEAD
  const {checkVarCod}=useContext(Context);
=======
  const {state,checkVarCod}=useContext(Context);
>>>>>>> pro

  return(
    <View style={{flex:1,justifyContent:'center',alignContent :'center',marginHorizontal:10}}>
      <TextInput style={{borderWidth:1,marginBottom:15,fontSize:20}} placeholder="insert verification code" value={varNum} onChangeText={(val)=>setVarNum(val)}/>
      <View style={{marginHorizontal:110}}><Button title="submit" onPress={()=> {
        checkVarCod(varNum );
      }} />
<<<<<<< HEAD
=======
        {state.errorMessage?<Text>wrong cardinals</Text>:null}
>>>>>>> pro
      </View>
    </View>
  )
}

export default VerificationScreen
