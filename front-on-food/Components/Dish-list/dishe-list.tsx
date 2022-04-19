import { Dishe } from "@/Components";
import { api } from "@/services";
import { DishType } from "@/types";
import { useQuery } from "react-query";
import Style from "./dish-list.module.css";

export function DisheList() {
  const fetchDishs = async () => {
    const response = await api.get<DishType[]>("/deliveries?city=sao-paulo-sp");
    return response.data;
  };

  const { data, isFetching } = useQuery<DishType[]>("dishs", fetchDishs);
  return (
    <div className={Style.list}>
      {isFetching ? (
        <div>Carregando...</div>
      ) : (
        data?.map((dishe) => <Dishe key={dishe.id}{...dish} />)
      )}
    </div>
  );
}
