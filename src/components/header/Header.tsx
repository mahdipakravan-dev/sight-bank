import React, { useState } from "react";
import { Button } from "../shared/button/button";
import { Logo } from "../shared/logo";
import s from "./Header.module.scss";
import { useTranslation } from "react-i18next";
import clsx from "clsx";

const Header = () => {
  const { t, i18n } = useTranslation();

  return (
    <header className={clsx(s.header, "container")}>
      <div className={s.logo}>
        <Logo />
      </div>
      <nav className={s.menu}>
        <ul>
          <li tabIndex={0}>{t("header.home")}</li>
          <li tabIndex={0}>{t("header.services")}</li>
          <li tabIndex={0}>{t("header.download")}</li>
          <li tabIndex={0}>{t("header.mobile-app")}</li>
          <li>
            <Button variant="outline">{t("header.sign-in")}</Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
