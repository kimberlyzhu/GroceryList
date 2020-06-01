import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { Input, Button } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import Images from "../../assets/index";

function Detail(props) {
  const { route, navigation } = props;
  const { item } = route.params;
  const {
    name,
    beverages,
    bakery,
    canned,
    dairy,
    dryGoods,
    frozen,
    meat,
    seafood,
    fruits,
    vegetables,
    cleaners,
    paper,
    personal,
    other,
  } = item;

  const [isSelected, setSelection] = useState(true);

  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  var itemsToBuy = [];
  var currId = 0;

  for (var category in item) {
    if (category != "name") {
      itemsToBuy.push(
        <View key={currId}>
          <Text style={styles.categoryText}>{item[category].name}</Text>
        </View>
      );
      currId++;

      var prodId = 0;
      for (var product in item[category].products) {
        itemsToBuy.push(
          <View
            key={item[category].products[product]}
            style={styles.productContainer}
          >
            <TouchableOpacity style={styles.sideButtonContainer}>
              <Image style={styles.image} source={Images.greenCheck} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.sideButtonContainer}>
              <Image style={styles.image} source={Images.redX} />
            </TouchableOpacity>
            <Text style={styles.productText}>
              {item[category].products[product]}
            </Text>
          </View>
        );
        prodId++;
      }
    }
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        {/* <Text style={styles.text}>Detail Screen</Text>
      <View style={styles.card}>
        <Text style={styles.cardText}>Name: {name}</Text>
        <Text style={styles.cardText}>Home Planet: {home}</Text>
        <Text style={styles.cardText}>Species: {species}</Text>
      </View> */}
        {itemsToBuy}
      </ScrollView>
      <View style={styles.tabBarInfoContainer}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate("Settings")}
        >
          <Text style={styles.buttonText}>Go to Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ebebeb",
    padding: 20,
  },
  categoryText: {
    color: "#101010",
    fontSize: 24,
    fontWeight: "bold",
    backgroundColor: "#d8dce3",
  },
  productText: {
    color: "#101010",
    fontSize: 18,
    padding: 8,
  },
  card: {
    width: 350,
    height: 100,
    borderRadius: 10,
    backgroundColor: "#101010",
    margin: 10,
    padding: 10,
    alignItems: "center",
  },
  cardText: {
    fontSize: 18,
    color: "#03adfc",
    marginBottom: 5,
  },
  buttonContainer: {
    backgroundColor: "#03adfc",
    borderRadius: 5,
    padding: 10,
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
  },
  productContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  image: {
    flex: 1,
    width: 20,
    height: 20,
  },
  sideButtonContainer: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  tabBarInfoContainer: {
    alignItems: "center",
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center",
  },
});

export default Detail;
