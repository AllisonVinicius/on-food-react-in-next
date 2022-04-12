import { useRouter } from "next/router";

export default function Discover() {
  const router = useRouter();

  const city = router.query.city;

  return <h1>Descobrir, {city}</h1>;
}
