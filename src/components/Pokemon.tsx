export const Pokemon = async ({ id }: { id: number }) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const data = (await res.json()) as {
    sprites: { front_default: string };
    name: string;
    types: { type: { name: string } }[];
  };
  if (!data) return;

  return (
    <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
      <div className="flex justify-center -mt-16">
        <img
          className="w-20 h-20 object-cover rounded-full border border-gray-200 bg-white"
          alt=""
          src={data.sprites.front_default}
        />
      </div>
      <div>
        <h2 className="text-gray-800 text-3xl font-semibold">{data.name}</h2>
        <p className="mt-2 text-gray-600">
          {data.types
            .map(({ type }: { type: { name: string } }) => type.name)
            ?.join(", ")}
        </p>
      </div>
    </div>
  );
};
