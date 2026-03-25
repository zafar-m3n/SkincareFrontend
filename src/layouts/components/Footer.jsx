import React from "react";
import { Link } from "react-router-dom";
import { APP_NAME, ROUTE_PATHS } from "@/lib/constants";
import Icon from "@/components/ui/Icon";

const footerLinks = {
  shop: [
    { label: "Shop All", to: ROUTE_PATHS.SHOP },
    { label: "Categories", to: ROUTE_PATHS.SHOP },
    { label: "Best Sellers", to: ROUTE_PATHS.SHOP },
    { label: "New Arrivals", to: ROUTE_PATHS.SHOP },
  ],
  support: [
    { label: "My Account", to: ROUTE_PATHS.ACCOUNT },
    { label: "Cart", to: ROUTE_PATHS.CART },
    { label: "Checkout", to: ROUTE_PATHS.CHECKOUT },
    { label: "Legal", to: ROUTE_PATHS.LEGAL },
  ],
};

const socialLinks = [
  { icon: "mdi:instagram", href: "#", label: "Instagram" },
  { icon: "mdi:facebook", href: "#", label: "Facebook" },
  { icon: "mdi:twitter", href: "#", label: "Twitter" },
  { icon: "mdi:youtube", href: "#", label: "YouTube" },
];

const Footer = () => {
  return (
    <footer className="border-t border-[#e8ddd6] bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-md space-y-5">
            <Link to={ROUTE_PATHS.HOME} className="inline-block">
              <span className="font-display text-3xl text-secondary">Luma Skin</span>
            </Link>

            <p className="text-sm leading-7 text-[#6f625a]">
              Premium skincare designed to support healthy, balanced, radiant skin with elegant essentials for your
              daily routine.
            </p>

            <div className="flex items-center gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#eadfd8] bg-primary text-secondary transition hover:border-accent hover:text-accent"
                >
                  <Icon icon={item.icon} width={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-primary text-sm font-semibold uppercase tracking-[0.2em] text-secondary/80">
              Shop
            </h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="text-sm text-[#6f625a] transition hover:text-accent">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-primary text-sm font-semibold uppercase tracking-[0.2em] text-secondary/80">
              Support
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="text-sm text-[#6f625a] transition hover:text-accent">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-[#f1e7e1] pt-6 text-xs text-[#8c7d74] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {APP_NAME}. All rights reserved.
          </p>
          <p>Thoughtfully formulated for modern skincare rituals.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
