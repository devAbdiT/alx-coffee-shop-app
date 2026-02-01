// app/home/index.tsx - WITH BOTTOM NAV BAR ADDED
import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  ImageBackground,
} from "react-native";
import { router } from "expo-router";
import { colors } from "@/constants/theme";
import { FAIcon, Icon } from "@/components/Icons";

const coffeeItems = [
  {
    id: 1,
    name: "Caffe Mocha",
    description: "Deep Foam",
    price: "$ 4.53",
    image: require("@/assets/images/mocha.png"),
  },
  {
    id: 2,
    name: "Flat White",
    description: "Espresso",
    price: "$ 3.53",
    image: require("@/assets/images/espresso.jpg"),
  },
  {
    id: 3,
    name: "Cappuccino",
    description: "Perfect blend",
    price: "$ 4.20",
    image: require("@/assets/images/cappuccino.png"),
  },
  {
    id: 4,
    name: "Latte",
    description: "Smooth milk",
    price: "$ 3.80",
    image: require("@/assets/images/latte.png"),
  },
];

const categories = ["All Coffee", "Machiatto", "Latte", "Americano"];

export default function HomeScreen() {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [activeTab, setActiveTab] = useState("home"); // Track active tab

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}
      >
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

          {/* Promo Banner */}
          <ImageBackground
            source={require("@/assets/images/Banner1.png")}
            style={styles.promoBanner}
            imageStyle={{ borderRadius: 15 }}
            resizeMode="cover"
          >
            <View style={styles.promoContent}>
              <Text style={styles.promoTitle}>Promo</Text>
              <Text style={styles.promoText}>Buy one get one FREE</Text>
            </View>
          </ImageBackground>
        </View>

        {/* Categories */}
        <View style={styles.categories}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.categoriesScroll}
            contentContainerStyle={styles.categoriesContent}
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

        {/* Coffee Grid */}
        <View style={styles.coffeeGrid}>
          {coffeeItems.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.coffeeCard}
              onPress={() => router.push(`/detail/${item.id}`)}
              activeOpacity={0.8}
            >
              <Image source={item.image} style={styles.coffeeImage} />
              <View style={styles.coffeeInfo}>
                <Text style={styles.coffeeName}>{item.name}</Text>
                <Text style={styles.coffeeDescription}>{item.description}</Text>
                <View style={styles.priceRow}>
                  <Text style={styles.coffeePrice}>{item.price}</Text>
                  <TouchableOpacity style={styles.addButton}>
                    <FAIcon name={Icon.plus} size={16} color={colors.white} />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Add extra padding at bottom for the tab bar */}
        <View style={styles.bottomPadding} />
      </ScrollView>

      {/* Custom Bottom Navigation Bar - ADDED HERE */}
      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => setActiveTab("home")}
        >
          <FAIcon
            name={Icon.home}
            size={24}
            color={activeTab === "home" ? colors.brown : colors.textLight}
          />
          <Text
            style={[
              styles.navText,
              activeTab === "home" && styles.navTextActive,
            ]}
          >
            Home
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => {
            setActiveTab("order");
            router.push("/order");
          }}
        >
          <FAIcon
            name={Icon.shoppingCart}
            size={24}
            color={activeTab === "order" ? colors.brown : colors.textLight}
          />
          <Text
            style={[
              styles.navText,
              activeTab === "order" && styles.navTextActive,
            ]}
          >
            Order
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => setActiveTab("favorite")}
        >
          <FAIcon
            name={Icon.heart}
            size={24}
            color={activeTab === "favorite" ? colors.brown : colors.textLight}
          />
          <Text
            style={[
              styles.navText,
              activeTab === "favorite" && styles.navTextActive,
            ]}
          >
            Favorite
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => setActiveTab("profile")}
        >
          <FAIcon
            name={Icon.user}
            size={24}
            color={activeTab === "profile" ? colors.brown : colors.textLight}
          />
          <Text
            style={[
              styles.navText,
              activeTab === "profile" && styles.navTextActive,
            ]}
          >
            Profile
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.cream,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 10,
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
    width: "100%",
    height: 120,
    padding: 20,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
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
  categories: {
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  categoriesScroll: {
    flexGrow: 0,
  },
  categoriesContent: {
    paddingRight: 20,
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
  coffeeGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  coffeeCard: {
    backgroundColor: colors.white,
    borderRadius: 20,
    marginBottom: 20,
    padding: 15,
    width: "48%",
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  coffeeImage: {
    width: "100%",
    height: 100,
    borderRadius: 15,
    resizeMode: "cover",
    marginBottom: 12,
  },
  coffeeInfo: {
    flex: 1,
  },
  coffeeName: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.darkBrown,
    marginBottom: 4,
    fontFamily: "Sora-Bold",
  },
  coffeeDescription: {
    fontSize: 12,
    color: colors.textLight,
    marginBottom: 10,
    fontFamily: "Sora-Regular",
  },
  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  coffeePrice: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.brown,
    fontFamily: "Sora-Bold",
  },
  addButton: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: colors.brown,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomPadding: {
    height: 70, // Space for bottom nav
  },
  // BOTTOM NAVIGATION STYLES - ADDED
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: colors.white,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderTopColor: colors.lightGray,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
  },
  navItem: {
    alignItems: "center",
    paddingHorizontal: 5,
    flex: 1,
  },
  navText: {
    fontSize: 10,
    color: colors.textLight,
    marginTop: 4,
    fontFamily: "Sora-Regular",
  },
  navTextActive: {
    color: colors.brown,
    fontFamily: "Sora-SemiBold",
  },
});
