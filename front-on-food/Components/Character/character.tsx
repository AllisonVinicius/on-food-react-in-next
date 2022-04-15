import Image from "next/image";
import Styles from "./character.module.css";

export function Character() {
  return (
    <div className={Styles.container}>
      <div>
        <Image
          src="/images/home/device.png"
          width={145}
          height={283}
          alt="Telefone"
        />
      </div>
    </div>
  );
}
