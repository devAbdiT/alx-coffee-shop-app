// app/detail/[id].tsx
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
import { Link, useLocalSearchParams, router } from "expo-router";
import { colors, typography } from "@/constants/theme";

const { width } = Dimensions.get("window");

const coffeeData = [
  {
    id: 1,
    name: "Caffè Mocha",
    fullPrice: "$4.83 ($2.30)",
    description:
      "A cappuccino is an approximately 150 ml (5 oz) beverage, with 25 ml of espresso coffee and 85 ml of fresh milk tea.",
    image: require("@/assets/images/mocha.jpg"),
    price: 4.53,
  },
  {
    id: 2,
    name: "Espresso",
    fullPrice: "$3.80 ($1.80)",
    description: "Strong and bold espresso shot with rich crema.",
    image: require("@/assets/images/espresso.jpg"),
    price: 3.5,
  },
  {
    id: 3,
    name: "Cappuccino",
    fullPrice: "$4.50 ($2.10)",
    description: "Perfect balance of espresso, steamed milk, and foam.",
    image: require("@/assets/images/cappuccino.jpg"),
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

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
  };

  const handleBuyNow = () => {
    router.push("/order");
  };

  return (
    <View style={styles.container}>
      <View style={styles.statusBar}>
        <Text style={styles.time}>9:41</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
          activeOpacity={0.8}
        >
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>

        <Image source={coffeeItem.image} style={styles.detailImage} />

        <View style={styles.content}>
          <Text style={styles.coffeeTitle}>{coffeeItem.name}</Text>
          <Text style={styles.coffeePrice}>{coffeeItem.fullPrice}</Text>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Description</Text>
            <Text style={styles.description}>{coffeeItem.description}</Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Text style={styles.readMore}>Read More</Text>
            </TouchableOpacity>
          </View>

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
                  onPress={() => handleSizeSelect(size)}
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

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Price</Text>
            <Text style={styles.price}>${coffeeItem.price.toFixed(2)}</Text>
          </View>

          <TouchableOpacity
            style={styles.buyButton}
            onPress={handleBuyNow}
            activeOpacity={0.8}
          >
            <Text style={styles.buyButtonText}>Buy Now</Text>
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
  },
  time: {
    fontSize: 16,
    fontFamily: typography.fontFamily,
    color: colors.black,
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
    elevation: 3,
  },
  backText: {
    fontSize: 24,
    color: colors.darkBrown,
  },
  detailImage: {
    width,
    height: 300,
    resizeMode: "cover",
  },
  content: {
    padding: 20,
  },
  coffeeTitle: {
    fontSize: 28,
    fontFamily: typography.fontFamilyBold,
    color: colors.darkBrown,
    marginBottom: 8,
  },
  coffeePrice: {
    fontSize: 20,
    fontFamily: typography.fontFamilySemiBold,
    color: colors.primary,
    marginBottom: 30,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: typography.fontFamilyBold,
    color: colors.darkBrown,
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    fontFamily: typography.fontFamily,
    color: colors.textLight,
    lineHeight: 22,
    marginBottom: 10,
  },
  readMore: {
    fontSize: 14,
    fontFamily: typography.fontFamilySemiBold,
    color: colors.primary,
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
    fontFamily: typography.fontFamilySemiBold,
    color: colors.textDark,
  },
  sizeTextSelected: {
    color: colors.white,
  },
  price: {
    fontSize: 32,
    fontFamily: typography.fontFamilyBold,
    color: colors.primary,
  },
  buyButton: {
    backgroundColor: colors.primary,
    paddingVertical: 18,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 20,
    elevation: 3,
  },
  buyButtonText: {
    color: colors.white,
    fontSize: 18,
    fontFamily: typography.fontFamilySemiBold,
  },
});
