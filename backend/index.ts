import html from "./page.html";

interface Env {}

export default {
  fetch: (req: Request, env: Env, ctx: ExecutionContext) => {
    if (new URL(req.url).pathname === "/")
      return new Response(html, { headers: { "content-type": "text/html" } });

    return new Response(null, { status: 404 });
  },
};
