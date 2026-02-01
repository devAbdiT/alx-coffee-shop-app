import React from "react";
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

export default function DeliveryScreen() {
  return (
    <View style={styles.container}>
      {/* Status Bar */}
      <View style={styles.statusBar}>
        <Text style={styles.time}>9:41</Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Map Section - SIMPLIFIED */}
        <View style={styles.mapSection}>
          {/* Street Names */}
          <View style={styles.streetsContainer}>
            <View style={styles.streetColumn}>
              <Text style={styles.streetText}>97th St</Text>
              <Text style={styles.streetText}>96th St</Text>
              <Text style={styles.streetText}>95th St</Text>
              <Text style={styles.streetText}>86th Street</Text>
            </View>

            <View style={styles.mapCenter}>
              {/* Vertical Line for Road */}
              <View style={styles.roadLine} />

              {/* Location Marker */}
              <View style={styles.locationMarker}>
                <FAIcon name={Icon.mapMarker} size={30} color={colors.brown} />
                <View style={styles.markerPulse} />
              </View>
            </View>

            <View style={styles.streetColumn}>
              <Text style={[styles.streetText, styles.rightAlign]}>rd St</Text>
              <Text style={[styles.streetText, styles.rightAlign]}>Lin</Text>
              <Text style={[styles.streetText, styles.rightAlign]}>
                Nirmala Girls HSS
              </Text>
              <Text style={[styles.streetText, styles.rightAlign]}>
                81st Avenue
              </Text>
              <Text style={[styles.streetText, styles.rightAlign]}>
                1st Ave
              </Text>
              <Text style={[styles.streetText, styles.rightAlign]}>
                3rd Ave
              </Text>
              <Text style={[styles.streetText, styles.rightAlign]}>
                Brooklyn Seminary
              </Text>
            </View>
          </View>
        </View>

        {/* Courier Info - SIMPLIFIED */}
        <View style={styles.courierSection}>
          <View style={styles.courierCard}>
            <View style={styles.courierHeader}>
              <Text style={styles.courierName}>Brooklyn Simmons</Text>
              <Text style={styles.courierRole}>Personal Courier</Text>
            </View>

            <View style={styles.deliveryInfo}>
              <Text style={styles.timeLeft}>10 minutes left</Text>
              <Text style={styles.deliveryAddress}>
                Delivery to Jl Kpg Sutoyo
              </Text>
            </View>
          </View>
        </View>

        {/* Delivery Message */}
        <View style={styles.messageSection}>
          <View style={styles.messageCard}>
            <Text style={styles.messageTitle}>Delivered your order</Text>
            <Text style={styles.messageText}>
              We will deliver your goods to you in the shortest possible time.
            </Text>
          </View>
        </View>

        {/* Bottom Info */}
        <View style={styles.bottomInfo}>
          <Text style={styles.bottomName}>Brooklyn Simmons</Text>
          <Text style={styles.bottomRole}>Personal Courier</Text>
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
    paddingRight: 20,
    alignItems: "flex-end",
  },
  time: {
    fontSize: 16,
    color: colors.black,
    fontWeight: "600",
    fontFamily: "Sora-SemiBold",
  },
  scrollContent: {
    paddingBottom: 40,
  },
  mapSection: {
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 30,
  },
  streetsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    minHeight: 300,
  },
  streetColumn: {
    justifyContent: "space-around",
    paddingVertical: 20,
  },
  streetText: {
    fontSize: 12,
    color: colors.textLight,
    marginVertical: 8,
    fontFamily: "Sora-Regular",
  },
  rightAlign: {
    textAlign: "right",
  },
  mapCenter: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  roadLine: {
    position: "absolute",
    width: 2,
    height: "100%",
    backgroundColor: colors.lightGray,
  },
  locationMarker: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  markerPulse: {
    position: "absolute",
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.brown,
    opacity: 0.3,
  },
  courierSection: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  courierCard: {
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 20,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  courierHeader: {
    alignItems: "center",
    marginBottom: 20,
  },
  courierName: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.darkBrown,
    marginBottom: 5,
    fontFamily: "Sora-Bold",
  },
  courierRole: {
    fontSize: 14,
    color: colors.textLight,
    fontFamily: "Sora-Regular",
  },
  deliveryInfo: {
    alignItems: "center",
  },
  timeLeft: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.brown,
    marginBottom: 10,
    fontFamily: "Sora-Bold",
  },
  deliveryAddress: {
    fontSize: 14,
    color: colors.textLight,
    fontFamily: "Sora-Regular",
  },
  messageSection: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  messageCard: {
    backgroundColor: colors.brown,
    borderRadius: 20,
    padding: 25,
    alignItems: "center",
  },
  messageTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.white,
    marginBottom: 10,
    fontFamily: "Sora-Bold",
  },
  messageText: {
    fontSize: 14,
    color: colors.secondary,
    textAlign: "center",
    lineHeight: 20,
    fontFamily: "Sora-Regular",
  },
  bottomInfo: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
  bottomName: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.darkBrown,
    marginBottom: 5,
    fontFamily: "Sora-Bold",
  },
  bottomRole: {
    fontSize: 14,
    color: colors.textLight,
    fontFamily: "Sora-Regular",
  },
});
