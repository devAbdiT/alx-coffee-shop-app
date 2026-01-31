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
import { colors } from "@/constants/theme";
import { FAIcon, Icon } from "@/components/Icons";

const { width } = Dimensions.get("window");

type DeliveryType = "delivery" | "pickup";

export default function DeliveryScreen() {
  const [deliveryType, setDeliveryType] = useState<DeliveryType>("delivery");

  return (
    <View style={styles.container}>
      {/* Status Bar */}
      <View style={styles.statusBar}>
        <Text style={styles.time}>9:41</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Delivery</Text>
        </View>

        {/* Delivery Type */}
        <View style={styles.deliveryType}>
          <TouchableOpacity
            style={[
              styles.typeButton,
              deliveryType === "delivery" && styles.typeButtonActive,
            ]}
            onPress={() => setDeliveryType("delivery")}
            activeOpacity={0.8}
          >
            <FAIcon
              name={Icon.truck}
              size={20}
              color={
                deliveryType === "delivery" ? colors.white : colors.textDark
              }
            />
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
            onPress={() => setDeliveryType("pickup")}
            activeOpacity={0.8}
          >
            <FAIcon
              name={Icon.shoppingCart}
              size={20}
              color={deliveryType === "pickup" ? colors.white : colors.textDark}
            />
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

        {/* Delivery Info */}
        <View style={styles.deliveryInfo}>
          <FAIcon
            name={Icon.truck}
            size={40}
            color={colors.primary}
            style={styles.infoIcon}
          />
          <Text style={styles.infoTitle}>Deliver your order</Text>
          <Text style={styles.infoSubtitle}>
            We will deliver your goods to you in the shortest possible time.
          </Text>
        </View>

        {/* Courier Card */}
        <View style={styles.courierCard}>
          <View style={styles.courierInfo}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1494790108755-2616b786d4d9",
              }}
              style={styles.courierAvatar}
            />
            <View style={styles.courierDetails}>
              <Text style={styles.courierName}>Brooklyn Simmons</Text>
              <Text style={styles.courierRole}>Personal Courier</Text>
            </View>
            <TouchableOpacity>
              <FAIcon name={Icon.phone} size={24} color={colors.primary} />
            </TouchableOpacity>
          </View>
          <View style={styles.timeRemaining}>
            <View style={styles.timeContainer}>
              <FAIcon name={Icon.clock} size={20} color={colors.primary} />
              <Text style={styles.timeText}>10 minutes left</Text>
            </View>
            <Text style={styles.deliveryAddress}>
              Delivery to Jl. Kpg Sutoyo
            </Text>
          </View>
        </View>

        {/* Map Section */}
        <View style={styles.mapSection}>
          <View style={styles.mapHeader}>
            <Text style={styles.mapTitle}>Map</Text>
            <TouchableOpacity>
              <FAIcon name={Icon.info} size={20} color={colors.textLight} />
            </TouchableOpacity>
          </View>
          <View style={styles.mapContainer}>
            <View style={styles.mapPlaceholder}>
              <FAIcon name={Icon.mapMarker} size={50} color={colors.primary} />
              <Text style={styles.mapPlaceholderText}>
                Live Location Tracking
              </Text>
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

      {/* Delivery Status Bar */}
      <View style={styles.statusBarBottom}>
        <FAIcon name={Icon.checkCircle} size={24} color={colors.primary} />
        <Text style={styles.statusText}>Order is being prepared</Text>
      </View>
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
  headerTitle: {
    fontSize: 28,
    fontFamily: "System",
    fontWeight: "bold",
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
    paddingVertical: 15,
    borderRadius: 15,
    backgroundColor: colors.white,
    alignItems: "center",
    borderWidth: 2,
    borderColor: colors.lightGray,
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
  typeButtonActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  typeText: {
    fontSize: 16,
    fontFamily: "System",
    fontWeight: "600",
    color: colors.textDark,
  },
  typeTextActive: {
    color: colors.white,
  },
  deliveryInfo: {
    backgroundColor: colors.white,
    marginHorizontal: 20,
    borderRadius: 20,
    padding: 25,
    alignItems: "center",
    marginBottom: 30,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  infoIcon: {
    marginBottom: 15,
  },
  infoTitle: {
    fontSize: 20,
    fontFamily: "System",
    fontWeight: "bold",
    color: colors.darkBrown,
    marginBottom: 10,
    textAlign: "center",
  },
  infoSubtitle: {
    fontSize: 14,
    color: colors.textLight,
    lineHeight: 20,
    textAlign: "center",
  },
  courierCard: {
    backgroundColor: colors.white,
    marginHorizontal: 20,
    borderRadius: 20,
    padding: 20,
    marginBottom: 30,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
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
    fontFamily: "System",
    fontWeight: "bold",
    color: colors.darkBrown,
    marginBottom: 5,
  },
  courierRole: {
    fontSize: 14,
    color: colors.textLight,
  },
  timeRemaining: {
    alignItems: "center",
  },
  timeContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 10,
  },
  timeText: {
    fontSize: 24,
    fontFamily: "System",
    fontWeight: "bold",
    color: colors.primary,
  },
  deliveryAddress: {
    fontSize: 14,
    color: colors.textLight,
    textAlign: "center",
  },
  mapSection: {
    paddingHorizontal: 20,
    marginBottom: 40,
  },
  mapHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  mapTitle: {
    fontSize: 20,
    fontFamily: "System",
    fontWeight: "bold",
    color: colors.darkBrown,
  },
  mapContainer: {
    backgroundColor: colors.white,
    borderRadius: 20,
    overflow: "hidden",
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
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
    color: colors.textLight,
    marginTop: 10,
    fontFamily: "System",
  },
  mapDirections: {
    padding: 20,
  },
  directionText: {
    fontSize: 14,
    color: colors.textDark,
    marginBottom: 5,
    fontFamily: "System",
  },
  statusBarBottom: {
    backgroundColor: colors.white,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    borderTopWidth: 1,
    borderTopColor: colors.lightGray,
  },
  statusText: {
    fontSize: 16,
    color: colors.darkBrown,
    fontFamily: "System",
    fontWeight: "600",
  },
});
