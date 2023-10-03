import parse, { Element } from "html-react-parser";
import { Pokemon } from "@/components/Pokemon";
import { Counter } from "@/components/Counter";
import { ConnectShortcode } from "@/app/sample/_components/ConnectShortcode";

export const Content = ({ content }: { content: string }) => {
  return parse(content, {
    replace: (domNode) => {
      if (domNode instanceof Element && domNode.tagName === "pokemon") {
        return (
          <ConnectShortcode hash={domNode.attribs.hash} component={Pokemon} />
        );
      }
      if (domNode instanceof Element && domNode.tagName === "counter") {
        return (
          <ConnectShortcode hash={domNode.attribs.hash} component={Counter} />
        );
      }
    },
  });
};
