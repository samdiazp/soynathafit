import { p as decodeKey } from './chunks/astro/server_DLAN69R1.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_B3CBj-dA.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/samueldiazpalmar/workspace/soynathafit/","cacheDir":"file:///Users/samueldiazpalmar/workspace/soynathafit/node_modules/.astro/","outDir":"file:///Users/samueldiazpalmar/workspace/soynathafit/dist/","srcDir":"file:///Users/samueldiazpalmar/workspace/soynathafit/src/","publicDir":"file:///Users/samueldiazpalmar/workspace/soynathafit/public/","buildClientDir":"file:///Users/samueldiazpalmar/workspace/soynathafit/dist/client/","buildServerDir":"file:///Users/samueldiazpalmar/workspace/soynathafit/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@5.17.3_@types+node@25.3.3_@vercel+functions@2.2.13_jiti@1.21.7_rollup@4.59.0_typescript@5.9.3_yaml@2.8.2/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/submit-application","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/submit-application\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"submit-application","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/submit-application.ts","pathname":"/api/submit-application","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/upload-payment-proof","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/upload-payment-proof\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"upload-payment-proof","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/upload-payment-proof.ts","pathname":"/api/upload-payment-proof","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.Bhaasphh.css"},{"type":"inline","content":"body{background:linear-gradient(140deg,#4f6fe8,#5b21b6,#7c3aed)!important;min-height:100vh!important}.form-input{width:100%;border:1px solid rgba(30,58,95,.2);border-radius:.75rem;padding:.625rem 1rem;color:#1e3a5f;background-color:#fff;font-size:.875rem;transition:all .15s;outline:none;-webkit-appearance:auto;-moz-appearance:auto;appearance:auto}.form-input:focus{border-color:#4f6fe8;box-shadow:0 0 0 3px #4f6fe826}.form-input.error{border-color:#ef4444}.label-text{display:block;font-size:.8125rem;font-weight:700;color:#1e3a5f}.err-msg{font-size:.75rem;color:#ef4444}.btn-primary{background-color:#e8601c;color:#fff;font-weight:900;font-size:.8125rem;text-transform:uppercase;letter-spacing:.05em;padding:.75rem 2rem;border-radius:9999px;transition:all .15s;cursor:pointer;border:none}.btn-primary:hover{background-color:#cf5218;transform:scale(1.02)}.btn-primary:disabled{opacity:.5;cursor:not-allowed;transform:none}.btn-outline{border:2px solid rgba(30,58,95,.25);color:#1e3a5f;font-weight:900;font-size:.8125rem;text-transform:uppercase;letter-spacing:.05em;padding:.625rem 1.5rem;border-radius:9999px;transition:all .15s;cursor:pointer;background:transparent}.btn-outline:hover{background-color:#1e3a5f0d}\n"}],"routeData":{"route":"/invitation-form","isIndex":true,"type":"page","pattern":"^\\/invitation-form\\/?$","segments":[[{"content":"invitation-form","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/invitation-form/index.astro","pathname":"/invitation-form","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.Bhaasphh.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/samueldiazpalmar/workspace/soynathafit/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/samueldiazpalmar/workspace/soynathafit/src/pages/invitation-form/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/api/submit-application@_@ts":"pages/api/submit-application.astro.mjs","\u0000@astro-page:src/pages/api/upload-payment-proof@_@ts":"pages/api/upload-payment-proof.astro.mjs","\u0000@astro-page:src/pages/invitation-form/index@_@astro":"pages/invitation-form.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/.pnpm/astro@5.17.3_@types+node@25.3.3_@vercel+functions@2.2.13_jiti@1.21.7_rollup@4.59.0_typescript@5.9.3_yaml@2.8.2/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_BQQARr0S.mjs","/Users/samueldiazpalmar/workspace/soynathafit/node_modules/.pnpm/astro@5.17.3_@types+node@25.3.3_@vercel+functions@2.2.13_jiti@1.21.7_rollup@4.59.0_typescript@5.9.3_yaml@2.8.2/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_PDwhBRN3.mjs","/Users/samueldiazpalmar/workspace/soynathafit/src/pages/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.27RRoXVF.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/samueldiazpalmar/workspace/soynathafit/src/pages/index.astro?astro&type=script&index=0&lang.ts","const e=document.getElementById(\"terms-modal\");document.getElementById(\"open-terms\")?.addEventListener(\"click\",()=>e.showModal());document.getElementById(\"close-terms\")?.addEventListener(\"click\",()=>e.close());document.getElementById(\"close-terms-btn\")?.addEventListener(\"click\",()=>e.close());e?.addEventListener(\"click\",t=>{t.target===e&&e.close()});"]],"assets":["/_astro/index.Bhaasphh.css","/about_us.png","/for_you.png","/for_you_2.png","/for_you_3.png","/for_you_4.png","/for_you_5.png","/how_works.png","/how_works_2.png","/how_works_3.png","/how_works_4.png"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"sLsxsPvr0oqMTNDPW3+pS2NpsjMogvLvrjJYvgVcqcw="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
