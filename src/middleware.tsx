import { NextRequest, NextResponse } from "next/server"
import { analytics } from '@/utils/analytics'

export default async function middleware(req: NextRequest) {
    if (req.nextUrl.pathname === '/') {
        //track
        try {
            analytics.track("pageview", {
                page: req.nextUrl.pathname,
                country: req.geo?.country,
                referrer: req.referrer,
                pageLoadTime: 0,
            })
        } catch (error) {
            //fail silently
            console.error(error)
        }
        console.log('TRACK!')
    }
    return NextResponse.next()
}

export const matcher = {
    matcher: ['/'],
}