// types/index.ts
export interface CoffeeItem {
  id: number;
  name: string;
  description: string;
  originalPrice: string;
  discountedPrice: string;
  image: any; // Using any for require() images
}

export interface SizeOption {
  label: string;
  value: string;
}

export interface PaymentMethod {
  id: number;
  name: string;
  amount: string;
  type: "cash" | "card" | "wallet";
}

export interface Courier {
  id: number;
  name: string;
  role: string;
  avatar: any;
  timeLeft: string;
  deliveryAddress: string;
}
