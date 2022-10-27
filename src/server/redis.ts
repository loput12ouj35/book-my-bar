import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'

// polyfill. redis가 atob 쓰는데, node 17이하 버전에는 atob가 없음.
if (typeof btoa === 'undefined') {
  global.btoa = (b) => Buffer.from(b).toString('base64')
}

if (typeof atob === 'undefined') {
  global.atob = (a) => Buffer.from(a, 'base64').toString('binary')
}

export const redis = Redis.fromEnv()

// Create a new ratelimiter, that allows 5 requests per 5 seconds
export const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.fixedWindow(5, '5 s'),
})
