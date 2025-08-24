import * as Scrollytelling from "@bsmnt/scrollytelling";
import { useEffect, useRef, useCallback } from "react";
import s from "./copyright.module.scss";

const START = 0;

export const Copyright = () => {
  return (
    <div className={s["copyright"]}>
      تمامی حقوق مادی و معنوی این وبسایت متعلق به بانک کارآفرین است.
    </div>
  );
};
