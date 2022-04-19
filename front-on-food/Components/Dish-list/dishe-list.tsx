import { Dishe } from "@/Components";
import { api } from "@/services";
import { useQuery } from "react-query";
import Style from "./dish-list.module.css";

export function DisheList() {
  const fetchDishs = async () => {
    const response = await api.get("/deliveries?city=sao-paulo-sp");
    return response.data;
  };

  const { data, isFetching } = useQuery("dishs", fetchDishs);
  return (
    <div className={Style.list}>
      {isFetching ? (
        <div>Carregando...</div>
      ) : (
        data?.map((dish, index) => <Dishe key={index} />)
      )}
    </div>
  );
}
