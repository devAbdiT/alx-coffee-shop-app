// app/order/index.tsx
import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Link } from "expo-router";
import { colors, typography } from "@/constants/theme";

const { width } = Dimensions.get("window");

interface PaymentRowProps {
  label: string;
  value: string;
  isTotal?: boolean;
}

const PaymentRow: React.FC<PaymentRowProps> = ({
  label,
  value,
  isTotal = false,
}) => (
  <View style={[styles.paymentRow, isTotal && styles.totalRow]}>
    <Text style={isTotal ? styles.totalLabel : styles.paymentLabel}>
      {label}
    </Text>
    <Text style={isTotal ? styles.totalValue : styles.paymentValue}>
      {value}
    </Text>
  </View>
);

export default function OrderScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.statusBar}>
        <Text style={styles.time}>9:41</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Order</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Delivery Address</Text>
          <View style={styles.addressCard}>
            <Text style={styles.addressStreet}>Jl. Kpg Sutoyo</Text>
            <Text style={styles.addressDetail}>
              Kpg. Sutoyo No. 620, Biban, Tangunggal.
            </Text>
            <View style={styles.addressActions}>
              <TouchableOpacity activeOpacity={0.7}>
                <Text style={styles.actionText}>Edit Address</Text>
              </TouchableOpacity>
              <Text style={styles.separator}>|</Text>
              <TouchableOpacity activeOpacity={0.7}>
                <Text style={styles.actionText}>Add Note</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

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

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Payment Summary</Text>
          <PaymentRow label="Price" value="$4.53" />
          <PaymentRow label="Delivery Fee" value="$1.00" />
          <PaymentRow label="Total" value="$5.53" isTotal />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Payment Method</Text>
          <View style={styles.paymentMethod}>
            <Text style={styles.methodText}>Cash/Wallet</Text>
            <Text style={styles.methodAmount}>$5.58</Text>
          </View>
        </View>

        <Link href="/delivery" asChild>
          <TouchableOpacity style={styles.orderButton} activeOpacity={0.8}>
            <Text style={styles.orderButtonText}>Order</Text>
          </TouchableOpacity>
        </Link>
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
  section: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: typography.fontFamilyBold,
    color: colors.darkBrown,
    marginBottom: 15,
  },
  addressCard: {
    backgroundColor: colors.white,
    borderRadius: 15,
    padding: 20,
    elevation: 2,
  },
  addressStreet: {
    fontSize: 16,
    fontFamily: typography.fontFamilyBold,
    color: colors.darkBrown,
    marginBottom: 5,
  },
  addressDetail: {
    fontSize: 14,
    fontFamily: typography.fontFamily,
    color: colors.textLight,
    marginBottom: 15,
    lineHeight: 20,
  },
  addressActions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  actionText: {
    fontSize: 14,
    fontFamily: typography.fontFamilySemiBold,
    color: colors.primary,
  },
  separator: {
    color: colors.lightGray,
  },
  orderItem: {
    backgroundColor: colors.white,
    borderRadius: 15,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontFamily: typography.fontFamilyBold,
    color: colors.darkBrown,
    marginBottom: 5,
  },
  itemOption: {
    fontSize: 14,
    fontFamily: typography.fontFamily,
    color: colors.textLight,
  },
  itemPrice: {
    fontSize: 18,
    fontFamily: typography.fontFamilyBold,
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
    fontFamily: typography.fontFamily,
    color: colors.textDark,
  },
  paymentValue: {
    fontSize: 16,
    fontFamily: typography.fontFamily,
    color: colors.textDark,
  },
  totalRow: {
    borderBottomWidth: 0,
    marginTop: 10,
  },
  totalLabel: {
    fontSize: 18,
    fontFamily: typography.fontFamilyBold,
    color: colors.darkBrown,
  },
  totalValue: {
    fontSize: 24,
    fontFamily: typography.fontFamilyBold,
    color: colors.primary,
  },
  paymentMethod: {
    backgroundColor: colors.white,
    borderRadius: 15,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  methodText: {
    fontSize: 16,
    fontFamily: typography.fontFamily,
    color: colors.textDark,
  },
  methodAmount: {
    fontSize: 18,
    fontFamily: typography.fontFamilyBold,
    color: colors.primary,
  },
  orderButton: {
    backgroundColor: colors.primary,
    marginHorizontal: 20,
    marginVertical: 30,
    paddingVertical: 18,
    borderRadius: 30,
    alignItems: "center",
    elevation: 3,
  },
  orderButtonText: {
    color: colors.white,
    fontSize: 18,
    fontFamily: typography.fontFamilySemiBold,
  },
});
