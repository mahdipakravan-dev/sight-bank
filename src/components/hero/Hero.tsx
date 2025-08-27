import * as Scrollytelling from "@bsmnt/scrollytelling";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import s from "./Hero.module.scss";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className={s["hero-bg"]}>
        <div className={s["rectangle"]} />
        <section className={clsx(s["hero-content"], "container")}>
          <div className={s["hero-text"]}>
            <h5>سرمایه خود را ذخیره & مدیریت کنید</h5>
            <h1>بانکی که</h1>
            <h1>آرزو</h1>
            <h1>داشتید</h1>
            <a href="#" className={s["hero-btn"]}>
              به جمع ۵.۴ میلیون کاربر بپیوندید
              <div className={s["arrow-wrap"]}>
                <div className="icon">
                  <svg
                    viewBox="0 0 24 24"
                    width="100%"
                    height="100%"
                    aria-hidden="true"
                    role="img"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5.7,1.1c1.1-1.1,2.9-1.1,4,0l8.9,8.9c1.1,1.1,1.1,2.9,0,4l-8.9,8.9c-1.1,1.1-2.9,1.1-4,0c-1.1-1.1-1.1-2.9,0-4 l6.9-6.9L5.7,5.1C4.6,4,4.6,2.2,5.7,1.1L5.7,1.1z"></path>
                  </svg>
                </div>
              </div>
            </a>
          </div>

          <div className={s["hero-cards"]}>
            <div className={clsx(s.card, s["card-black"])}>
              <img src="/card-black.svg" alt="" />
            </div>

            <div className={clsx(s.card, s["card-brown"])}>
              <img src="/card-brown.svg" alt="" />
            </div>

            <img src="/card-shaddow.svg" alt="" className={s["card-shadow"]} />
          </div>
        </section>

        <section className={clsx(s["feature-block"])}>
          <div className={clsx(s["feature-wrapper"], "container")}>
            <div className={s["upper-items"]}>
              <h4>شفافیت کامل مالی</h4>
              <p>با خیال راحت میتونید انواع خروجی و ورودی را ببینیذ</p>
              <div className={s["featured-by"]}>
                <span>قدرت گرفته از</span>
                <img src="/feature/bloomberg.svg" alt="" />
              </div>
            </div>
            <div className={s["down-items"]}>
              <img src="/feature/bloomberg.svg" alt="" />
              <img src="/feature/bbc.svg" alt="" />
              <img src="/feature/g.svg" alt="" />
              <img src="/feature/dw.svg" alt="" />
              <img src="/feature/forbes.svg" alt="" />
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default HeroSection;
