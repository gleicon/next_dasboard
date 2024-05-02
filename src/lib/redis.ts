import { Redis } from '@upstash/redis'

const redis = new Redis({
    url: 'https://us1-unbiased-monkfish-42100.upstash.io',
    token: process.env.REDIS_KEY!,
})

export default redis