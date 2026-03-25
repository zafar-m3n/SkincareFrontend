import React, { useEffect, useMemo, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ROUTE_PATHS, STORAGE_KEYS, USER_ROLES } from "@/lib/constants";
import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import token from "@/lib/utilities";
import storage from "@/utils/storage";

const navItems = [
  { label: "Home", to: ROUTE_PATHS.HOME },
  { label: "Shop", to: ROUTE_PATHS.SHOP },
  { label: "Legal", to: ROUTE_PATHS.LEGAL },
];

const Navbar = () => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [isAuthenticated, setIsAuthenticated] = useState(token.isAuthenticated());
  const [user, setUser] = useState(token.getUserData());

  const userRole = user?.role || null;
  const isAdmin = userRole === USER_ROLES.ADMIN;
  const isCustomer = userRole === USER_ROLES.CUSTOMER;

  const accountLabel = useMemo(() => {
    if (isAdmin) return "Admin";
    if (isCustomer) return "Account";
    return "Login";
  }, [isAdmin, isCustomer]);

  useEffect(() => {
    const syncState = () => {
      setIsAuthenticated(token.isAuthenticated());
      setUser(token.getUserData());

      const cart = storage.getJSON(STORAGE_KEYS.CART, []);
      const safeCart = Array.isArray(cart) ? cart : [];
      const count = safeCart.reduce((sum, item) => sum + Number(item?.quantity || 1), 0);
      setCartCount(count);
    };

    syncState();
    window.addEventListener("storage", syncState);

    return () => {
      window.removeEventListener("storage", syncState);
    };
  }, []);

  const handleLogout = () => {
    token.logout();
    setMobileOpen(false);
    navigate(ROUTE_PATHS.LOGIN);
  };

  const handleAccountClick = () => {
    setMobileOpen(false);

    if (!isAuthenticated) {
      navigate(ROUTE_PATHS.LOGIN);
      return;
    }

    if (isAdmin) {
      navigate(ROUTE_PATHS.ADMIN_DASHBOARD);
      return;
    }

    navigate(ROUTE_PATHS.ACCOUNT);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-[#eadfd8]/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-18 items-center justify-between gap-4">
          <div className="flex items-center gap-10">
            <Link to={ROUTE_PATHS.HOME} className="shrink-0">
              <span className="font-display text-3xl text-secondary">Luma Skin</span>
            </Link>

            <nav className="hidden items-center gap-7 lg:flex">
              {navItems.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.to}
                  className={({ isActive }) =>
                    `text-sm font-medium transition ${isActive ? "text-accent" : "text-[#5f524a] hover:text-secondary"}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            <button
              type="button"
              onClick={() => navigate(ROUTE_PATHS.CART)}
              className="relative flex h-11 w-11 items-center justify-center rounded-full border border-[#eadfd8] bg-primary text-secondary transition hover:border-accent hover:text-accent"
              aria-label="Cart"
            >
              <Icon icon="mdi:shopping-outline" width={20} />
              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-accent px-1 text-[10px] font-semibold text-white">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              type="button"
              onClick={handleAccountClick}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#eadfd8] bg-primary text-secondary transition hover:border-accent hover:text-accent"
              aria-label={accountLabel}
            >
              <Icon icon="mdi:account-outline" width={20} />
            </button>

            {isAuthenticated ? (
              <Button
                text="Logout"
                variant="outline"
                className="w-auto! rounded-full! border-[#dac9c0] px-5! py-2.5! text-sm! text-secondary! hover:bg-surface!"
                onClick={handleLogout}
              />
            ) : (
              <Button
                text="Login"
                variant="accent"
                className="w-auto! rounded-full! px-5! py-2.5! text-sm! bg-accent! hover:bg-accent/90!"
                onClick={() => navigate(ROUTE_PATHS.LOGIN)}
              />
            )}
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#eadfd8] text-secondary lg:hidden"
            aria-label="Toggle menu"
          >
            <Icon icon={mobileOpen ? "mdi:close" : "mdi:menu"} width={22} />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-[#f1e7e1] bg-white lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-5 sm:px-6">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.to}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `text-sm font-medium transition ${isActive ? "text-accent" : "text-[#5f524a] hover:text-secondary"}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="grid grid-cols-2 gap-3">
              <Button
                text={`Cart${cartCount > 0 ? ` (${cartCount})` : ""}`}
                variant="outline"
                iconName="mdi:shopping-outline"
                className="rounded-full! border-[#dac9c0]! text-secondary! hover:bg-surface!"
                onClick={() => {
                  setMobileOpen(false);
                  navigate(ROUTE_PATHS.CART);
                }}
              />

              <Button
                text={accountLabel}
                variant="outline"
                iconName="mdi:account-outline"
                className="rounded-full! border-[#dac9c0]! text-secondary! hover:bg-surface!"
                onClick={handleAccountClick}
              />
            </div>

            {isAuthenticated ? (
              <Button
                text="Logout"
                variant="accent"
                className="rounded-full! bg-accent! hover:bg-accent/90!"
                onClick={handleLogout}
              />
            ) : (
              <Button
                text="Login"
                variant="accent"
                className="rounded-full! bg-accent! hover:bg-accent/90!"
                onClick={() => {
                  setMobileOpen(false);
                  navigate(ROUTE_PATHS.LOGIN);
                }}
              />
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
