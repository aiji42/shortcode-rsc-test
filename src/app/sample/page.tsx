import { Content } from "./_components/Content";

const Page = async () => {
  const body = await fetch("http://0.0.0.0:3001");

  return <Content content={await body.text()} />;
};

export default Page;
