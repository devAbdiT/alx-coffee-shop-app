// app/delivery/index.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
import { colors, typography } from "@/constants/theme";

const { width } = Dimensions.get("window");

type DeliveryType = "delivery" | "pickup";

export default function DeliveryScreen() {
  const [deliveryType, setDeliveryType] = useState<DeliveryType>("delivery");

  const handleDeliveryTypeChange = (type: DeliveryType) => {
    setDeliveryType(type);
  };

  return (
    <View style={styles.container}>
      <View style={styles.statusBar}>
        <Text style={styles.time}>9:41</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Delivery</Text>
        </View>

        <View style={styles.deliveryType}>
          <TouchableOpacity
            style={[
              styles.typeButton,
              deliveryType === "delivery" && styles.typeButtonActive,
            ]}
            onPress={() => handleDeliveryTypeChange("delivery")}
            activeOpacity={0.8}
          >
            <Text
              style={[
                styles.typeText,
                deliveryType === "delivery" && styles.typeTextActive,
              ]}
            >
              Delivery
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.typeButton,
              deliveryType === "pickup" && styles.typeButtonActive,
            ]}
            onPress={() => handleDeliveryTypeChange("pickup")}
            activeOpacity={0.8}
          >
            <Text
              style={[
                styles.typeText,
                deliveryType === "pickup" && styles.typeTextActive,
              ]}
            >
              Pick Up
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.deliveryInfo}>
          <Text style={styles.infoTitle}>Deliver your order</Text>
          <Text style={styles.infoSubtitle}>
            We will deliver your goods to you in the shortest possible time.
          </Text>
        </View>

        <View style={styles.courierCard}>
          <View style={styles.courierInfo}>
            <Image
              source={require("@/assets/images/courier-avatar.jpg")}
              style={styles.courierAvatar}
            />
            <View style={styles.courierDetails}>
              <Text style={styles.courierName}>Brooklyn Simmons</Text>
              <Text style={styles.courierRole}>Personal Courier</Text>
            </View>
          </View>
          <View style={styles.timeRemaining}>
            <Text style={styles.timeText}>10 minutes left</Text>
            <Text style={styles.deliveryAddress}>
              Delivery to Jl. Kpg Sutoyo
            </Text>
          </View>
        </View>

        <View style={styles.deliveryStatus}>
          <Text style={styles.statusTitle}>Delivered your order</Text>
          <Text style={styles.statusSubtitle}>
            We will deliver your goods to you in the shortest possible time.
          </Text>
        </View>

        <View style={styles.mapSection}>
          <Text style={styles.mapTitle}>Map</Text>
          <View style={styles.mapContainer}>
            <View style={styles.mapPlaceholder}>
              <Text style={styles.mapPlaceholderText}>Map View Here</Text>
            </View>
            <View style={styles.mapDirections}>
              <Text style={styles.directionText}>North: 9th St</Text>
              <Text style={styles.directionText}>South: 7th St</Text>
              <Text style={styles.directionText}>East: 8th St</Text>
              <Text style={styles.directionText}>West: 6th St</Text>
            </View>
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
  deliveryType: {
    flexDirection: "row",
    paddingHorizontal: 20,
    marginBottom: 30,
    gap: 15,
  },
  typeButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 25,
    backgroundColor: colors.white,
    alignItems: "center",
    borderWidth: 2,
    borderColor: colors.lightGray,
  },
  typeButtonActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  typeText: {
    fontSize: 16,
    fontFamily: typography.fontFamilySemiBold,
    color: colors.textDark,
  },
  typeTextActive: {
    color: colors.white,
  },
  deliveryInfo: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  infoTitle: {
    fontSize: 20,
    fontFamily: typography.fontFamilyBold,
    color: colors.darkBrown,
    marginBottom: 10,
  },
  infoSubtitle: {
    fontSize: 14,
    fontFamily: typography.fontFamily,
    color: colors.textLight,
    lineHeight: 20,
  },
  courierCard: {
    backgroundColor: colors.white,
    marginHorizontal: 20,
    borderRadius: 20,
    padding: 20,
    marginBottom: 30,
    elevation: 3,
  },
  courierInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  courierAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  courierDetails: {
    flex: 1,
  },
  courierName: {
    fontSize: 18,
    fontFamily: typography.fontFamilyBold,
    color: colors.darkBrown,
    marginBottom: 5,
  },
  courierRole: {
    fontSize: 14,
    fontFamily: typography.fontFamily,
    color: colors.textLight,
  },
  timeRemaining: {
    alignItems: "center",
  },
  timeText: {
    fontSize: 24,
    fontFamily: typography.fontFamilyBold,
    color: colors.primary,
    marginBottom: 10,
  },
  deliveryAddress: {
    fontSize: 14,
    fontFamily: typography.fontFamily,
    color: colors.textLight,
  },
  deliveryStatus: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  statusTitle: {
    fontSize: 20,
    fontFamily: typography.fontFamilyBold,
    color: colors.darkBrown,
    marginBottom: 10,
  },
  statusSubtitle: {
    fontSize: 14,
    fontFamily: typography.fontFamily,
    color: colors.textLight,
    lineHeight: 20,
  },
  mapSection: {
    paddingHorizontal: 20,
    marginBottom: 40,
  },
  mapTitle: {
    fontSize: 20,
    fontFamily: typography.fontFamilyBold,
    color: colors.darkBrown,
    marginBottom: 15,
  },
  mapContainer: {
    backgroundColor: colors.white,
    borderRadius: 20,
    overflow: "hidden",
    elevation: 3,
  },
  mapPlaceholder: {
    height: 200,
    backgroundColor: colors.lightGray,
    justifyContent: "center",
    alignItems: "center",
  },
  mapPlaceholderText: {
    fontSize: 16,
    fontFamily: typography.fontFamily,
    color: colors.textLight,
  },
  mapDirections: {
    padding: 20,
  },
  directionText: {
    fontSize: 14,
    fontFamily: typography.fontFamily,
    color: colors.textDark,
    marginBottom: 5,
  },
});
