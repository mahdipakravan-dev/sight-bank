import * as Scrollytelling from "@bsmnt/scrollytelling";
import s from "./download.module.scss";
import { useTranslation } from "react-i18next";
import { WaveBackground } from "../hero/wave-background";

const START = 0;
export const Download = () => {
  const { t } = useTranslation();
  return (
    <Scrollytelling.Root start="top top">
      <Scrollytelling.Pin
        childHeight="100vh"
        pinSpacerHeight="100vh"
        childClassName={s["container"]}
      >
        <WaveBackground />
        <div className={s["content"]} id="download-section">
          <b>{t("download.title")}</b>
          <p>
            {t("download.subtitle")}{" "}
            <span className={s["stroked-text"]}>فردا</span>
          </p>
          <div className={s["download"]}>
            <span>{t("download.ctaText")}</span>
            <div className={s["market-grid"]}>
              {[
                {
                  name: "سیب اپ",
                  link: "https://sibapp.com/applications/Hibank?from=search",
                  icon: "/downloads/sibappnew.svg",
                },
                {
                  name: "کافه بازار",
                  link: "https://app-star.store/app.php?id=hibank",
                  icon: "/downloads/Appstar.svg",
                },
                {
                  name: "گوگل پلی",
                  link: "https://sibche.com/applications/hibank-1",
                  icon: "/downloads/sibche.svg",
                },
                {
                  name: "مایکت",
                  link: "https://iapps.ir/app/%D9%87%D8%A7%DB%8C-%D8%A8%D8%A7%D9%86%DA%A9/454985726",
                  icon: "/downloads/iApps.svg",
                },
                {
                  name: "اپ استور",
                  link: "https://cafebazaar.ir/app/ir.karafarinbank.digital.mb",
                  icon: "/downloads/bazar.svg",
                },
                {
                  name: "اناردونی",
                  link: "https://myket.ir/app/ir.karafarinbank.digital.mb",
                  icon: "/downloads/mayket.svg",
                },
                {
                  name: "دانلود APK",
                  link: "https://sibirani.com/apps/Karafarin/",
                  icon: "/downloads/sibirani.svg",
                },
                {
                  name: "نصب PWA",
                  link: "https://hibank.ir/",
                  icon: "/downloads/web.svg",
                },
              ].map((m) => (
                <a key={m.name} href={m.link} target="_blank" rel="noreferrer">
                  <img width={160} src={m.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </Scrollytelling.Pin>
    </Scrollytelling.Root>
  );
};
