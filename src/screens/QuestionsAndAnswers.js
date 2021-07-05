/**
 *
 * this method is responsible for Question and answers page (for designing issue)
 *
 * by: tawfiq toubeh
 *
 * v:1.0.0 last update 2021/7/1
 * */
import React, { Component } from "react";
import {Text, View} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

class QuestionsAndAnswers extends Component{
    render() {
        return(
          <View>
              <Text>Questions And Answers</Text>
          </View>
        )
    }


}

/**
 * this functionality to manipulate the layout of  Question and answers page icon in tabBar
 * */
QuestionsAndAnswers.navigationOptions = {
    tabBarIcon: () => {
        return <FontAwesome size={20} name="quora"/>;
    },
};
export default QuestionsAndAnswers
