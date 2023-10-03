import parse, { Element } from "html-react-parser";
import { Pokemon } from "@/components/Pokemon";
import { Counter } from "@/components/Counter";

export const Content = ({ content }: { content: string }) => {
  return parse(content, {
    replace: (domNode) => {
      if (
        domNode instanceof Element &&
        domNode.tagName === "pokemon" &&
        domNode.attribs.id
      ) {
        return <Pokemon id={Number(domNode.attribs.id)} />;
      }
      if (domNode instanceof Element && domNode.tagName === "counter") {
        return <Counter />;
      }
    },
  });
};
