import * as Scrollytelling from "@bsmnt/scrollytelling";
import { useState } from "react";
import s from "./faq.module.scss";
import { useTranslation } from "react-i18next";
import { WaveBackground } from "../hero/wave-background";

const START = 0;

export const Faq = () => {
  const { t } = useTranslation();
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  const faqData = t("faq.items", { returnObjects: true }) as {
    question: string;
    answer: string;
  }[];

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <Scrollytelling.Root start="top top">
      <Scrollytelling.Pin
        childHeight="100vh"
        pinSpacerHeight="100vh"
        childClassName={s["container"]}
      >
        <WaveBackground />
        <div className={s["content"]}>
          <h2>{t("faq.title")}</h2>
          <p>{t("faq.description")}</p>
        </div>

        <div className={s["faq-container"]}>
          {faqData.map((item, index) => (
            <div key={index} className={s["faq-item"]}>
              <div
                className={s["faq-question"]}
                onClick={() => toggleAccordion(index)}
              >
                <span className={s["question-text"]}>{item.question}</span>
                <button className={s["toggle-btn"]}>
                  <span
                    className={`${s["plus-icon"]} ${
                      openAccordion === index ? s["rotated"] : ""
                    }`}
                  >
                    +
                  </span>
                </button>
              </div>

              {openAccordion === index && (
                <div className={s["faq-answer"]}>
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Scrollytelling.Pin>
    </Scrollytelling.Root>
  );
};
