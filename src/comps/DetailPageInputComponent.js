/**
 *
 * this method is for customize input component in Details page
 *
 * by: tawfiq toubeh
 *
 * v:1.0.0 last update 2021/7/1
 * */
import React from "react";
import {Text, View,StyleSheet} from "react-native";

const DetailPageInputComponent=(props)=>{

  return(
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>{props.text}</Text>
      <View >
        <Text style={{fontSize:20,marginRight:10}}>{props.userVal}</Text>
      </View>
    </View>
  )
}
const styles=StyleSheet.create({
  viewStyle:{
    marginHorizontal:10,
    borderWidth: 1,
    borderRadius:4,
    flexDirection:'row',
    marginBottom:15,
  },
  textStyle:{
    marginLeft:10,
    alignSelf:'center',
    fontSize:20,
    width:160,
  },
})
export default DetailPageInputComponent
