/// <reference types="node" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly UPSTASH_REDIS_REST_URL: string
    readonly UPSTASH_REDIS_REST_TOKEN: string
    readonly NEXT_PUBLIC_AUTH0_CLIENT_ID: string
    readonly NEXT_PUBLIC_AUTH0_DOMAIN: string
  }
}
