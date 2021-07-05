/**
 * this is the context page to control the flow of data throw the app
 *
 * by: tawfiq toubeh
 *
 * v:1.0.0 last update 2021/7/4
 * */
import React from "react";
import createDataContext from "./createDataContext";
import { navigate } from "../navRef";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CustomMod from "../CustomMod";

const signinReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signin":
      return { errorMessage: "", token: action.payload };
    case "loadInfo":
      return { ...state, errorMessage: "", info: action.payload };
    case "loadRec":
      return { ...state, errorMessage: "", record: action.payload };

    default:
      return state;
  }
};
/**t
 * his method check if the user signed in when open the app
 * */
const checkIfSignedIn = dispatch => async () => {
  const token = await AsyncStorage.getItem("token");             //get the token from the internal storage
  if (token) {                                                   //if there is token pring the info and go to home page else go to sign in page
    dispatch({ type: "signin", payload: token });
    const info = JSON.parse(await CustomMod.getUserInfo(token));
    dispatch({ type: "loadInfo", payload: info });
    navigate("HomePage");
  } else {
    navigate("Signin");
  }

};

/**
 * this method send api request to get verification number
 * */
const getVarCode = (dispatch) => {
  return async ( number ) => {
    try {
      const askVerificationRes= await CustomMod.setVarCode(number);
      if (askVerificationRes)
        navigate("VerificationScreen");
      else {
        dispatch({ type: "add_error", payload: "Wrong cardinal" });
      }
    } catch (err) {
      console.log(err);
      dispatch({ type: "add_error", payload: "Wrong cardinal" });
    }

  };
};

/**
 * this method check if the the user send the verification number correctly
 * */
const checkVarCod = (dispatch) => {
  return async (pinCode) => {
    const userInfo = JSON.parse(await CustomMod.checkReq(pinCode));
    if (userInfo.type === "register")        //if the user access token is register go to crate account page
      navigate("CreateAcc");
    else if (userInfo) {                     //if the user access token is login go to save the token to internal storage and go to homepage
     await AsyncStorage.setItem("token", userInfo.access_token);
      dispatch({ type: "signin", payload: userInfo.access_token});
      const token = await AsyncStorage.getItem('token');
      dispatch({ type: "signin", payload: token });
      const info = JSON.parse(await CustomMod.getUserInfo(token));
      dispatch({ type: "loadInfo", payload: info });
      navigate("HomePage");
      if (info){
      dispatch({ type: "loadInfo", payload: info });
      navigate("HomePage");}
      else {
        dispatch({ type: "add_error", payload: "Wrong cardinal" });
      }
    } else {
      dispatch({ type: "add_error", payload: "Wrong cardinal" });
    }

  };
};

/**
 * this method send api request to get create account
 * */
const createAccount = (dispatch) => {
  return async (inId, PolId, dob) => {
    const info=JSON.parse(await CustomMod.createAcc(inId, PolId, dob))

    AsyncStorage.setItem("token", info.access_token);;
    checkIfSignedIn();
    navigate("HomePage");
    if (info) {
      AsyncStorage.setItem("token", info.access_token);
      checkIfSignedIn();
      navigate("HomePage");
    }
    else {
      dispatch({ type: "add_error", payload: "Wrong cardinal" });
    }
  };
};

/**
 * this method send api request to get the charts data
 * */
const loadData=(dispatch)=>{
  return async() =>{
    const data=JSON.parse(await CustomMod.chartRecord());
    dispatch({ type: "loadRec", payload: data });

  }
}
export const { Context, Provider } = createDataContext(
  signinReducer,
  { getVarCode, checkIfSignedIn, checkVarCod, createAccount,loadData },
  [{ token: null, errorMessage: "", info: null,record:null }],
);


