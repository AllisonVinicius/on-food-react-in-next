import { Dishe } from "@/Components";
import Style from "./dish-list.module.css";

export function DisheList() {
  return (
    <div className={Style.list}>
      <Dishe />
      <Dishe />
      <Dishe />
    </div>
  );
}
