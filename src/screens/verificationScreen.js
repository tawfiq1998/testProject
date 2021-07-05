/**
 * this method is responsible for verification page
 *
 * by: tawfiq toubeh
 *
 * v:1.0.0 last update 2021/7/5
 * */
import React, { useContext, useState } from "react";
import { Button, TextInput, View,Text } from "react-native";
import {Context} from "../context/AuthContext";


const VerificationScreen=()=>{
  const [varNum,setVarNum]=useState("")
  const {state,checkVarCod}=useContext(Context);

  return(
    <View style={{flex:1,justifyContent:'center',alignContent :'center',marginHorizontal:10}}>
      <TextInput style={{borderWidth:1,marginBottom:15,fontSize:20}} placeholder="insert verification code" value={varNum} onChangeText={(val)=>setVarNum(val)}/>
      <View style={{marginHorizontal:110}}><Button title="submit" onPress={()=> {
        checkVarCod(varNum );
      }} />
        {state.errorMessage?<Text>wrong cardinals</Text>:null}
      </View>
    </View>
  )
}

export default VerificationScreen
