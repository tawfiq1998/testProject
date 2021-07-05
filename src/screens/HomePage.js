/**
 *
 * this page is responsible for home page
 *
 * by: tawfiq toubeh
 *
 * v:1.0.0 last update 2021/Math.floor(Math.random() * 50)/4
 * */
import React, { useContext, useEffect } from "react";
import { StyleSheet, View, Dimensions, ScrollView, Text } from "react-native";
import { LineChart, ProgressChart } from "react-native-chart-kit";
import { Context } from "../context/AuthContext";
import Feather from "react-native-vector-icons/Feather";


const HomePage = () => {
  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };
  const { state, loadData } = useContext(Context);
  useEffect(() => {
    loadData();
  }, []);
  return (
    state.record == null ?
      null:  //this condition return empty view when the state(data) is not loaded yet and return the charts after load
      <ScrollView>
        <View style={styles.firstChartStyle}>
          <Text style={{ alignSelf: "center", fontSize: 15 }}>number of positive cases for each state</Text>

          <LineChart

            data={{
              labels: [state.record[Math.floor(Math.random() * 50)].state, state.record[Math.floor(Math.random() * 50)].state, state.record[Math.floor(Math.random() * 50)].state, state.record[Math.floor(Math.random() * 50)].state, state.record[Math.floor(Math.random() * 50)].state, state.record[Math.floor(Math.random() * 50)].state],
              datasets: [
                {
                  data: [
                    state.record[Math.floor(Math.random() * 50)].positive,
                    state.record[Math.floor(Math.random() * 50)].positive,
                    state.record[Math.floor(Math.random() * 50)].positive,
                    state.record[Math.floor(Math.random() * 50)].positive,
                    state.record[Math.floor(Math.random() * 50)].positive,
                    state.record[Math.floor(Math.random() * 50)].positive,
                  ],
                },
              ],
            }}
            width={Dimensions.get("window").width - 20} // from react-native
            height={250}
            chartConfig={{
              backgroundGradientFrom: "black",
              backgroundGradientTo: "red",
              decimalPlaces: 0, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
              style: {
                borderRadius: 16,

              },
              propsForDots: {
                r: "6",
                strokeWidth: "3",
                stroke: "#ffa726",
              },
            }}
            bezier
            style={{
              marginRight: 10,
            }}
          />
        </View>
        <View style={styles.firstChartStyle}>
          <Text style={{ alignSelf: "center", fontSize: 15 }}>number of deaths cases for each state</Text>
          <LineChart
            data={{
              labels: [state.record[0].state, state.record[1].state, state.record[2].state, state.record[3].state, state.record[4].state],
              datasets: [
                {
                  data: [
                    state.record[0].death,
                    state.record[1].death,
                    state.record[2].death,
                    state.record[3].death,
                    state.record[4].death,
                  ],
                },
              ],
            }}
            width={Dimensions.get("window").width - 20} // from react-native
            height={220}
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: "white",
              backgroundGradientFrom: "black",
              backgroundGradientTo: "blue",
              decimalPlaces: 0, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
                left: 30,
              },
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "#ffa726",
              },
            }}
            bezier
            style={{
              borderRadius: 16,
              marginRight: 10,
            }}
          />

        </View>
        <View style={styles.progressChartStyle}>
          <Text style={{ alignSelf: "center", fontSize: 15 }}> death rate over positive cases in ak</Text>
          <ProgressChart
            data={{
              labels: ["death","positive"],
              data:[
              state.record[0].death/(state.record[0].death+state.record[0].positive),
              state.record[0].positive/(state.record[0].death+state.record[0].positive),
            ] }}
            width={Dimensions.get("window").width - 20}
            height={220}
            strokeWidth={16}
            radius={32}
            chartConfig={chartConfig}
            hideLegend={false}
          />
        </View>
        <View>

        </View>

        {/**
         this buttons for testing issue
         */}
{/*
        <Button title="sign in" onPress={() => navigate("Signin")} />
        <Button title="sign in" onPress={() => navigate("VerificationScreen")} />
        <Button title="sign in" onPress={() => navigate("CreateAcc")} />
*/}

      </ScrollView>
  );
};

/**
 * this functionality to manipulate the layout of home page icon in tabBar
 * */
HomePage.navigationOptions = {
  tabBarIcon: () => {
    return <Feather size={20} name="home" />;
  },
};

const styles = StyleSheet.create({
  firstChartStyle: {
    marginHorizontal: 15,
  },
  progressChartStyle:{
    margin: 15,
  }
});
export default HomePage;
