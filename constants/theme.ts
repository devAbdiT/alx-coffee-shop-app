// constants/theme.ts
export interface ColorPalette {
  primary: string;
  secondary: string;
  darkBrown: string;
  lightGray: string;
  cream: string;
  white: string;
  black: string;
  textDark: string;
  textLight: string;
}

export interface Typography {
  fontFamily: string;
  fontFamilyBold: string;
  fontFamilySemiBold: string;
}

export const colors: ColorPalette = {
  primary: "#C67CAE",
  secondary: "#EDD6C8",
  darkBrown: "#513131",
  lightGray: "#E3E5E3",
  cream: "#F9F2ED",
  white: "#FFFFFF",
  black: "#000000",
  textDark: "#333333",
  textLight: "#666666",
};

export const typography: Typography = {
  fontFamily: "Sora-Regular",
  fontFamilyBold: "Sora-Bold",
  fontFamilySemiBold: "Sora-SemiBold",
};

export const sizes: SizeOption[] = [
  { label: "S", value: "S" },
  { label: "M", value: "M" },
  { label: "L", value: "L" },
];
