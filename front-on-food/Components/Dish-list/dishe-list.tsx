import { Dishe } from "@/Components";
import { DishSkeleton } from "@/components";
import { api } from "@/services";
import { DishType } from "@/types";
import { useQuery } from "react-query";
import Style from "./dish-list.module.css";
import { DishListProps } from "./type";

export function DisheList(props: DishListProps) {
  const fetchDishs = async () => {
    const response = await api.get<DishType[]>(
      `/deliveries?city=${props.Slug}`
    );
    return response.data;
  };

  const { data, isFetching } = useQuery<DishType[]>("dishs", fetchDishs);
  return (
    <div className={Style.list}>
      {isFetching ? (
        <DishSkeleton />
      ) : (
        data?.map(dishe => <Dishe key={dishe.id} {...dish} />)
      )}
    </div>
  );
}
