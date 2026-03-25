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
  CATEGORY: "/category/:slug",
  PRODUCT_DETAILS: "/product/:slug",
  CART: "/cart",
  CHECKOUT: "/checkout",
  ORDER_SUCCESS: "/order-success",
  WISHLIST: "/wishlist",

  LOGIN: "/login",
  REGISTER: "/register",
  FORGOT_PASSWORD: "/forgot-password",
  ADMIN_LOGIN: "/admin/login",

  ACCOUNT: "/account",
  ACCOUNT_ORDER_DETAILS: "/account/orders/:id",

  LEGAL: "/legal",

  ADMIN_DASHBOARD: "/admin",
  ADMIN_PRODUCTS: "/admin/products",
  ADMIN_PRODUCT_FORM: "/admin/products/new",
  ADMIN_PRODUCT_EDIT: "/admin/products/:id",

  ADMIN_INVENTORY: "/admin/inventory",
  ADMIN_LOW_STOCK: "/admin/inventory/low-stock",
  ADMIN_STOCK_ADJUST: "/admin/inventory/adjust",

  ADMIN_CATEGORIES: "/admin/categories",
  ADMIN_CATEGORY_FORM: "/admin/categories/new",
  ADMIN_CATEGORY_EDIT: "/admin/categories/:id",

  ADMIN_ORDERS: "/admin/orders",
  ADMIN_ORDER_DETAILS: "/admin/orders/:id",
  ADMIN_ORDER_BOARD: "/admin/orders/board",

  ADMIN_CUSTOMERS: "/admin/customers",
  ADMIN_CUSTOMER_DETAILS: "/admin/customers/:id",
  ADMIN_CUSTOMER_ORDERS: "/admin/customers/:id/orders",

  UNAUTHORIZED: "/unauthorized",
  NOT_FOUND: "*",
};
