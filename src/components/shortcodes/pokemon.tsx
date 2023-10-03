export const Component = (props: {
  sprites: { front_default: string };
  name: string;
  types: { type: { name: string } }[];
}) => {
  return (
    <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
      <div className="flex justify-center -mt-16">
        <img
          className="w-20 h-20 object-cover rounded-full border border-gray-200 bg-white"
          alt={props.name}
          src={props.sprites.front_default}
        />
      </div>
      <div>
        <h2 className="text-gray-800 text-3xl font-semibold">{props.name}</h2>
        <p className="mt-2 text-gray-600">
          {props.types
            .map(({ type }: { type: { name: string } }) => type.name)
            ?.join(", ")}
        </p>
      </div>
    </div>
  );
};

export const getProps = async ({ id }: { id: number }) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  return (await res.json()) as {
    sprites: { front_default: string };
    name: string;
    types: { type: { name: string } }[];
  };
};
