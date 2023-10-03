import { FC } from "react";

export const importShortcode = async <T extends {}, K extends unknown>(
  mod: Promise<{ Component: FC<T>; getProps?: (key: K) => Promise<T> }>,
) => {
  const { getProps, Component } = await mod;
  if (!getProps) return Component;
  return (key: K) => getProps(key).then(Component);
};
