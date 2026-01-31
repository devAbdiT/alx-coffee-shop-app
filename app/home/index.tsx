// app/home/index.tsx
import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import { Link } from "expo-router";
import { colors, typography } from "@/constants/theme";

const { width } = Dimensions.get("window");

interface CoffeeItem {
  id: number;
  name: string;
  description: string;
  originalPrice: string;
  discountedPrice: string;
  image: any;
}

const coffeeItems: CoffeeItem[] = [
  {
    id: 1,
    name: "Caffè Mocha",
    description: "Cafe Mocha with Deep Foam and Espresso",
    originalPrice: "$4.53",
    discountedPrice: "$3.53",
    image: require("@/assets/images/mocha.png"),
  },
  {
    id: 2,
    name: "Espresso",
    description: "Strong and rich espresso shot",
    originalPrice: "$3.50",
    discountedPrice: "$2.99",
    image: require("@/assets/images/espresso.jpg"),
  },
  {
    id: 3,
    name: "Cappuccino",
    description: "Perfect blend of espresso and steamed milk",
    originalPrice: "$4.20",
    discountedPrice: "$3.75",
    image: require("@/assets/images/cappuccino.png"),
  },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.statusBar}>
        <Text style={styles.time}>9:41</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Discover</Text>
        </View>

        <View style={styles.coffeeList}>
          {coffeeItems.map((item) => (
            <Link key={item.id} href={`/detail/${item.id}`} asChild>
              <TouchableOpacity style={styles.coffeeCard} activeOpacity={0.8}>
                <Image source={item.image} style={styles.coffeeImage} />
                <View style={styles.coffeeInfo}>
                  <Text style={styles.coffeeName}>{item.name}</Text>
                  <Text style={styles.coffeeDescription}>
                    {item.description}
                  </Text>
                  <View style={styles.priceContainer}>
                    <Text style={styles.discountedPrice}>
                      {item.discountedPrice}
                    </Text>
                    <Text style={styles.originalPrice}>
                      {item.originalPrice}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </Link>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.cream,
  },
  statusBar: {
    paddingTop: 40,
    paddingHorizontal: 20,
    alignItems: "flex-end",
  },
  time: {
    fontSize: 16,
    fontFamily: typography.fontFamily,
    color: colors.black,
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontFamily: typography.fontFamilyBold,
    color: colors.darkBrown,
  },
  coffeeList: {
    paddingHorizontal: 20,
  },
  coffeeCard: {
    backgroundColor: colors.white,
    borderRadius: 20,
    marginBottom: 20,
    overflow: "hidden",
    elevation: 3,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  coffeeImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  coffeeInfo: {
    padding: 20,
  },
  coffeeName: {
    fontSize: 22,
    fontFamily: typography.fontFamilyBold,
    color: colors.darkBrown,
    marginBottom: 8,
  },
  coffeeDescription: {
    fontSize: 14,
    fontFamily: typography.fontFamily,
    color: colors.textLight,
    marginBottom: 12,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  discountedPrice: {
    fontSize: 20,
    fontFamily: typography.fontFamilyBold,
    color: colors.primary,
    marginRight: 10,
  },
  originalPrice: {
    fontSize: 16,
    fontFamily: typography.fontFamily,
    color: colors.textLight,
    textDecorationLine: "line-through",
  },
});
