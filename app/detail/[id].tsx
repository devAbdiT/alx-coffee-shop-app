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
    name: "Caffe Mocha",
    subtitle: "Ice/Hot",
    rating: 4.8,
    reviews: 230,
    description:
      "A cappuccino is an approximately 150 ml (5 oz) beverage, with 25 ml of espresso coffee and 85ml of fresh milk the fo...",
    image: require("@/assets/images/mocha.png"),
    price: 4.53,
  },
  {
    id: 2,
    name: "Flat White",
    subtitle: "Espresso",
    rating: 4.5,
    reviews: 180,
    description: "Strong and bold espresso shot with rich crema.",
    image: require("@/assets/images/espresso.jpg"),
    price: 3.53,
  },
  {
    id: 3,
    name: "Cappuccino",
    subtitle: "Perfect blend",
    rating: 4.7,
    reviews: 210,
    description: "Perfect balance of espresso, steamed milk, and foam.",
    image: require("@/assets/images/cappuccino.png"),
    price: 4.2,
  },
  {
    id: 4,
    name: "Latte",
    subtitle: "Smooth milk",
    rating: 4.6,
    reviews: 190,
    description: "Creamy espresso with steamed milk and light foam.",
    image: require("@/assets/images/latte.png"), // Using espresso image as placeholder
    price: 3.8,
  },
];

const sizes = ["S", "M", "L"];

export default function DetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [selectedSize, setSelectedSize] = useState("M");
  const [showFullDescription, setShowFullDescription] = useState(false);

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
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header with Back and Favorite */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
            activeOpacity={0.8}
          >
            <FAIcon name={Icon.arrowLeft} size={24} color={colors.darkBrown} />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Detail</Text>

          <TouchableOpacity style={styles.favoriteButton} activeOpacity={0.8}>
            <FAIcon name={Icon.heart} size={24} color={colors.darkBrown} />
          </TouchableOpacity>
        </View>

        {/* Coffee Image */}
        <View style={styles.imageContainer}>
          <Image source={coffeeItem.image} style={styles.coffeeImage} />
        </View>

        <View style={styles.content}>
          {/* Coffee Name and Subtitle */}
          <View style={styles.titleRow}>
            <View style={styles.titleContainer}>
              <Text style={styles.coffeeName}>{coffeeItem.name}</Text>
              <Text style={styles.coffeeSubtitle}>{coffeeItem.subtitle}</Text>
            </View>
            <View style={styles.ratingContainer}>
              <FAIcon name={Icon.star} size={20} color="#FFD700" />
              <Text style={styles.ratingText}>
                {coffeeItem.rating} ({coffeeItem.reviews})
              </Text>
            </View>
          </View>

          {/* Description */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Description</Text>
            <Text style={styles.description}>
              {coffeeItem.description}
              {showFullDescription ? " [Full description here]" : ""}
            </Text>
            <TouchableOpacity
              style={styles.readMore}
              onPress={() => setShowFullDescription(!showFullDescription)}
              activeOpacity={0.7}
            >
              <Text style={styles.readMoreText}>
                {showFullDescription ? "Read Less" : "Read More"}
              </Text>
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

          {/* Price and Buy Button */}
          <View style={styles.bottomSection}>
            <View style={styles.priceContainer}>
              <Text style={styles.priceLabel}>Price</Text>
              <Text style={styles.price}>$ {coffeeItem.price.toFixed(2)}</Text>
            </View>

            <TouchableOpacity
              style={styles.buyButton}
              onPress={() => router.push("/order")}
              activeOpacity={0.8}
            >
              <Text style={styles.buyButtonText}>Buy Now</Text>
            </TouchableOpacity>
          </View>
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
    color: colors.black,
    fontWeight: "600",
    fontFamily: "Sora-SemiBold",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.darkBrown,
    fontFamily: "Sora-Bold",
  },
  favoriteButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  imageContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  coffeeImage: {
    width: width - 40,
    height: 250,
    borderRadius: 20,
    resizeMode: "cover",
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 25,
  },
  titleContainer: {
    flex: 1,
  },
  coffeeName: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.darkBrown,
    marginBottom: 5,
    fontFamily: "Sora-Bold",
  },
  coffeeSubtitle: {
    fontSize: 16,
    color: colors.textLight,
    fontFamily: "Sora-Regular",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 15,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  ratingText: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.darkBrown,
    marginLeft: 5,
    fontFamily: "Sora-SemiBold",
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.darkBrown,
    marginBottom: 15,
    fontFamily: "Sora-Bold",
  },
  description: {
    fontSize: 14,
    color: colors.textLight,
    lineHeight: 22,
    marginBottom: 10,
    fontFamily: "Sora-Regular",
  },
  readMore: {
    alignSelf: "flex-start",
  },
  readMoreText: {
    fontSize: 14,
    color: colors.brown,
    fontWeight: "600",
    fontFamily: "Sora-SemiBold",
  },
  sizeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  sizeButton: {
    width: 80,
    height: 40,
    borderRadius: 15,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: colors.lightGray,
  },
  sizeButtonSelected: {
    backgroundColor: colors.brown,
    borderColor: colors.brown,
  },
  sizeText: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.textDark,
    fontFamily: "Sora-SemiBold",
  },
  sizeTextSelected: {
    color: colors.white,
  },
  bottomSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  priceContainer: {
    flex: 1,
  },
  priceLabel: {
    fontSize: 14,
    color: colors.textLight,
    marginBottom: 5,
    fontFamily: "Sora-Regular",
  },
  price: {
    fontSize: 32,
    fontWeight: "bold",
    color: colors.brown,
    fontFamily: "Sora-Bold",
  },
  buyButton: {
    backgroundColor: colors.brown,
    paddingHorizontal: 40,
    paddingVertical: 18,
    borderRadius: 20,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  buyButtonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Sora-Bold",
  },
});
