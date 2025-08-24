import * as Scrollytelling from "@bsmnt/scrollytelling";
import { useCallback, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import {
  BillIcon,
  CardTransferIcon,
  FinePaymentIcon,
  LoanIcon,
  TaxIcon,
} from "../../assets/icons";
import { WaveBackground } from "../hero/wave-background";
import s from "./Services.module.scss";
import gsap from "gsap";

const FULL_SCREEN_WAYPOINT = 30;
const OUTING_WAYPOINT = 0.8;

export const Services = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { t } = useTranslation();
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const grid = gridRef.current;
      if (!grid) return;

      const items = grid.children;
      if (items.length === 0) return;

      const firstItem = items[0] as HTMLElement;
      if (!firstItem) return;

      gsap.to(firstItem, {
        opacity: 0,
        duration: 0.5,
        ease: "power1.out",
        onComplete: () => {
          gsap.to(grid, {
            y: "-26.2%",
            duration: 0.5,
            ease: "power2.inOut",
            onComplete: () => {
              grid.appendChild(firstItem);

              gsap.set(firstItem, {
                opacity: 0.5,
                scale: 0.95,
              });

              gsap.set(grid, { y: "0%" });

              gsap.to(firstItem, {
                opacity: 1,
                scale: 1,
                duration: 0.4,
                ease: "power1.out",
              });
            },
          });
        },
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const services = [
    { icon: <CardTransferIcon />, label: t("services.card_transfer") },
    { icon: <LoanIcon />, label: t("services.loan") },
    { icon: <BillIcon />, label: t("services.bill") },
    { icon: <FinePaymentIcon />, label: t("services.fine_payment") },
    { icon: <TaxIcon />, label: t("services.tax") },
  ];

  const LogoSwappingAnimation = () => (
    <>
      <Scrollytelling.Waypoint
        at={FULL_SCREEN_WAYPOINT}
        tween={{
          target: [".main-logo-path"],
          duration: 0.2,
          to: {
            fill: "#fff",
          },
        }}
      />
      <Scrollytelling.Waypoint
        at={99}
        tween={{
          target: [".main-logo-path"],
          duration: 0.3,
          to: {
            fill: "var(--primary)",
          },
        }}
      />
    </>
  );

  const FullScreenAnimation = () => (
    <>
      <Scrollytelling.Waypoint
        at={FULL_SCREEN_WAYPOINT}
        tween={{
          target: ["#video-mask"],
          fromTo: [
            {
              clipPath: "inset(100px 100px 80px 100px round 80px)",
              // scale: 0.9,
              opacity: 1,
              "--border-radius": "80px",
            },
            {
              clipPath: "inset(0.1px 0.1px 0.1px 0.1px round 0.1px)",
              // scale: 1,
              opacity: 1,
              "--border-radius": "2px",
            },
          ],
          duration: OUTING_WAYPOINT, // Smoother, longer duration
          ease: "easeInOutCubic", // Natural easing
        }}
      />

      {/* Over-video content fade-in */}
      <Scrollytelling.Waypoint
        at={FULL_SCREEN_WAYPOINT}
        tween={{
          target: ["#over-video"],
          fromTo: [
            {
              transform: "translateY(20vh)",
              opacity: 0,
            },
            {
              transform: "translateY(0)",
              opacity: 1,
            },
          ],
          duration: OUTING_WAYPOINT, // Extended for smoothness
          ease: "easeInOutQuad",
        }}
      />

      {/* Services content slide-out */}
      <Scrollytelling.Waypoint
        at={FULL_SCREEN_WAYPOINT}
        tween={{
          target: ["#services-content"],
          fromTo: [
            {
              transform: "translateY(0)",
              opacity: 1,
            },
            {
              transform: "translateY(-50vh)",
              opacity: 0,
            },
          ],
          duration: OUTING_WAYPOINT, // Slightly longer for grace
          ease: "easeOutQuad",
        }}
      />

      {/* Staggered animation for services grid */}
      {/* {services.map((_, index) => (
        <Scrollytelling.Waypoint
          key={`service-${index}`}
          at={FULL_SCREEN_WAYPOINT} // Staggered timing
          tween={{
            target: [`#service-item-${index}`],
            fromTo: [
              {
                transform: "translateY(50px)",
                opacity: 0,
              },
              {
                transform: "translateY(0)",
                opacity: 1,
              },
            ],
            duration: 0.8,
            ease: "easeOutQuad",
          }}
        />
      ))} */}
    </>
  );

  return (
    <Scrollytelling.Root start={"top top"}>
      <Scrollytelling.Pin
        childHeight="100vh"
        pinSpacerHeight="200vh"
        childClassName={s["container"]}
      >
        <WaveBackground />

        <LogoSwappingAnimation />
        <FullScreenAnimation />
        {/* <ExitingAnimataion /> */}

        <div
          className={s["content"]}
          id="services-content"
          role="region"
          aria-label="Services Introduction"
        >
          <h2>{t("services.title")}</h2>
          <p>{t("services.description")}</p>
        </div>

        <div className={s["video-mask"]} id="video-mask">
          <video
            ref={videoRef}
            src="/videos/iranian-woman.mp4"
            autoPlay
            playsInline
            muted
            loop
            className={s["fullscreen-video"]}
            aria-hidden="true"
          />
        </div>

        <div className={s["over-video"]} id="over-video">
          <h2>
            {t("services.banking_services_title_1")}
            <br />
            {t("services.banking_services_title_2")}
          </h2>
          <p>{t("services.banking_services_p1")}</p>
          <p>{t("services.banking_services_p2")}</p>

          <div
            className={s["services-grid"]}
            ref={gridRef}
            role="list"
            style={{ overflow: "hidden" }}
          >
            {services.map((service, index) => (
              <div key={index} className={s["glass-content"]} role="listitem">
                <i>{service.icon}</i>
                <span>{service.label}</span>
              </div>
            ))}
          </div>
        </div>
      </Scrollytelling.Pin>
    </Scrollytelling.Root>
  );
};
