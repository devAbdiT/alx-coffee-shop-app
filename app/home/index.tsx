// app/home/index.tsx - UPDATED TO MATCH SCREENSHOT
import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  TextInput,
} from "react-native";
import { router } from "expo-router";
import { colors } from "@/constants/theme";
import { FAIcon, Icon } from "@/components/Icons";

const { width } = Dimensions.get("window");

const coffeeItems = [
  {
    id: 1,
    name: "Caffe Mocha",
    description: "Deep Foam",
    price: "$4.53",
    image: require("@/assets/images/mocha.png"),
    rating: 4.8,
  },
  {
    id: 2,
    name: "Flat White",
    description: "Espresso",
    price: "$3.53",
    image: require("@/assets/images/espresso.jpg"),
    rating: 4.5,
  },
  {
    id: 3,
    name: "Cappuccino",
    description: "Perfect blend",
    price: "$4.20",
    image: require("@/assets/images/cappuccino.png"),
    rating: 4.7,
  },
];

const categories = ["All Coffee", "Machiatto", "Latte", "Americano"];

export default function HomeScreen() {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [searchText, setSearchText] = useState("");

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <View>
              <Text style={styles.locationLabel}>Location</Text>
              <View style={styles.locationContainer}>
                <FAIcon
                  name={Icon.mapMarker}
                  size={16}
                  color={colors.textLight}
                />
                <Text style={styles.locationText}>Bilzen, Tanjungbalai</Text>
                <FAIcon
                  name={Icon.chevronRight}
                  size={16}
                  color={colors.textLight}
                  style={styles.locationChevron}
                />
              </View>
            </View>
            <TouchableOpacity style={styles.avatarButton}>
              <FAIcon name={Icon.user} size={24} color={colors.white} />
            </TouchableOpacity>
          </View>

          {/* Search Bar */}
          <View style={styles.searchContainer}>
            <FAIcon name={Icon.search} size={20} color={colors.textLight} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search coffee"
              placeholderTextColor={colors.textLight}
              value={searchText}
              onChangeText={setSearchText}
            />
          </View>

          {/* Promo Banner - Updated to match screenshot */}
          <View style={styles.promoBanner}>
            <View style={styles.promoContent}>
              <Text style={styles.promoTitle}>Promo</Text>
              <Text style={styles.promoText}>Buy one get</Text>
              <Text style={styles.promoText}>one FREE</Text>
            </View>
            <View style={styles.promoImageContainer}>
              {/* This would be your promo image - using a placeholder for now */}
              <View style={styles.promoImagePlaceholder}>
                <Text style={styles.promoImageText}>Promo</Text>
              </View>
            </View>
          </View>

          {/* Categories */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.categoriesScroll}
          >
            {categories.map((category, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.categoryButton,
                  selectedCategory === index && styles.categoryButtonActive,
                ]}
                onPress={() => setSelectedCategory(index)}
                activeOpacity={0.8}
              >
                <Text
                  style={[
                    styles.categoryText,
                    selectedCategory === index && styles.categoryTextActive,
                  ]}
                >
                  {category}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Coffee List */}
        <View style={styles.coffeeList}>
          {coffeeItems.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.coffeeCard}
              onPress={() => router.push(`/detail/${item.id}`)}
              activeOpacity={0.8}
            >
              {/* Coffee Image - Circular on LEFT */}
              <Image source={item.image} style={styles.coffeeImage} />

              {/* Coffee Info on RIGHT */}
              <View style={styles.coffeeInfo}>
                <Text style={styles.coffeeName}>{item.name}</Text>
                <Text style={styles.coffeeDescription}>{item.description}</Text>

                <View style={styles.ratingContainer}>
                  <FAIcon name={Icon.star} size={16} color="#FFD700" />
                  <Text style={styles.ratingText}>{item.rating}</Text>
                </View>

                <View style={styles.priceRow}>
                  <Text style={styles.coffeePrice}>{item.price}</Text>
                  <TouchableOpacity style={styles.addButton}>
                    <FAIcon name={Icon.plus} size={20} color={colors.white} />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
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
  header: {
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
  },
  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  locationLabel: {
    fontSize: 14,
    color: colors.textLight,
    marginBottom: 4,
    fontFamily: "Sora-Regular",
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationText: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.darkBrown,
    marginLeft: 8,
    marginRight: 4,
    fontFamily: "Sora-SemiBold",
  },
  locationChevron: {
    marginTop: 2,
  },
  avatarButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.brown,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: 15,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 20,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  searchInput: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    color: colors.textDark,
    fontFamily: "Sora-Regular",
  },
  promoBanner: {
    backgroundColor: colors.brown,
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  promoContent: {
    flex: 1,
  },
  promoTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.white,
    marginBottom: 4,
    fontFamily: "Sora-Bold",
  },
  promoText: {
    fontSize: 14,
    color: colors.secondary,
    fontFamily: "Sora-Regular",
  },
  promoImageContainer: {
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  promoImagePlaceholder: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: colors.secondary,
    justifyContent: "center",
    alignItems: "center",
  },
  promoImageText: {
    color: colors.brown,
    fontSize: 12,
    fontFamily: "Sora-Regular",
  },
  categoriesScroll: {
    marginBottom: 10,
  },
  categoryButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 12,
    backgroundColor: colors.white,
  },
  categoryButtonActive: {
    backgroundColor: colors.brown,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: "500",
    color: colors.textDark,
    fontFamily: "Sora-SemiBold",
  },
  categoryTextActive: {
    color: colors.white,
  },
  coffeeList: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  coffeeCard: {
    backgroundColor: colors.white,
    borderRadius: 20,
    marginBottom: 20,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  coffeeImage: {
    width: 100,
    height: 100,
    borderRadius: 15,
    resizeMode: "cover",
    marginRight: 15,
  },
  coffeeInfo: {
    flex: 1,
  },
  coffeeName: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.darkBrown,
    marginBottom: 4,
    fontFamily: "Sora-Bold",
  },
  coffeeDescription: {
    fontSize: 14,
    color: colors.textLight,
    marginBottom: 8,
    fontFamily: "Sora-Regular",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  ratingText: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.darkBrown,
    marginLeft: 5,
    fontFamily: "Sora-SemiBold",
  },
  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  coffeePrice: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.brown,
    fontFamily: "Sora-Bold",
  },
  addButton: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: colors.brown,
    justifyContent: "center",
    alignItems: "center",
  },
});
