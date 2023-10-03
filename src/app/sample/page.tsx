const Page = async () => {
  const body = await fetch("http://0.0.0.0:3001");

  return <div dangerouslySetInnerHTML={{ __html: await body.text() }} />;
};

export default Page;
