import { ReactNode } from "react";
import { PrismaClient } from "@prisma/client";

export const ConnectShortcode = async ({
  hash,
  component: Component,
}: {
  hash: string | undefined | null;
  component: (props: any) => Promise<ReactNode> | ReactNode;
}) => {
  if (!hash) return <Component />;

  const db = new PrismaClient();
  const { props } = await db.shortcodeProps.findUniqueOrThrow({
    where: { id: hash },
    select: { props: true },
  });

  return <Component {...JSON.parse(props)} />;
};
