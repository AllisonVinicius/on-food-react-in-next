import { DisheDetails } from "..";
import Styles from "./dishe.module.css";

export function Dishe() {
  return (
    <div className={Styles.dishe}>
      <div className={Styles.wrapper}>imagem</div>
      <div>
        <div>
          <h2>Nome do Produto:</h2>
        </div>
        <DisheDetails type="reviews" title="(201)" subtitle="4.5" />
        <DisheDetails type="category" title="Categoria" />
        <DisheDetails type="delivery" title="30 - 40 min" />
      </div>
    </div>
  );
}
