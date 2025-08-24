import { useTranslation } from "react-i18next";
import { Button } from "../shared/button/button";
import { Logo } from "../shared/logo";
import s from "./footer.module.scss";

const START = 0;

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className={s["container"]}>
      <div className={s["right-section"]}>
        <Logo />
      </div>
      <div className={s["left-section"]}>
        این صرفا یک نمونه کار وب و دیزاین از من هستش
        <br />
        <br />
        <a
          href="https://mpakravan.com/fa"
          target="_blank"
          style={{ marginTop: 22 }}
        >
          <Button>بازدید از وبسایت من</Button>
        </a>
      </div>
    </footer>
  );
};
