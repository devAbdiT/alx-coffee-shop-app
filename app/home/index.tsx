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
import { router } from "expo-router";
import { colors } from "@/constants/theme";
import { FAIcon, Icon } from "@/components/Icons";

const { width } = Dimensions.get("window");

interface CoffeeItem {
  id: number;
  name: string;
  description: string;
  originalPrice: string;
  discountedPrice: string;
  image: any;
  rating: number;
}

const coffeeItems: CoffeeItem[] = [
  {
    id: 1,
    name: "Caffè Mocha",
    description: "Cafe Mocha with Deep Foam and Espresso",
    originalPrice: "$4.53",
    discountedPrice: "$3.53",
    image: {
      uri: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd",
    },
    rating: 4.8,
  },
  {
    id: 2,
    name: "Espresso",
    description: "Strong and rich espresso shot",
    originalPrice: "$3.50",
    discountedPrice: "$2.99",
    image: {
      uri: "https://images.unsplash.com/photo-1510707577719-ae7c9b788690",
    },
    rating: 4.5,
  },
  {
    id: 3,
    name: "Cappuccino",
    description: "Perfect blend of espresso and steamed milk",
    originalPrice: "$4.20",
    discountedPrice: "$3.75",
    image: {
      uri: "https://images.unsplash.com/photo-1572442388796-11668a67e53d",
    },
    rating: 4.7,
  },
];

export default function HomeScreen() {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id],
    );
  };

  return (
    <View style={styles.container}>
      {/* Status Bar */}
      <View style={styles.statusBar}>
        <Text style={styles.time}>9:41</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <View>
              <Text style={styles.greeting}>Good morning! ☀️</Text>
              <Text style={styles.title}>Discover</Text>
            </View>
            <View style={styles.headerIcons}>
              <TouchableOpacity style={styles.iconButton}>
                <FAIcon name={Icon.search} size={24} color={colors.darkBrown} />
              </TouchableOpacity>
              <TouchableOpacity style={[styles.iconButton, styles.cartButton]}>
                <FAIcon
                  name={Icon.shoppingCart}
                  size={24}
                  color={colors.darkBrown}
                />
                <View style={styles.cartBadge}>
                  <Text style={styles.cartBadgeText}>2</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.subtitle}>
            What would you like to drink today?
          </Text>
        </View>

        {/* Coffee List */}
        <View style={styles.coffeeList}>
          {coffeeItems.map((item) => {
            const isFavorite = favorites.includes(item.id);

            return (
              <TouchableOpacity
                key={item.id}
                style={styles.coffeeCard}
                onPress={() => router.push(`/detail/${item.id}`)}
                activeOpacity={0.8}
              >
                <Image source={item.image} style={styles.coffeeImage} />

                <TouchableOpacity
                  style={styles.favoriteButton}
                  onPress={() => toggleFavorite(item.id)}
                  activeOpacity={0.7}
                >
                  <FAIcon
                    name={Icon.heart}
                    size={20}
                    color={isFavorite ? colors.primary : colors.textLight}
                  />
                </TouchableOpacity>

                <View style={styles.coffeeInfo}>
                  <Text style={styles.coffeeName}>{item.name}</Text>
                  <Text style={styles.coffeeDescription}>
                    {item.description}
                  </Text>

                  <View style={styles.ratingContainer}>
                    <FAIcon name={Icon.star} size={16} color="#FFD700" />
                    <Text style={styles.ratingText}>{item.rating}</Text>
                  </View>

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
            );
          })}
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
    fontFamily: "System",
    color: colors.black,
    fontWeight: "600",
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  greeting: {
    fontSize: 16,
    color: colors.textLight,
    fontFamily: "System",
  },
  title: {
    fontSize: 32,
    fontFamily: "System",
    fontWeight: "bold",
    color: colors.darkBrown,
  },
  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  iconButton: {
    padding: 8,
  },
  cartButton: {
    position: "relative",
  },
  cartBadge: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: colors.primary,
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  cartBadgeText: {
    color: colors.white,
    fontSize: 12,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    color: colors.textLight,
    fontFamily: "System",
  },
  coffeeList: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  coffeeCard: {
    backgroundColor: colors.white,
    borderRadius: 20,
    marginBottom: 20,
    overflow: "hidden",
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  coffeeImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  favoriteButton: {
    position: "absolute",
    top: 15,
    right: 15,
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
  coffeeInfo: {
    padding: 20,
  },
  coffeeName: {
    fontSize: 22,
    fontFamily: "System",
    fontWeight: "bold",
    color: colors.darkBrown,
    marginBottom: 8,
  },
  coffeeDescription: {
    fontSize: 14,
    color: colors.textLight,
    marginBottom: 12,
    fontFamily: "System",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  ratingText: {
    fontSize: 14,
    color: colors.darkBrown,
    marginLeft: 5,
    fontWeight: "600",
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  discountedPrice: {
    fontSize: 20,
    fontFamily: "System",
    fontWeight: "bold",
    color: colors.primary,
    marginRight: 10,
  },
  originalPrice: {
    fontSize: 16,
    color: colors.textLight,
    textDecorationLine: "line-through",
    fontFamily: "System",
  },
});
