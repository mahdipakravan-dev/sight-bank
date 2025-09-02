import React, { useEffect, useState, useCallback } from "react";
import { Button } from "../shared/button/button";
import { Logo } from "../shared/logo";
import s from "./Header.module.scss";
import { useTranslation } from "react-i18next";
import clsx from "clsx";

const Header = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const closeMenu = useCallback(() => setOpen(false), []);
  const toggleMenu = () => setOpen((v) => !v);

  // Close on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [closeMenu]);

  // Prevent body scroll when open
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNavItemClick = () => {
    // Close the panel after navigating on mobile
    closeMenu();
  };

  return (
    <header className={clsx(s.header, "container")}>
      <div className={s.logo}>
        <Logo />
      </div>

      {/* Desktop menu */}
      <nav className={s.menu} aria-label={t("header.navigation", "Main")}>
        <ul>
          <li tabIndex={0} onClick={handleNavItemClick}>
            {t("header.home")}
          </li>
          <li tabIndex={0} onClick={handleNavItemClick}>
            {t("header.services")}
          </li>
          <li tabIndex={0} onClick={handleNavItemClick}>
            {t("header.download")}
          </li>
          <li tabIndex={0} onClick={handleNavItemClick}>
            {t("header.mobile-app")}
          </li>
          <li>
            <Button variant="outline" onClick={handleNavItemClick}>
              {t("header.sign-in")}
            </Button>
          </li>
        </ul>
      </nav>

      {/* Hamburger */}
      <button
        className={clsx(s.burger, open && s.burgerOpen)}
        aria-label={
          open
            ? t("header.close-menu", "Close menu")
            : t("header.open-menu", "Open menu")
        }
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={toggleMenu}
      >
        <span />
        <span />
        <span />
      </button>

      {/* Overlay */}
      {open && <div className={s.backdrop} onClick={closeMenu} />}

      {/* Mobile slide-in menu */}
      <nav
        id="mobile-menu"
        className={clsx(s.mobileMenu, open && s.mobileMenuOpen)}
        aria-hidden={!open}
        aria-label={t("header.navigation", "Main")}
      >
        <ul>
          <li tabIndex={0} onClick={handleNavItemClick}>
            {t("header.home")}
          </li>
          <li tabIndex={0} onClick={handleNavItemClick}>
            {t("header.services")}
          </li>
          <li tabIndex={0} onClick={handleNavItemClick}>
            {t("header.download")}
          </li>
          <li tabIndex={0} onClick={handleNavItemClick}>
            {t("header.mobile-app")}
          </li>
          <li>
            <Button variant="outline" onClick={handleNavItemClick}>
              {t("header.sign-in")}
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
