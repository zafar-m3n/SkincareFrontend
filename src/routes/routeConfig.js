import { ROUTE_PATHS, USER_ROLES } from "@/lib/constants";

/* Layouts */
import DefaultLayout from "@/layouts/DefaultLayout";
import AuthLayout from "@/layouts/AuthLayout";
import AdminLayout from "@/layouts/AdminLayout";

/* Storefront Pages */
import Home from "@/pages/storefront/Home";
import Shop from "@/pages/storefront/Shop";
import Category from "@/pages/storefront/Category";
import ProductDetails from "@/pages/storefront/ProductDetails";
import Cart from "@/pages/storefront/Cart";
import Checkout from "@/pages/storefront/Checkout";
import OrderSuccess from "@/pages/storefront/OrderSuccess";

/* Auth Pages */
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import ForgotPassword from "@/pages/auth/ForgotPassword";
import AdminLogin from "@/pages/auth/AdminLogin";

/* Account Pages */
import Account from "@/pages/account/Account";
import AccountOrderDetails from "@/pages/account/OrderDetails";

/* Legal Pages */
import Legal from "@/pages/legal/Legal";

/* Admin Pages */
import Dashboard from "@/pages/admin/Dashboard";
import Products from "@/pages/admin/Products";
import ProductForm from "@/pages/admin/ProductForm";
import Inventory from "@/pages/admin/Inventory";
import LowStock from "@/pages/admin/LowStock";
import StockAdjust from "@/pages/admin/StockAdjust";
import Categories from "@/pages/admin/Categories";
import CategoryForm from "@/pages/admin/CategoryForm";
import Orders from "@/pages/admin/Orders";
import AdminOrderDetails from "@/pages/admin/OrderDetails";
import OrderBoard from "@/pages/admin/OrderBoard";
import Customers from "@/pages/admin/Customers";
import CustomerDetails from "@/pages/admin/CustomerDetails";
import CustomerOrders from "@/pages/admin/CustomerOrders";

/* System Pages */
import Unauthorized from "@/pages/system/Unauthorized";
import NotFound from "@/pages/system/NotFound";

export const routeConfig = [
  /* =========================
     Storefront
     ========================= */
  {
    path: ROUTE_PATHS.HOME,
    element: Home,
    layout: DefaultLayout,
    access: "public",
  },
  {
    path: ROUTE_PATHS.SHOP,
    element: Shop,
    layout: DefaultLayout,
    access: "public",
  },
  {
    path: ROUTE_PATHS.CATEGORY,
    element: Category,
    layout: DefaultLayout,
    access: "public",
  },
  {
    path: ROUTE_PATHS.PRODUCT_DETAILS,
    element: ProductDetails,
    layout: DefaultLayout,
    access: "public",
  },
  {
    path: ROUTE_PATHS.CART,
    element: Cart,
    layout: DefaultLayout,
    access: "public",
  },
  {
    path: ROUTE_PATHS.CHECKOUT,
    element: Checkout,
    layout: DefaultLayout,
    access: "private",
    roles: [USER_ROLES.CUSTOMER],
  },
  {
    path: ROUTE_PATHS.ORDER_SUCCESS,
    element: OrderSuccess,
    layout: DefaultLayout,
    access: "private",
    roles: [USER_ROLES.CUSTOMER],
  },

  /* =========================
     Auth
     ========================= */
  {
    path: ROUTE_PATHS.LOGIN,
    element: Login,
    layout: AuthLayout,
    access: "guest",
  },
  {
    path: ROUTE_PATHS.REGISTER,
    element: Register,
    layout: AuthLayout,
    access: "guest",
  },
  {
    path: ROUTE_PATHS.FORGOT_PASSWORD,
    element: ForgotPassword,
    layout: AuthLayout,
    access: "guest",
  },
  {
    path: ROUTE_PATHS.ADMIN_LOGIN,
    element: AdminLogin,
    layout: AuthLayout,
    access: "guest",
  },

  /* =========================
     Account
     ========================= */
  {
    path: ROUTE_PATHS.ACCOUNT,
    element: Account,
    layout: DefaultLayout,
    access: "private",
    roles: [USER_ROLES.CUSTOMER],
  },
  {
    path: ROUTE_PATHS.ACCOUNT_ORDER_DETAILS,
    element: AccountOrderDetails,
    layout: DefaultLayout,
    access: "private",
    roles: [USER_ROLES.CUSTOMER],
  },

  /* =========================
     Legal
     ========================= */
  {
    path: ROUTE_PATHS.LEGAL,
    element: Legal,
    layout: DefaultLayout,
    access: "public",
  },

  /* =========================
     Admin
     ========================= */
  {
    path: ROUTE_PATHS.ADMIN_DASHBOARD,
    element: Dashboard,
    layout: AdminLayout,
    access: "private",
    roles: [USER_ROLES.ADMIN],
  },
  {
    path: ROUTE_PATHS.ADMIN_PRODUCTS,
    element: Products,
    layout: AdminLayout,
    access: "private",
    roles: [USER_ROLES.ADMIN],
  },
  {
    path: ROUTE_PATHS.ADMIN_PRODUCT_FORM,
    element: ProductForm,
    layout: AdminLayout,
    access: "private",
    roles: [USER_ROLES.ADMIN],
  },
  {
    path: ROUTE_PATHS.ADMIN_PRODUCT_EDIT,
    element: ProductForm,
    layout: AdminLayout,
    access: "private",
    roles: [USER_ROLES.ADMIN],
  },
  {
    path: ROUTE_PATHS.ADMIN_INVENTORY,
    element: Inventory,
    layout: AdminLayout,
    access: "private",
    roles: [USER_ROLES.ADMIN],
  },
  {
    path: ROUTE_PATHS.ADMIN_LOW_STOCK,
    element: LowStock,
    layout: AdminLayout,
    access: "private",
    roles: [USER_ROLES.ADMIN],
  },
  {
    path: ROUTE_PATHS.ADMIN_STOCK_ADJUST,
    element: StockAdjust,
    layout: AdminLayout,
    access: "private",
    roles: [USER_ROLES.ADMIN],
  },
  {
    path: ROUTE_PATHS.ADMIN_CATEGORIES,
    element: Categories,
    layout: AdminLayout,
    access: "private",
    roles: [USER_ROLES.ADMIN],
  },
  {
    path: ROUTE_PATHS.ADMIN_CATEGORY_FORM,
    element: CategoryForm,
    layout: AdminLayout,
    access: "private",
    roles: [USER_ROLES.ADMIN],
  },
  {
    path: ROUTE_PATHS.ADMIN_CATEGORY_EDIT,
    element: CategoryForm,
    layout: AdminLayout,
    access: "private",
    roles: [USER_ROLES.ADMIN],
  },
  {
    path: ROUTE_PATHS.ADMIN_ORDERS,
    element: Orders,
    layout: AdminLayout,
    access: "private",
    roles: [USER_ROLES.ADMIN],
  },
  {
    path: ROUTE_PATHS.ADMIN_ORDER_DETAILS,
    element: AdminOrderDetails,
    layout: AdminLayout,
    access: "private",
    roles: [USER_ROLES.ADMIN],
  },
  {
    path: ROUTE_PATHS.ADMIN_ORDER_BOARD,
    element: OrderBoard,
    layout: AdminLayout,
    access: "private",
    roles: [USER_ROLES.ADMIN],
  },
  {
    path: ROUTE_PATHS.ADMIN_CUSTOMERS,
    element: Customers,
    layout: AdminLayout,
    access: "private",
    roles: [USER_ROLES.ADMIN],
  },
  {
    path: ROUTE_PATHS.ADMIN_CUSTOMER_DETAILS,
    element: CustomerDetails,
    layout: AdminLayout,
    access: "private",
    roles: [USER_ROLES.ADMIN],
  },
  {
    path: ROUTE_PATHS.ADMIN_CUSTOMER_ORDERS,
    element: CustomerOrders,
    layout: AdminLayout,
    access: "private",
    roles: [USER_ROLES.ADMIN],
  },

  /* =========================
     System
     ========================= */
  {
    path: ROUTE_PATHS.UNAUTHORIZED,
    element: Unauthorized,
    layout: AuthLayout,
    access: "public",
  },
  {
    path: ROUTE_PATHS.NOT_FOUND,
    element: NotFound,
    layout: AuthLayout,
    access: "public",
  },
];

export default routeConfig;
