import useSWR from "swr";

export default function HomePage() {
  const { data, error, isLoading } = useSWR(`/api/random-character`);
  if (isLoading) return <>Loading...</>;
  if (error) return <>(error)</>;

  return (
    <>
      <h1>
        {data.firstName},{data.lastName}
      </h1>
      <q>{data.twitterName}</q>
      <p>{data.geohash}</p>
    </>
  );
}
