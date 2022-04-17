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
      <div>
        <Image
          src="/images/home/speech-bubble.png"
          width={64}
          height={71}
          alt="Balao"
        />
      </div>
      <div>
        <Image
          src="/images/home/character.png"
          width={183}
          height={246}
          alt="Personagem"
        />
      </div>
      <div>
        <Image
          src="/images/home/background.png"
          width={328}
          height={318}
          alt="FUndo"
        />
      </div>
    </div>
  );
}
