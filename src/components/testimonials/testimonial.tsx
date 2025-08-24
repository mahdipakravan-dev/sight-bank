import { useTranslation } from "react-i18next";
import { WaveBackground } from "../hero/wave-background";
import s from "./testimonial.module.scss";
import { useMemo } from "react";

const commentsArray = [
  {
    name: "رحمتی",
    platform: "کافه بازار",
    description:
      "نرم افزار خوبیه اگر حساب قرض الحسنه باز کنین و بالا 2 ملیون تومان تو حساب باشه خیلی راحت امتیاز میده بهتون برای دریافت وام فقط باید پله پله بگیرین تازه برعکس خیلی از بانک ها که تا 50 میده این تا 100 باز میکنه",
    star: 5,
  },
  {
    name: "annudy",
    platform: "کافه بازار",
    description:
      "برنامه بسیار قدرتمند 👍🏻 فقط لطفا در قسمت قبض، بخش مدیریت قبض ها رو هم اضافه کنید.",
    star: 4,
  },
  {
    name: "علی",
    platform: "کافه بازار",
    description: "کار کردن باهاش راحته و راحت میتونی تسهیلات بگیری",
    star: 5,
  },
  {
    name: "کاربر",
    platform: "کافه بازار",
    description:
      "برنامه خوبیه و خدماتش به خوبی کار میکنه. دوستان وام تمام بانک ها مبتنی بر امتیاز و سپرده شما در اون بانک هست نه این که شما تا افتتاح حساب میکنی توقع وام داشته باشی",
    star: 4,
  },
  {
    name: "علی پورنهاوندی",
    platform: "کافه بازار",
    description: "همیشه عالی",
    star: 5,
  },
  {
    name: "محمد",
    platform: "کافه بازار",
    description:
      "سلام لطفا امکان ذخیره و استعلام قبوض رو در برنامه فراهم کنید تا هر بار مجبور به وارد کردن مشخصات قبض نباشیم و همچنین بتونیم با وارد کردن شماره موبایل قبض رو پرداخت کنیم و نیز امکان ذخیره نام کاربری موقع ورود به برنامه فراهم شود با تشکر",
    star: 3,
  },
  {
    name: "غل مراد",
    platform: "مایکت",
    description:
      "ممنون که زود به کارهای مردم رسیگی میکنید، بعد احراز، 10 ساعت بعدش صدور کارت رو زدن و تحویل پست داده شد، سریع و بدون دردسر بود، فرایند باز کردن حساب و احراز هم خوب بود.",
    star: 5,
  },
  {
    name: "محمد",
    platform: "مایکت",
    description:
      "لطفا امکان اضافه کردن کارت بانکی سایر بانک ها را برای پرداخت اقساط تسهیلات فراهم نمایید تا مستقیم از کارت بانک های دیگر اقساط خودمون را پرداخت کنیم. مثل بانک مهر ایران که این امکان را فراهم کرده است.",
    star: 3,
  },
  {
    name: "حسین",
    platform: "مایکت",
    description: "مرسی تشکر از بابت کارت زیباتون عالی بود.",
    star: 5,
  },
  {
    name: "Hadi",
    platform: "مایکت",
    description:
      "با سلام برنامه خوبیه ولی با ورود به همراه بانک موجودی بروز نیست باید دستی بروز کنیم ولی اکثر بانکها اینطوری نیست. دوم اینکه رمز پویا اگه مثل بانک تجارت یا ملت خودش کپی کنه عالی میشه، منتظر پیامک موندن دیگه قدیمی شد. ممنون.",
    star: 4,
  },
  {
    name: "علی",
    platform: "مایکت",
    description:
      "واقعا بهترین اپ بانکیه، پشتیبانی سریع و آنلاین، ارسال سریع کارت و کارت‌های متنوع. اگه تسهیلات مبلغ کم رو اضافه کنند مثل ویپاد، واقعا دیگه پرفکت میشه. در کل خوبه ❤️❄️",
    star: 5,
  },
  {
    name: "کاوه",
    platform: "مایکت",
    description:
      "با سلام. واقعا دستتون درد نکنه. خدا شاهد تمام بانک‌ها حساب دارم ولی از این بانک کارآفرین هرچی صفات خوب بگی کم گفتی. دمتون گرم بابت همه چیز. خدا کنه همیشه سربلند باشید. بازم ممنونم ✌️💥🙏",
    star: 3,
  },
];

type CommentProps = {
  comment: {
    name: string;
    platform: string;
    description: string;
    star?: number;
  };
};
export const Testimonial = () => {
  const { t } = useTranslation();

  // Fisher-Yates shuffle
  function shuffleArray<T>(array: T[]): T[] {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // Shuffle only once per mount
  const shuffledComments = useMemo(() => shuffleArray(commentsArray), []);

  const Comment = ({ comment }: CommentProps) => (
    <article className={s["comment"]}>
      <header>
        <div className={s["right"]}>
          <div className={s["avatar"]}>
            <img src="/images/avatar-1.png" alt="Avatar" />
          </div>
          <div className={s["name"]}>
            <span>{comment.name}</span>
            <b>{comment.platform}</b>
          </div>
        </div>
        <div className={s["left"]}>
          <div className={s["stars"]}>
            {Array.from({ length: comment.star || 5 }).map(() => (
              <img src="/images/star.png" alt="" />
            ))}
          </div>
        </div>
      </header>

      <p>{comment.description}</p>
    </article>
  );

  return (
    <section className={s["container"]}>
      <WaveBackground />
      <div className={s["testimonials"]}>
        <div className={s["row-1"]}>
          <div className={s["row-1"]}>
            {shuffledComments.slice(0, 5).map((comment, i) => (
              <Comment comment={comment} key={`r1-${i}`} />
            ))}
          </div>
        </div>
        <div className={s["row-2"]}>
          <div className={s["row-1"]}>
            {shuffledComments.slice(5, 10).map((comment, i) => (
              <Comment comment={comment} key={`r2-${i}`} />
            ))}
          </div>
        </div>
      </div>
      <div className={s["content"]}>
        <h2>{t("testimonials.title")}</h2>
      </div>
    </section>
  );
};
