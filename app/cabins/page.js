export default async function Page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  console.log(data);

  return (
    <>
      <h1>Cabins Page</h1>
      <ul>
        {data.map((d) => (
          <li key={d.id}>{d.name}</li>
        ))}
      </ul>
    </>
  );
}
