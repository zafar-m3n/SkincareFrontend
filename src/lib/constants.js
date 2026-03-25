export const APP_NAME = "Ecommerce Frontend";

export const STORAGE_KEYS = {
  AUTH_TOKEN: "ecommerce.auth.token",
  USER_DATA: "ecommerce.auth.user",
  LOGOUT_BROADCAST: "ecommerce.auth.logout_at",
  CART: "ecommerce.cart",
  WISHLIST: "ecommerce.wishlist",
};

export const REQUEST_TIMEOUT = 30000;
export const TOKEN_EXPIRY_SKEW_MS = 2000;

export const USER_ROLES = {
  ADMIN: "admin",
  CUSTOMER: "customer",
};

export const ORDER_STATUSES = {
  PENDING: "pending",
  CONFIRMED: "confirmed",
  PROCESSING: "processing",
  SHIPPED: "shipped",
  DELIVERED: "delivered",
  CANCELLED: "cancelled",
  REFUNDED: "refunded",
};

export const PAYMENT_STATUSES = {
  PENDING: "pending",
  PAID: "paid",
  FAILED: "failed",
  REFUNDED: "refunded",
};

export const PAYMENT_METHODS = {
  CARD: "card",
  CASH_ON_DELIVERY: "cash_on_delivery",
  BANK_TRANSFER: "bank_transfer",
};

export const INVENTORY_STATUSES = {
  IN_STOCK: "in_stock",
  LOW_STOCK: "low_stock",
  OUT_OF_STOCK: "out_of_stock",
};

export const DEFAULT_PAGINATION = {
  PAGE: 1,
  LIMIT: 10,
};

export const DEFAULT_LOCALE = "en-LK";
export const DEFAULT_CURRENCY = "LKR";

export const ROUTE_PATHS = {
  HOME: "/",
  SHOP: "/shop",
  PRODUCT_DETAILS: "/product/:slug",
  CART: "/cart",
  CHECKOUT: "/checkout",
  WISHLIST: "/wishlist",

  LOGIN: "/login",
  REGISTER: "/register",
  FORGOT_PASSWORD: "/forgot-password",

  ACCOUNT_PROFILE: "/account/profile",
  ACCOUNT_ORDERS: "/account/orders",
  ACCOUNT_ORDER_DETAILS: "/account/orders/:id",
  ACCOUNT_ADDRESSES: "/account/addresses",

  ADMIN_DASHBOARD: "/admin",
  ADMIN_PRODUCTS: "/admin/products",
  ADMIN_CATEGORIES: "/admin/categories",
  ADMIN_ORDERS: "/admin/orders",
  ADMIN_CUSTOMERS: "/admin/customers",
  ADMIN_INVENTORY: "/admin/inventory",

  UNAUTHORIZED: "/unauthorized",
  NOT_FOUND: "*",
};
