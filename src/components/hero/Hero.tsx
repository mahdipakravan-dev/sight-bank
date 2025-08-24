import * as Scrollytelling from "@bsmnt/scrollytelling";
import { useTranslation } from "react-i18next";
import s from "./Hero.module.scss";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <>
      <Scrollytelling.Root
        defaults={{ ease: "cubic-bezier(0.22, 1, 0.36, 1)" }}
        start="top top"
        end="bottom bottom"
      >
        <Scrollytelling.Pin
          childHeight={"100vh"}
          pinSpacerHeight={"200vh"}
          pinSpacerClassName={s["pin-spacebar"]}
        >
          <div className={s["hero-bg"]}></div>
        </Scrollytelling.Pin>
      </Scrollytelling.Root>
    </>
  );
};

export default HeroSection;
