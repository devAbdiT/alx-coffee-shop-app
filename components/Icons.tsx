import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCoffee,
  faStar,
  faHeart,
  faShoppingCart,
  faUser,
  faHome,
  faSearch,
  faBell,
  faClock,
  faMapMarkerAlt,
  faCreditCard,
  faTruck,
  faCheckCircle,
  faPhone,
  faComment,
  faCog,
  faArrowLeft,
  faChevronRight,
  faFilter,
  faPlus,
  faMinus,
  faTrash,
  faEdit,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

// Predefined icons for easy use
export const Icon = {
  coffee: faCoffee,
  star: faStar,
  heart: faHeart,
  shoppingCart: faShoppingCart,
  user: faUser,
  home: faHome,
  search: faSearch,
  bell: faBell,
  clock: faClock,
  mapMarker: faMapMarkerAlt,
  creditCard: faCreditCard,
  truck: faTruck,
  checkCircle: faCheckCircle,
  phone: faPhone,
  message: faComment,
  settings: faCog,
  arrowLeft: faArrowLeft,
  chevronRight: faChevronRight,
  filter: faFilter,
  plus: faPlus,
  minus: faMinus,
  trash: faTrash,
  edit: faEdit,
  info: faInfoCircle,
};

// Icon component
interface IconProps {
  name: any; // FontAwesome icon
  size?: number;
  color?: string;
  style?: any;
}

export const FAIcon: React.FC<IconProps> = ({
  name,
  size = 24,
  color = "#000",
  style,
}) => <FontAwesomeIcon icon={name} size={size} color={color} style={style} />;
