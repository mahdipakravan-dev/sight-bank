// No changes to Header.tsx
import React, { useEffect, useState, useCallback } from "react";
import { Button } from "../shared/button/button";
import { Logo } from "../shared/logo";
import s from "./Header.module.scss";
import { useTranslation } from "react-i18next";
import clsx from "clsx";

const Header = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Close on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [closeMenu]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleNavItemClick = () => {
    closeMenu();
  };

  return (
    <header className={clsx(s.header, "")}>
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
        className={clsx(s.burger, isMenuOpen && s.burgerOpen)}
        aria-label={
          isMenuOpen
            ? t("header.close-menu", "Close menu")
            : t("header.open-menu", "Open menu")
        }
        aria-expanded={isMenuOpen}
        aria-controls="mobile-menu"
        onClick={toggleMenu}
      >
        <span />
        <span />
        <span />
      </button>

      {/* Overlay */}
      {isMenuOpen && <div className={s.backdrop} onClick={closeMenu} />}

      {/* Mobile slide-in menu */}
      <nav
        id="mobile-menu"
        className={clsx(s.mobileMenu, isMenuOpen && s.mobileMenuOpen)}
        aria-hidden={!isMenuOpen}
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
