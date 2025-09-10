
/// <reference types="astro/client" />

declare module '*.astro' {
    import type { AstroComponentFactory } from 'astro/runtime/server/index.js';
    const Component: AstroComponentFactory;
    export default Component;
}
