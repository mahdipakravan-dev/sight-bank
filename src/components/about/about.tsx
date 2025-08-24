import * as Scrollytelling from "@bsmnt/scrollytelling";
import s from "./about.module.scss";
import { useTranslation } from "react-i18next";
import { WaveBackground } from "../hero/wave-background";

const START = 10;
export const About = () => {
  const { t } = useTranslation();
  return (
    <Scrollytelling.Root start="top top">
      <Scrollytelling.Pin
        childHeight="80vh"
        pinSpacerHeight="150vh"
        childClassName={s["container"]}
      >
        <WaveBackground />

        <Scrollytelling.Parallax
          tween={{
            movementX: {
              unit: "px",
              value: 10,
            },
            movementY: {
              unit: "px",
              value: 10,
            },
            start: 0,
            end: 100,
          }}
        >
          <img src="/about.png" alt="" />
        </Scrollytelling.Parallax>

        <div className={s["content"]} id="about-content">
          <b>{t("about.title")}</b>
          <br />
          <div className={s["line-1"]}>{t("about.line1")}</div>
          <p>{t("about.description")}</p>
          <p>{t("about.description_2")}</p>
        </div>

        {/* Initial video mask animation */}
      </Scrollytelling.Pin>
    </Scrollytelling.Root>
  );
};
