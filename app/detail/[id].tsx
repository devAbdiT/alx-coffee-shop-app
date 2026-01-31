import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { colors } from "@/constants/theme";
import { FAIcon, Icon } from "@/components/Icons";

const { width } = Dimensions.get("window");

const coffeeData = [
  {
    id: 1,
    name: "Caffè Mocha",
    fullPrice: "$4.83",
    description:
      "A cappuccino is an approximately 150 ml (5 oz) beverage, with 25 ml of espresso coffee and 85 ml of fresh milk tea.",
    image: require("@/assets/images/mocha.png"),
    price: 4.53,
  },
  {
    id: 2,
    name: "Espresso",
    fullPrice: "$3.80",
    description: "Strong and bold espresso shot with rich crema.",
    image: require("@/assets/images/espresso.jpg"),
    price: 3.5,
  },
  {
    id: 3,
    name: "Cappuccino",
    fullPrice: "$4.50",
    description: "Perfect balance of espresso, steamed milk, and foam.",
    image: require("@/assets/images/cappuccino.png"),
    price: 4.2,
  },
];

const sizes = ["S", "M", "L"];

export default function DetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [selectedSize, setSelectedSize] = useState("M");

  const coffeeItem = coffeeData.find((item) => item.id.toString() === id);

  if (!coffeeItem) {
    return (
      <View style={styles.container}>
        <Text>Coffee not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Status Bar */}
      <View style={styles.statusBar}>
        <Text style={styles.time}>9:41</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Back Button */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
          activeOpacity={0.8}
        >
          <FAIcon name={Icon.arrowLeft} size={24} color={colors.darkBrown} />
        </TouchableOpacity>

        {/* Coffee Image */}
        <Image source={coffeeItem.image} style={styles.coffeeImage} />

        <View style={styles.content}>
          <Text style={styles.coffeeTitle}>{coffeeItem.name}</Text>
          <Text style={styles.coffeePrice}>{coffeeItem.fullPrice}</Text>

          {/* Description */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Description</Text>
            <Text style={styles.description}>{coffeeItem.description}</Text>
            <TouchableOpacity style={styles.readMore}>
              <Text style={styles.readMoreText}>Read More</Text>
              <FAIcon
                name={Icon.chevronRight}
                size={14}
                color={colors.primary}
              />
            </TouchableOpacity>
          </View>

          {/* Size */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Size</Text>
            <View style={styles.sizeContainer}>
              {sizes.map((size) => (
                <TouchableOpacity
                  key={size}
                  style={[
                    styles.sizeButton,
                    selectedSize === size && styles.sizeButtonSelected,
                  ]}
                  onPress={() => setSelectedSize(size)}
                  activeOpacity={0.8}
                >
                  <Text
                    style={[
                      styles.sizeText,
                      selectedSize === size && styles.sizeTextSelected,
                    ]}
                  >
                    {size}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Price */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Price</Text>
            <Text style={styles.price}>${coffeeItem.price.toFixed(2)}</Text>
          </View>

          {/* Buy Now Button */}
          <TouchableOpacity
            style={styles.buyButton}
            onPress={() => router.push("/order")}
            activeOpacity={0.8}
          >
            <Text style={styles.buyButtonText}>Buy Now</Text>
            <FAIcon name={Icon.shoppingCart} size={20} color={colors.white} />
          </TouchableOpacity>
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
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  time: {
    fontSize: 16,
    fontFamily: "System",
    color: colors.black,
    fontWeight: "600",
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
    zIndex: 10,
    backgroundColor: colors.white,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  coffeeImage: {
    width,
    height: 300,
    resizeMode: "cover",
  },
  content: {
    padding: 20,
  },
  coffeeTitle: {
    fontSize: 28,
    fontFamily: "System",
    fontWeight: "bold",
    color: colors.darkBrown,
    marginBottom: 8,
  },
  coffeePrice: {
    fontSize: 20,
    fontFamily: "System",
    fontWeight: "600",
    color: colors.primary,
    marginBottom: 30,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: "System",
    fontWeight: "bold",
    color: colors.darkBrown,
    marginBottom: 15,
  },
  description: {
    fontSize: 14,
    color: colors.textLight,
    lineHeight: 22,
    marginBottom: 10,
  },
  readMore: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  readMoreText: {
    fontSize: 14,
    color: colors.primary,
    fontFamily: "System",
    fontWeight: "600",
  },
  sizeContainer: {
    flexDirection: "row",
    gap: 15,
  },
  sizeButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: colors.lightGray,
  },
  sizeButtonSelected: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  sizeText: {
    fontSize: 18,
    fontFamily: "System",
    fontWeight: "600",
    color: colors.textDark,
  },
  sizeTextSelected: {
    color: colors.white,
  },
  price: {
    fontSize: 32,
    fontFamily: "System",
    fontWeight: "bold",
    color: colors.primary,
  },
  buyButton: {
    backgroundColor: colors.primary,
    paddingVertical: 18,
    borderRadius: 30,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    marginTop: 20,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  buyButtonText: {
    color: colors.white,
    fontSize: 18,
    fontFamily: "System",
    fontWeight: "600",
  },
});
