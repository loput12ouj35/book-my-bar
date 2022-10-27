import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'

export const redis = Redis.fromEnv()

// Create a new ratelimiter, that allows 5 requests per 5 seconds
export const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.fixedWindow(5, '5 s'),
})
