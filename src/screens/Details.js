/**
 *
 * this page is responsible for details page
 *
 * by: tawfiq toubeh
 *
 * v:1.0.0 last update 2021/7/1
 * */
import React, { useContext } from "react";
import { Image, Text, View } from "react-native";
import { Context } from "../context/AuthContext";
import DetailPageInputComponent from "../comps/DetailPageInputComponent";
import Feather from "react-native-vector-icons/Feather";      //this is customized component which is come from comps file


const Details = () => {
  const {state}=useContext(Context)
  return (
    <View style={{justifyContent:"center",alignItems:"center" ,flex:1}}>
        <View style={{backgroundColor:"#18a8aa",justifyContent:"center",alignItems:"center",width:"100%"}}>
          <Image style={{width:100,height:100, alignSelf:'center'}} source={require("../../assets/User_icon.png")}/>

          <Text style={{alignSelf:'center',fontSize:30}} >Personal info</Text>
            <View style={{marginTop: 60}}>
                <DetailPageInputComponent text="user name:" type=' user name' userVal={state.info.name}/>
                <DetailPageInputComponent text="Email:" type=' Email' userVal={state.info.email}/>
                <DetailPageInputComponent text="phone:" type=' phone' userVal={state.info.phone_number}/>

            </View>
        </View>
    </View>
    )
}
/**
 * this functionality to manipulate the layout of Details icon in tabBar
 * */
Details.navigationOptions = {
    tabBarIcon: () => {
        return <Feather size={20} name="settings"/>;
    },
};

export default Details
