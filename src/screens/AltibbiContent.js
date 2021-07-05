/**
 *
 * this method is responsible for altibbi content page (for designing issue)
 *
 * by: tawfiq toubeh
 *
 * v:1.0.0 last update 2021/7/1
 * */
import React from "react";
import {Text, View} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


const AltibbiContent=()=>{
    return(
        <View>
            <Text>content page</Text>
        </View>
    )
}
/**
 * this functionality to manipulate the layout of  Question and answers page icon in tabBar
 * */
AltibbiContent.navigationOptions = {
    tabBarIcon: () => {
        return <MaterialCommunityIcons size={20} name="content-paste"/>;
    },
};
export default AltibbiContent
