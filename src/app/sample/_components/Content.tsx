import parse, { Element } from "html-react-parser";
import { ConnectShortcode } from "@/app/sample/_components/ConnectShortcode";
import { importShortcode } from "@/helper/connect";

export const Content = ({ content }: { content: string }) => {
  return parse(content, {
    replace: (domNode) => {
      if (
        domNode instanceof Element &&
        ["pokemon", "counter"].includes(domNode.tagName)
      ) {
        return (
          <ConnectShortcode
            hash={domNode.attribs.hash}
            component={importShortcode(
              import(`@/components/shortcodes/${domNode.tagName}`),
            )}
          />
        );
      }
    },
  });
};
