/**
 * this method is responcible for creat account scree
 *
 * by tawfiq toubeh
 *
 * v:1.0.0 last update 2021/7/1
 * */
import React, { useContext, useState } from "react";
import { Button, TextInput, View, Text } from "react-native";
import { Context } from "../context/AuthContext";


const CreateAcc = () => {
  const [insurance_id, setInsurance_id] = useState("");
  const [policy_number, setPolicy_number] = useState("");
  const [date_of_birth, setDate_of_birth] = useState("");
  const { createAccount } = useContext(Context);
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, marginTop:'30%',marginBottom:"60%" ,backgroundColor:"#18a8aa"}}>
        <Text style={{ fontSize: 30, alignSelf: "center" ,marginTop:15}}>Create account</Text>
        <TextInput style={{ borderWidth: 1, margin: 15,fontSize:20}} placeholder="insurance id" value={insurance_id}
                   onChangeText={(val) => setInsurance_id(val)}  />
        <TextInput style={{ borderWidth: 1, margin: 15 ,fontSize:20}} placeholder="policy number" value={policy_number}
                   onChangeText={(val) => setPolicy_number(val)} />
        <TextInput style={{ borderWidth: 1, margin: 15 ,fontSize:20}} placeholder="date of birth" value={date_of_birth}
                   onChangeText={(val) => setDate_of_birth(val)} />
        <View style={{ marginHorizontal: 120, marginTop: 15 }}>
          <Button title="Sign Up" onPress={() => createAccount(insurance_id, policy_number, date_of_birth)} />
        </View>
      </View>
    </View>
  );
};

export default CreateAcc;
