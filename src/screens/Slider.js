/**
 *
 * this is slider page which is responsible for slid page when open the app
 *
 * by: tawfiq toubeh
 *
 * v:1.0.0 last update 2021/7/1
* */
import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import Feather from "react-native-vector-icons/Feather";
import { Context } from "../context/AuthContext";


const Slider = () => {
  const { checkIfSignedIn } = useContext(Context);

  /**
   * this method control done button functionality at las slide in the slider
   * */
  const doneButton = () => <TouchableOpacity onPress={() => checkIfSignedIn()}>
    <Text style={styles.doneButtonStyle}>Done</Text>
  </TouchableOpacity>;


  return (<Onboarding
      onSkip={() => {
        checkIfSignedIn();
      }}
      DoneButtonComponent={doneButton}
      bottomBarColor="#fff"
      subTitleStyles={{textAlign: "right"}}
      pages={[
        {
          backgroundColor: "#fff",
          image: <Feather name="coffee" size={100} color='#18a8aa'/>,

          title: "اهلا بكم",
          subtitle: "في تطبيقنا",
        }, {
          backgroundColor: "#fff",
          image: <Feather name="check" size={100} color='#18a8aa'/>,
          title: "نمتاز بالتالي",
          subtitle: "المصداقية \n الموضوعية \n السرعة"

        }, {
          backgroundColor: "#fff",
          image: <Feather name="aperture" size={100} color='#18a8aa' />,
          title: "Start",
          subtitle: "Lets Go",
          nextLabel: <Text>next</Text>,
        },

      ]}
    />
  );
};

/**
 * this functionality hide the top bar
 * */
Slider.navigationOptions = {
  headerShown: false,
};


const styles = StyleSheet.create({
  doneButtonStyle: {
    margin: 15,
  },
});
export default Slider;
