import { ReactNode } from "react";
import { PrismaClient } from "@prisma/client";

export const ConnectShortcode = async ({
  hash,
  component,
}: {
  hash: string;
  component: Promise<(props: any) => Promise<ReactNode> | ReactNode>;
}) => {
  const db = new PrismaClient();
  const { props } = await db.shortcodeProps.findUniqueOrThrow({
    where: { id: hash },
    select: { props: true },
  });

  const Component = await component;

  return <Component {...JSON.parse(props)} />;
};
