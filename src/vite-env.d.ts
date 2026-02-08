/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PIPILOT_API_KEY: string
  readonly VITE_PIPILOT_DATABASE_ID: string
  // add more env variables as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}