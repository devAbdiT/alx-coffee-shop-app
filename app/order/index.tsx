import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { router } from "expo-router";
import { colors } from "@/constants/theme";
import { FAIcon, Icon } from "@/components/Icons";

const { width } = Dimensions.get("window");

export default function OrderScreen() {
  return (
    <View style={styles.container}>
      {/* Status Bar */}
      <View style={styles.statusBar}>
        <Text style={styles.time}>9:41</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Order</Text>
        </View>

        {/* Delivery Address */}
        <View style={styles.section}>
          <View style={styles.addressCard}>
            <View style={styles.addressHeader}>
              <FAIcon name={Icon.mapMarker} size={20} color={colors.primary} />
              <Text style={styles.addressTitle}>Delivery Address</Text>
            </View>
            <Text style={styles.addressStreet}>Jl. Kpg Sutoyo</Text>
            <Text style={styles.addressDetail}>
              Kpg. Sutoyo No. 620, Biban, Tangunggal.
            </Text>
            <View style={styles.addressActions}>
              <TouchableOpacity style={styles.actionButton}>
                <FAIcon name={Icon.edit} size={14} color={colors.primary} />
                <Text style={styles.actionText}>Edit Address</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <FAIcon name={Icon.plus} size={14} color={colors.primary} />
                <Text style={styles.actionText}>Add Note</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Order Items */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Order Items</Text>
          <View style={styles.orderItem}>
            <View style={styles.itemInfo}>
              <Text style={styles.itemName}>Caffè Mocha</Text>
              <Text style={styles.itemOption}>Deep Foam</Text>
            </View>
            <Text style={styles.itemPrice}>$4.53</Text>
          </View>
        </View>

        {/* Payment Summary */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Payment Summary</Text>
          <View style={styles.paymentRow}>
            <Text style={styles.paymentLabel}>Price</Text>
            <Text style={styles.paymentValue}>$4.53</Text>
          </View>
          <View style={styles.paymentRow}>
            <Text style={styles.paymentLabel}>Delivery Fee</Text>
            <Text style={styles.paymentValue}>$1.00</Text>
          </View>
          <View style={[styles.paymentRow, styles.totalRow]}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalValue}>$5.53</Text>
          </View>
        </View>

        {/* Payment Method */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Payment Method</Text>
          <View style={styles.paymentMethod}>
            <View style={styles.methodLeft}>
              <FAIcon name={Icon.creditCard} size={20} color={colors.primary} />
              <Text style={styles.methodText}>Cash/Wallet</Text>
            </View>
            <View style={styles.methodRight}>
              <Text style={styles.methodAmount}>$5.58</Text>
              <FAIcon
                name={Icon.chevronRight}
                size={20}
                color={colors.textLight}
              />
            </View>
          </View>
        </View>

        {/* Order Button */}
        <TouchableOpacity
          style={styles.orderButton}
          onPress={() => router.push("/delivery")}
          activeOpacity={0.8}
        >
          <Text style={styles.orderButtonText}>Order Now</Text>
          <FAIcon name={Icon.chevronRight} size={20} color={colors.white} />
        </TouchableOpacity>
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
  headerTitle: {
    fontSize: 28,
    fontFamily: "System",
    fontWeight: "bold",
    color: colors.darkBrown,
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: "System",
    fontWeight: "bold",
    color: colors.darkBrown,
    marginBottom: 15,
  },
  addressCard: {
    backgroundColor: colors.white,
    borderRadius: 15,
    padding: 20,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  addressHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 15,
  },
  addressTitle: {
    fontSize: 16,
    fontFamily: "System",
    fontWeight: "600",
    color: colors.darkBrown,
  },
  addressStreet: {
    fontSize: 16,
    fontFamily: "System",
    fontWeight: "bold",
    color: colors.darkBrown,
    marginBottom: 5,
  },
  addressDetail: {
    fontSize: 14,
    color: colors.textLight,
    marginBottom: 20,
    lineHeight: 20,
  },
  addressActions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  actionText: {
    fontSize: 14,
    color: colors.primary,
    fontFamily: "System",
    fontWeight: "600",
  },
  orderItem: {
    backgroundColor: colors.white,
    borderRadius: 15,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontFamily: "System",
    fontWeight: "bold",
    color: colors.darkBrown,
    marginBottom: 5,
  },
  itemOption: {
    fontSize: 14,
    color: colors.textLight,
  },
  itemPrice: {
    fontSize: 18,
    fontFamily: "System",
    fontWeight: "bold",
    color: colors.primary,
  },
  paymentRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
  },
  paymentLabel: {
    fontSize: 16,
    color: colors.textDark,
    fontFamily: "System",
  },
  paymentValue: {
    fontSize: 16,
    color: colors.textDark,
    fontFamily: "System",
  },
  totalRow: {
    borderBottomWidth: 0,
    marginTop: 10,
  },
  totalLabel: {
    fontSize: 18,
    fontFamily: "System",
    fontWeight: "bold",
    color: colors.darkBrown,
  },
  totalValue: {
    fontSize: 24,
    fontFamily: "System",
    fontWeight: "bold",
    color: colors.primary,
  },
  paymentMethod: {
    backgroundColor: colors.white,
    borderRadius: 15,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  methodLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  methodText: {
    fontSize: 16,
    color: colors.textDark,
    fontFamily: "System",
  },
  methodRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  methodAmount: {
    fontSize: 18,
    fontFamily: "System",
    fontWeight: "bold",
    color: colors.primary,
  },
  orderButton: {
    backgroundColor: colors.primary,
    marginHorizontal: 20,
    marginVertical: 30,
    paddingVertical: 18,
    borderRadius: 30,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  orderButtonText: {
    color: colors.white,
    fontSize: 18,
    fontFamily: "System",
    fontWeight: "600",
  },
});
