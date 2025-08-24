import * as Scrollytelling from "@bsmnt/scrollytelling";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { WaveBackground } from "../hero/wave-background";
import { Button } from "../shared/button/button";
import s from "./Cards.module.scss";
import { FrontCard } from "./front-card";
import { BackCard } from "./back-card";

gsap.registerPlugin(ScrollTrigger);

type CardColorKey =
  | "red"
  | "green"
  | "blue"
  | "yellow"
  | "purple"
  | "karafarin";

const COLOR_MAP: Record<
  CardColorKey,
  { hex: string; frontSrc: string; backSrc: string }
> = {
  red: {
    hex: "#E53935",
    frontSrc: "/cards/front.png",
    backSrc: "/cards/back.png",
  },
  green: {
    hex: "#187570",
    frontSrc: "/cards/front.png",
    backSrc: "/cards/back.png",
  },
  blue: {
    hex: "#1E88E5",
    frontSrc: "/cards/front.png",
    backSrc: "/cards/back.png",
  },
  yellow: {
    hex: "#FBC02D",
    frontSrc: "/cards/front.png",
    backSrc: "/cards/back.png",
  },
  purple: {
    hex: "#8E24AA",
    frontSrc: "/cards/front.png",
    backSrc: "/cards/back.png",
  },
  karafarin: {
    hex: "#F57C00",
    frontSrc: "/cards/front.png",
    backSrc: "/cards/back.png",
  },
};

export const Cards = () => {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const frontRef = useRef<HTMLImageElement | null>(null);
  const backRef = useRef<HTMLImageElement | null>(null);

  const [selected, setSelected] = useState<CardColorKey>("green");

  const { hex, frontSrc, backSrc } = useMemo(
    () => COLOR_MAP[selected],
    [selected]
  );

  useEffect(() => {
    if (containerRef.current && frontRef.current && backRef.current) {
      gsap.set([frontRef.current, backRef.current], {
        opacity: 0,
        scale: 0.9,
        x: 0,
        y: 0,
        filter: "blur(8px)",
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            once: true,
          },
        })
        .to([frontRef.current, backRef.current], {
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.12,
        })
        .fromTo(
          frontRef.current,
          { y: 24 },
          { y: 0, duration: 0.6, ease: "power2.out" },
          "<"
        )
        .fromTo(
          backRef.current,
          { y: 32 },
          { y: 0, duration: 0.6, ease: "power2.out" },
          "<"
        );

      const maxY = Math.min(120, window.innerWidth * 0.35);
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=200%",
          scrub: true,
        },
      });
      tl.to(frontRef.current, { y: -maxY, ease: "none" }, 0).to(
        backRef.current,
        { y: -maxY, ease: "none" },
        0
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [t]);

  useEffect(() => {
    if (frontRef.current && backRef.current) {
      gsap.fromTo(
        [frontRef.current, backRef.current],
        { opacity: 0, filter: "blur(6px)", y: 10, rotate: 0.2 },
        {
          opacity: 1,
          filter: "blur(0px)",
          y: 0,
          rotate: 0,
          duration: 0.35,
          stagger: 0.06,
          ease: "power2.out",
        }
      );
    }
  }, [frontSrc, backSrc]);

  return (
    <Scrollytelling.Root start={"top top"}>
      <Scrollytelling.Pin
        childHeight="100vh"
        pinSpacerHeight="200vh"
        childClassName={s["container"]}
      >
        <WaveBackground />
        <div
          className={s["card-content"]}
          id="card-content"
          role="region"
          aria-label={t("services.card_services_aria")}
          ref={containerRef}
        >
          <div className={s["text-holder"]}>
            <h2>
              <b id="card_bold">{t("services.physical")}</b>
            </h2>
            <h2>{t("services.card_title")}</h2>
            <p id="card_desc">{t("services.card_desc")}</p>
            <p>{t("services.card_desc_2")}</p>
            <p>{t("services.card_desc_3")}</p>
            <Button id="card_cta">
              <span>{t("services.card_cta")}</span>
              <svg
                id="card_icon"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5 12h14M13 5l7 7-7 7"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
          </div>

          <div className={s["mobile-holder"]}>
            <img
              src="/devices/phone-card.png"
              alt=""
              width={360}
              className={s["device"]}
            />

            <img
              ref={frontRef}
              src={frontSrc}
              width={366}
              alt=""
              className={s["card-front"]}
            />
            <img
              ref={backRef}
              src={backSrc}
              width={366}
              alt=""
              className={s["card-back"]}
            />

            <div className={s["vector-card"]}>
              <FrontCard color={hex} />
              <BackCard color={hex} />
            </div>

            <div className={s["card-selection"]}>
              <div
                className={s["cards-color"]}
                role="listbox"
                aria-label="Card colors"
              >
                <div
                  role="option"
                  aria-label="Red"
                  aria-selected={selected === "red"}
                  data-active={selected === "red"}
                  className={`${s["card-red"]} ${s["swatch"]}`}
                  onClick={() => setSelected("red")}
                  tabIndex={0}
                  onKeyDown={(e) =>
                    (e.key === "Enter" || e.key === " ") && setSelected("red")
                  }
                />
                <div
                  role="option"
                  aria-label="Green"
                  aria-selected={selected === "green"}
                  data-active={selected === "green"}
                  className={`${s["card-green"]} ${s["swatch"]}`}
                  onClick={() => setSelected("green")}
                  tabIndex={0}
                  onKeyDown={(e) =>
                    (e.key === "Enter" || e.key === " ") && setSelected("green")
                  }
                />
                <div
                  role="option"
                  aria-label="Blue"
                  aria-selected={selected === "blue"}
                  data-active={selected === "blue"}
                  className={`${s["card-blue"]} ${s["swatch"]}`}
                  onClick={() => setSelected("blue")}
                  tabIndex={0}
                  onKeyDown={(e) =>
                    (e.key === "Enter" || e.key === " ") && setSelected("blue")
                  }
                />
                <div
                  role="option"
                  aria-label="Yellow"
                  aria-selected={selected === "yellow"}
                  data-active={selected === "yellow"}
                  className={`${s["card-yellow"]} ${s["swatch"]}`}
                  onClick={() => setSelected("yellow")}
                  tabIndex={0}
                  onKeyDown={(e) =>
                    (e.key === "Enter" || e.key === " ") &&
                    setSelected("yellow")
                  }
                />
                <div
                  role="option"
                  aria-label="Purple"
                  aria-selected={selected === "purple"}
                  data-active={selected === "purple"}
                  className={`${s["card-purple"]} ${s["swatch"]}`}
                  onClick={() => setSelected("purple")}
                  tabIndex={0}
                  onKeyDown={(e) =>
                    (e.key === "Enter" || e.key === " ") &&
                    setSelected("purple")
                  }
                />
                <div
                  role="option"
                  aria-label="Karafarin"
                  aria-selected={selected === "karafarin"}
                  data-active={selected === "karafarin"}
                  className={`${s["card-karafarin"]} ${s["swatch"]}`}
                  onClick={() => setSelected("karafarin")}
                  tabIndex={0}
                  onKeyDown={(e) =>
                    (e.key === "Enter" || e.key === " ") &&
                    setSelected("karafarin")
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </Scrollytelling.Pin>
    </Scrollytelling.Root>
  );
};
