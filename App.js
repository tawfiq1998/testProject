import React from "react";
import Slider from "./src/screens/Slider";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Provider } from "./src/context/AuthContext";
import { setNavigator } from "./src/navRef";
import HomePage from "./src/screens/HomePage";
import SignInPage from "./src/screens/SignInPage";
import QuestionsAndAnswers from "./src/screens/QuestionsAndAnswers";
import AltibbiContent from "./src/screens/AltibbiContent";
import Details from "./src/screens/Details";
import VerificationScreen from "./src/screens/verificationScreen";
import CreateAcc from "./src/screens/CreateAcc";

const switchNav = createSwitchNavigator({
  Slider: Slider,
  Signin: SignInPage,
  VerificationScreen: VerificationScreen,
  CreateAcc: CreateAcc,

  mainFlow: createBottomTabNavigator({
    HomePage: HomePage,
    QAA: QuestionsAndAnswers,
    AltibbiContent: AltibbiContent,
    Details: Details,

  }, {
    tabBarOptions: {
      style: {
        height: 55,
      },
      tabStyle: {
        marginBottom: 5,
      },
    },
  }),
});

const App = createAppContainer(switchNav);
export default () => {
  return (
      <Provider>
        <App ref={navigator => {
          setNavigator(navigator);
        }} />
      </Provider>
  );
}
