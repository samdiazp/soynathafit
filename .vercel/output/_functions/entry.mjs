import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_C9ScMtKM.mjs';
import { manifest } from './manifest_BQQARr0S.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/submit-application.astro.mjs');
const _page2 = () => import('./pages/api/upload-payment-proof.astro.mjs');
const _page3 = () => import('./pages/invitation-form.astro.mjs');
const _page4 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.17.3_@types+node@25.3.3_@vercel+functions@2.2.13_jiti@1.21.7_rollup@4.59.0_typescript@5.9.3_yaml@2.8.2/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/submit-application.ts", _page1],
    ["src/pages/api/upload-payment-proof.ts", _page2],
    ["src/pages/invitation-form/index.astro", _page3],
    ["src/pages/index.astro", _page4]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "e615ddca-6d29-4684-8935-2ab215b89881",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
