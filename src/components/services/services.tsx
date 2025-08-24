import { useRef } from "react";
import { useTranslation } from "react-i18next";
import s from "./Services.module.scss";
import clsx from "clsx";

const FULL_SCREEN_WAYPOINT = 30;
const OUTING_WAYPOINT = 0.8;

export const Services = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { t } = useTranslation();
  const gridRef = useRef<HTMLDivElement>(null);

  return (
    <div className={clsx(s["container"])}>
      <div className={clsx(s["wrapper"], "container")}>
        <h1>درباره ما</h1>

        <div className={s["content"]}>
          <h2>بدست آوردن یک شفافیت مالی </h2>
          <h2>در ۱ دقیقه</h2>
          <p>
            به پول خود علاقه مند شوید, موبایل به سرعت به یک کانال مهم برای بانک
            ها تبدیل شده است ، زیرا مصرف کنندگان با استفاده از دستگاه های تلفن
            همراه خود برای طیف گسترده ای از خدمات مالی راحت تر می شوند.
          </p>
          <p>
            به روز رسانی اپلیکیشن بانکداری بینایی بسیاری از مسائل مطرح شده در
            این گزارش را مورد توجه قرار داده است و نشان می دهد که چگونه موبایل
            را به اولویت اول تبدیل کرده است. سفر شما بدون درز ، امن و امن است.
            نیازی به وارد کردن جزئیات کارت نیست. شما می توانید در هر زمان و از
            هر دستگاهی به صورت آنلاین پرداخت کنید.افزایش تعداد چک های سپرده شده
            هر روز با استفاده از تلفن همراه نشان دهنده رضایت مشتری از گزینه تلفن
            همراه است.
          </p>

          <div className={s["grid"]}>
            <div className={clsx(s["item"], s["orange"])}>
              {/* <img src="/about/girl.webp" alt="" /> */}
              <h3>بانک هستیم</h3>
              <h6>اما دوست داشتنی</h6>
            </div>
            <div className={s["item"]}>
              <img src="/about/girl.webp" alt="" />
            </div>
            <div className={s["item"]}>
              <img src="/about/girl-2.webp" alt="" />
            </div>
            <div className={clsx(s["item"], s["transparent"])}>
              {/* <img src="/about/girl.webp" alt="" /> */}
            </div>

            <div className={s["connect"]}>
              <img src="/about/connect.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
