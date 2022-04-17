import { DisheList, PageTemplate } from "@/Components";
import { useRouter } from "next/router";
import Styles from "../../styles/discovery.module.css";

export default function Discover() {
  const router = useRouter();

  const city = router.query.city;

  return (
    <PageTemplate>
      <div className={Styles.content}>
        <h1>Opções na região de {city}</h1>;<p>Encontramos x opções</p>
        <div className={Styles.items}>
          <DisheList />
        </div>
      </div>
    </PageTemplate>
  );
}
