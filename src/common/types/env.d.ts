/// <reference types="node" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly REDIS_URL: string
    readonly NEXT_PUBLIC_AUTH0_CLIENT_ID: string
    readonly NEXT_PUBLIC_AUTH0_DOMAIN: string
    readonly NEXT_PUBLIC_AUTH0_ADMIN_EMAIL: string
  }
}
