import * as Scrollytelling from "@bsmnt/scrollytelling";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import s from "./Hero.module.scss";
import { Button } from "../shared/button/button";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <>
      <Scrollytelling.Root start="top top" end="bottom bottom">
        <Scrollytelling.Pin
          childHeight={"100vh"}
          pinSpacerHeight={"100vh"}
          pinSpacerClassName={s["pin-spacebar"]}
        >
          <div className={s["hero-bg"]} />
          <div className={s["rectangle"]} />
          <section className={clsx(s["hero-content"], "container")}>
            <div className={s["hero-text"]}>
              <h5>سرمایه خود را ذخیره & مدیریت کنید</h5>
              <h1>بانکی که</h1>
              <h1>آرزو</h1>
              <h1>داشتید</h1>
              <Button className={s["hero-btn"]}>
                اضافه شدن به ۵.۳ میلیون کاربر
              </Button>
            </div>

            <div className={s["hero-cards"]}>
              <div className={clsx(s.card, s["card-black"])}>
                <img src="/card-black.svg" alt="" />
              </div>

              <div className={clsx(s.card, s["card-brown"])}>
                <img src="/card-brown.svg" alt="" />
              </div>

              <img
                src="/card-shaddow.svg"
                alt=""
                className={s["card-shadow"]}
              />
            </div>
          </section>
        </Scrollytelling.Pin>
      </Scrollytelling.Root>
    </>
  );
};

export default HeroSection;
