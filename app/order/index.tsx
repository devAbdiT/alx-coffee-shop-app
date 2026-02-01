import React, { useState } from "react";
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
  const [quantity, setQuantity] = useState(1);
  const [deliveryType, setDeliveryType] = useState("Deliver");
  const [isDiscountApplied, setIsDiscountApplied] = useState(true);

  const itemPrice = 4.53;
  const deliveryFeeOriginal = 2.0;
  const deliveryFeeDiscounted = 1.0;
  const total =
    itemPrice +
    (isDiscountApplied ? deliveryFeeDiscounted : deliveryFeeOriginal);

  return (
    <View style={styles.container}>
      {/* Status Bar */}

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
            activeOpacity={0.8}
          >
            <FAIcon name={Icon.arrowLeft} size={24} color={colors.darkBrown} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Order</Text>
          <View style={styles.headerRightPlaceholder} />
        </View>

        {/* Delivery Type Toggle */}
        <View style={styles.deliveryTypeContainer}>
          <TouchableOpacity
            style={[
              styles.deliveryTypeButton,
              deliveryType === "Deliver" && styles.deliveryTypeButtonActive,
            ]}
            onPress={() => setDeliveryType("Deliver")}
            activeOpacity={0.8}
          >
            <Text
              style={[
                styles.deliveryTypeText,
                deliveryType === "Deliver" && styles.deliveryTypeTextActive,
              ]}
            >
              Deliver
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.deliveryTypeButton,
              deliveryType === "Pick Up" && styles.deliveryTypeButtonActive,
            ]}
            onPress={() => setDeliveryType("Pick Up")}
            activeOpacity={0.8}
          >
            <Text
              style={[
                styles.deliveryTypeText,
                deliveryType === "Pick Up" && styles.deliveryTypeTextActive,
              ]}
            >
              Pick Up
            </Text>
          </TouchableOpacity>
        </View>

        {/* Delivery Address */}
        <View style={styles.section}>
          <View style={styles.addressCard}>
            <View style={styles.addressHeader}>
              <Text style={styles.addressTitle}>Delivery Address</Text>
            </View>
            <Text style={styles.addressStreet}>Jl. Kpg Sutoyo</Text>
            <Text style={styles.addressDetail}>
              Kpg. Sutoyo No. 620, Bilpen, Tanjungbalai.
            </Text>
            <View style={styles.addressActions}>
              <TouchableOpacity style={styles.actionButton}>
                <Text style={styles.actionText}>Edit Address</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <Text style={styles.actionText}>Add Note</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Order Item */}
        <View style={styles.section}>
          <View style={styles.orderItemCard}>
            <View style={styles.itemInfo}>
              <Text style={styles.itemName}>Caffe Mocha</Text>
              <Text style={styles.itemOption}>Deep Foam</Text>
            </View>

            <View style={styles.itemControls}>
              <View style={styles.quantityContainer}>
                <TouchableOpacity
                  style={styles.quantityButton}
                  onPress={() => setQuantity(Math.max(1, quantity - 1))}
                  activeOpacity={0.7}
                >
                  <FAIcon name={Icon.minus} size={16} color={colors.textDark} />
                </TouchableOpacity>

                <Text style={styles.quantityText}>{quantity}</Text>

                <TouchableOpacity
                  style={styles.quantityButton}
                  onPress={() => setQuantity(quantity + 1)}
                  activeOpacity={0.7}
                >
                  <FAIcon name={Icon.plus} size={16} color={colors.textDark} />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Discount Notice */}
          {isDiscountApplied && (
            <View style={styles.discountContainer}>
              <FAIcon name={Icon.checkCircle} size={16} color={colors.brown} />
              <Text style={styles.discountText}>1 Discount is Applied</Text>
            </View>
          )}
        </View>

        {/* Payment Summary */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Payment Summary</Text>

          <View style={styles.paymentRow}>
            <Text style={styles.paymentLabel}>Price</Text>
            <Text style={styles.paymentValue}>${itemPrice.toFixed(2)}</Text>
          </View>

          <View style={styles.paymentRow}>
            <View style={styles.deliveryFeeContainer}>
              <Text style={styles.paymentLabel}>Delivery Fee</Text>
              {isDiscountApplied && (
                <Text style={styles.originalDeliveryFee}>
                  ${deliveryFeeOriginal.toFixed(1)}
                </Text>
              )}
            </View>
            <Text style={styles.paymentValue}>
              $
              {(isDiscountApplied
                ? deliveryFeeDiscounted
                : deliveryFeeOriginal
              ).toFixed(1)}
            </Text>
          </View>
        </View>

        {/* Cash/Wallet */}
        <View style={styles.section}>
          <View style={styles.cashWalletCard}>
            <View style={styles.cashWalletHeader}>
              <FAIcon
                name={Icon.creditCard}
                size={20}
                color={colors.darkBrown}
              />
              <Text style={styles.cashWalletTitle}>Cash/Wallet</Text>
            </View>
            <Text style={styles.cashWalletAmount}>${total.toFixed(2)}</Text>
          </View>
        </View>

        {/* Order Button */}
        <TouchableOpacity
          style={styles.orderButton}
          onPress={() => router.push("/delivery")}
          activeOpacity={0.8}
        >
          <Text style={styles.orderButtonText}>Order</Text>
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
    paddingRight: 20,
    alignItems: "flex-end",
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
  headerRightPlaceholder: {
    width: 40,
  },

  deliveryTypeContainer: {
    flexDirection: "row",
    backgroundColor: colors.white,
    borderRadius: 15,
    marginHorizontal: 20,
    marginBottom: 20,
    padding: 5,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  deliveryTypeButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
  },
  deliveryTypeButtonActive: {
    backgroundColor: colors.brown,
  },
  deliveryTypeText: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.textDark,
    fontFamily: "Sora-SemiBold",
  },
  deliveryTypeTextActive: {
    color: colors.white,
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 25,
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
    marginBottom: 15,
  },
  addressTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.darkBrown,
    fontFamily: "Sora-Bold",
  },
  addressStreet: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.darkBrown,
    marginBottom: 5,
    fontFamily: "Sora-Bold",
  },
  addressDetail: {
    fontSize: 14,
    color: colors.textLight,
    marginBottom: 20,
    lineHeight: 20,
    fontFamily: "Sora-Regular",
  },
  addressActions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  actionButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: colors.lightGray,
  },
  actionText: {
    fontSize: 14,
    color: colors.brown,
    fontWeight: "600",
    fontFamily: "Sora-SemiBold",
  },
  orderItemCard: {
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
    fontSize: 18,
    fontWeight: "bold",
    color: colors.darkBrown,
    marginBottom: 5,
    fontFamily: "Sora-Bold",
  },
  itemOption: {
    fontSize: 14,
    color: colors.textLight,
    fontFamily: "Sora-Regular",
  },
  itemControls: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.lightGray,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  quantityButton: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  quantityText: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.darkBrown,
    marginHorizontal: 15,
    fontFamily: "Sora-SemiBold",
  },
  discountContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
    paddingHorizontal: 10,
  },
  discountText: {
    fontSize: 14,
    color: colors.brown,
    fontWeight: "600",
    marginLeft: 8,
    fontFamily: "Sora-SemiBold",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.darkBrown,
    marginBottom: 15,
    fontFamily: "Sora-Bold",
  },
  paymentRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
  },
  paymentLabel: {
    fontSize: 16,
    color: colors.textDark,
    fontFamily: "Sora-Regular",
  },
  paymentValue: {
    fontSize: 16,
    color: colors.textDark,
    fontWeight: "600",
    fontFamily: "Sora-SemiBold",
  },
  deliveryFeeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  originalDeliveryFee: {
    fontSize: 14,
    color: colors.textLight,
    textDecorationLine: "line-through",
    marginLeft: 10,
    fontFamily: "Sora-Regular",
  },
  cashWalletCard: {
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
  cashWalletHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  cashWalletTitle: {
    fontSize: 16,
    color: colors.darkBrown,
    fontWeight: "600",
    marginLeft: 10,
    fontFamily: "Sora-SemiBold",
  },
  cashWalletAmount: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.brown,
    fontFamily: "Sora-Bold",
  },
  orderButton: {
    backgroundColor: colors.brown,
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 40,
    paddingVertical: 18,
    borderRadius: 20,
    alignItems: "center",
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  orderButtonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Sora-Bold",
  },
});
