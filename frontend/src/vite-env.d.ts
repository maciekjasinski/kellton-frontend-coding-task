/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnv {
  readonly VITE_REBRICKABLE_API_KEY: string;
  readonly VITE_HARRY_POTTER_THEME_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
