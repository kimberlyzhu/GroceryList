import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const store1 = {
  name: "Costco",
  beverages: {
    name: "Beverages",
    products: ["tea", "apple juice", "coca-cola"],
  },
  bakery: {
    name: "Bakery",
    products: ["cookies", "bagels", "dinner rolls"],
  },
  canned: {
    name: "Canned Goods",
    products: ["tomato sauce", "chicken broth"],
  },
  dairy: {
    name: "Diary",
    products: [
      "shredded cheese",
      "string cheese",
      "eggs",
      "milk",
      "yogurt",
      "butter",
      "cream",
    ],
  },
  dryGoods: {
    name: "Dry Goods",
    products: ["cereal", "flour", "sugar", "pasta", "ramen"],
  },
  frozen: {
    name: "Frozen Goods",
    products: ["chicken bake", "dumplings", "chicken pot pie", "ice cream"],
  },
  meat: {
    name: "Meats",
    products: ["lunch meat", "steak", "ribs", "poultry"],
  },
  seafood: {
    name: "Seafood",
    products: ["shrimp", "lobster", "fish"],
  },
  fruits: {
    name: "Fruit",
    products: ["banana", "pineapple", "apple"],
  },
  vegetables: {
    name: "Vegetables",
    products: ["celery", "lettuce", "pepper", "tomatos"],
  },
  cleaners: {
    name: "Cleaning",
    products: ["baby wipes", "laundry detergent", "gloves", "dishwashing soap"],
  },
  paper: {
    name: "Paper Goods",
    products: [
      "paper towels",
      "toilet paper",
      "aluminum foil",
      "sandwich bags",
    ],
  },
  personal: {
    name: "Personal Care",
    products: [
      "shampoo",
      "conditioner",
      "hand soap",
      "shaving cream",
      "floss",
      "toothpaste",
      "toothbrush",
      "pads",
    ],
  },
  other: {
    name: "Other",
    products: [],
  },
};

// name, beverages, bakery, canned, dairy, dryGoods, frozen, meat, seafood, fruits, vegetables, cleaners, paper, personal, other,

const store2 = {
  name: "Marina Foods",
  beverages: {
    name: "Beverages",
    products: ["tea", "calipico"],
  },
  bakery: {
    name: "Bakery",
    products: ["cookies", "bagels", "dinner rolls"],
  },
  canned: {
    name: "Canned Goods",
    products: ["tomato sauce", "chicken broth"],
  },
  dairy: {
    name: "Diary",
    products: [
      "shredded cheese",
      "string cheese",
      "eggs",
      "milk",
      "yogurt",
      "butter",
      "cream",
    ],
  },
  dryGoods: {
    name: "Dry Goods",
    products: ["cereal", "flour", "sugar", "pasta", "ramen"],
  },
  frozen: {
    name: "Frozen Goods",
    products: ["chicken bake", "dumplings", "chicken pot pie", "ice cream"],
  },
  meat: {
    name: "Meats",
    products: ["lunch meat", "steak", "ribs", "poultry"],
  },
  seafood: {
    name: "Seafood",
    products: ["shrimp", "lobster", "fish"],
  },
  fruits: {
    name: "Fruit",
    products: ["banana", "pineapple", "apple"],
  },
  vegetables: {
    name: "Vegetables",
    products: ["celery", "lettuce", "pepper", "tomatos"],
  },
  cleaners: {
    name: "Cleaning",
    products: ["baby wipes", "laundry detergent", "gloves", "dishwashing soap"],
  },
  paper: {
    name: "Paper Goods",
    products: [
      "paper towels",
      "toilet paper",
      "aluminum foil",
      "sandwich bags",
    ],
  },
  personal: {
    name: "Personal Care",
    products: [
      "shampoo",
      "conditioner",
      "hand soap",
      "shaving cream",
      "floss",
      "toothpaste",
      "toothbrush",
      "pads",
    ],
  },
  other: {
    name: "Other",
    products: [],
  },
};

function Home(props) {
  const { navigation } = props;
  return (
    <>
      <View style={styles.tabBarInfoContainer}>
        <Text style={styles.tabBarInfoText}>My Lists</Text>
      </View>

      <View style={styles.container}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate("Detail", { item: store1 })}
        >
          <Text style={styles.buttonText}>{store1.name} List</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate("Detail", { item: store2 })}
        >
          <Text style={styles.buttonText}>{store2.name} List</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: "center",
    //alignItems: "center",
    backgroundColor: "#ebebeb",
  },
  text: {
    color: "#101010",
    fontSize: 24,
    fontWeight: "bold",
  },
  buttonContainer: {
    backgroundColor: "#222",
    borderRadius: 5,
    padding: 10,
    margin: 20,
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
  },
  tabBarInfoContainer: {
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center",
  },
});

export default Home;
