import { jsx, jsxs } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, UNSAFE_withComponentProps, Outlet, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse, Meta, Links, ScrollRestoration, Scripts } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { useState, useEffect } from "react";
import { Star, GitFork } from "lucide-react";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    let timeoutId = setTimeout(
      () => abort(),
      streamTimeout + 1e3
    );
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough({
            final(callback) {
              clearTimeout(timeoutId);
              timeoutId = void 0;
              callback();
            }
          });
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          pipe(body);
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = UNSAFE_withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
function OcticonRepo() {
  return /* @__PURE__ */ jsx("svg", { "aria-hidden": "true", height: "16", viewBox: "0 0 16 16", version: "1.1", width: "16", "data-view-component": "true", className: "octicon octicon-repo mr-1 color-fg-muted", children: /* @__PURE__ */ jsx("path", { d: "M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z" }) });
}
function RepoCard({ owner, repo }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/repos/${owner}/${repo}`).then((res) => res.json()).then(setData).catch(console.error);
  }, [owner, repo]);
  if (!data) {
    return /* @__PURE__ */ jsx("div", { className: "w-full max-w-md p-4 border rounded-xl shadow-sm bg-white animate-pulse" });
  }
  console.log(data);
  return /* @__PURE__ */ jsxs(
    "a",
    {
      href: data.html_url,
      target: "_blank",
      rel: "noopener noreferrer",
      className: "block w-full max-w-md border rounded-xl shadow-sm bg-white hover:shadow-md transition-all p-4",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-1", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(OcticonRepo, {}),
            /* @__PURE__ */ jsx("h3", { className: "text-blue-600 font-semibold hover:underline", children: data.name }),
            data.private ? /* @__PURE__ */ jsx("span", { className: "text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full", children: "Private" }) : /* @__PURE__ */ jsx("span", { className: "text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full", children: "Public" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "text-gray-400", children: /* @__PURE__ */ jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              fill: "currentColor",
              viewBox: "0 0 16 16",
              children: [
                /* @__PURE__ */ jsx("circle", { cx: "8", cy: "8", r: "1" }),
                /* @__PURE__ */ jsx("circle", { cx: "2", cy: "8", r: "1" }),
                /* @__PURE__ */ jsx("circle", { cx: "14", cy: "8", r: "1" })
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-700 text-sm mb-3 text-left", children: data.description || "No description provided." }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 text-xs text-gray-500", children: [
          data.language && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsx(
              "span",
              {
                className: "w-3 h-3 rounded-full",
                style: { backgroundColor: "#3572A5" }
              }
            ),
            /* @__PURE__ */ jsx("span", { children: data.language })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsx(Star, { size: 14 }),
            /* @__PURE__ */ jsx("span", { children: data.stargazers_count.toLocaleString() })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsx(GitFork, { size: 14 }),
            /* @__PURE__ */ jsx("span", { children: data.forks_count.toLocaleString() })
          ] })
        ] })
      ]
    }
  );
}
function LandingPage() {
  return /* @__PURE__ */ jsx("main", { className: "flex items-center justify-center pb-4", children: /* @__PURE__ */ jsxs("div", { className: "flex-1 flex flex-col items-center min-h-0", children: [
    /* @__PURE__ */ jsxs("header", { className: "flex flex-row justify-between items-center py-8 gap-9 w-full h-full text-white", style: { "backgroundColor": "black" }, children: [
      /* @__PURE__ */ jsx("p", { className: "px-4", children: "Nedomkull Mathematical Modeling" }),
      /* @__PURE__ */ jsx("p", { className: "px-4", children: "Menu" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "w-full p-4", style: { "backgroundColor": "#FF8621" } }),
    /* @__PURE__ */ jsx("img", { src: "/math.jpg", alt: "Mathematics", className: "block w-full" }),
    /* @__PURE__ */ jsxs("div", { className: "w-full space-y-6 px-4 py-8 flex flex-row justify-between", children: [
      /* @__PURE__ */ jsx("div", { className: "w-full text-center", children: /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold", children: "Nedomkull Mathematical Modeling" }) }),
      /* @__PURE__ */ jsx("div", { className: "w-full text-center items-center", children: /* @__PURE__ */ jsx("ul", { children: resources.map(({ owner, repo }) => /* @__PURE__ */ jsx(RepoCard, { owner, repo }, owner + repo)) }) })
    ] })
  ] }) });
}
const resources = [
  {
    owner: "hbldh",
    repo: "bleak"
  }
];
function meta({}) {
  return [{
    title: "Nedomkull Mathematical Modeling"
  }, {
    name: "description",
    content: "TBD: Catchy slogan to be thought out..."
  }];
}
const home = UNSAFE_withComponentProps(function Home() {
  return /* @__PURE__ */ jsx(LandingPage, {});
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-CnyD1sGY.js", "imports": ["/assets/chunk-OIYGIGL5-BRnGszPT.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": true, "module": "/assets/root-qXtbzXVT.js", "imports": ["/assets/chunk-OIYGIGL5-BRnGszPT.js"], "css": ["/assets/root-BjheWx7D.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/home": { "id": "routes/home", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/home-B5nVprcX.js", "imports": ["/assets/chunk-OIYGIGL5-BRnGszPT.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/assets/manifest-af2c3ce8.js", "version": "af2c3ce8", "sri": void 0 };
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "v8_middleware": false, "unstable_optimizeDeps": false, "unstable_splitRouteModules": false, "unstable_subResourceIntegrity": false, "unstable_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const routeDiscovery = { "mode": "lazy", "manifestPath": "/__manifest" };
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routeDiscovery,
  routes,
  ssr
};
