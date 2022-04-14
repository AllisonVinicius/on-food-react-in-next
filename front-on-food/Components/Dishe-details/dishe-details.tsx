import { IconCategory, IconDelivery, IconReviews } from "@/icons";
import Styles from "./dishe-details.module.css";
import { DisheDetailsProps } from "./types";

export function DisheDetails({ type, subtitle, title }: DisheDetailsProps) {
  const Icon =
    type === "delivery"
      ? IconDelivery
      : type === "category"
      ? IconCategory
      : IconReviews;

  return (
    <div className={Styles.details}>
      <div className={Styles.icon}>
        <Icon />
      </div>

      {subtitle && <span>{subtitle}</span>}
      {title}
    </div>
  );
}
