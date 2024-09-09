// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getCookie } from 'cookies-next';

export async function middleware(req: NextRequest) {

    console.log("Middlware")

    const token = getCookie('auth_token') as string | undefined;

    console.log(token)

    if (token) {
        try {
            const res = await fetch('https://mgscpz76-3000.brs.devtunnels.ms/session', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });

            if (res.ok) {
                const data = await res.json();
                if (data.session) {
                    // Session exists and is valid
                    return NextResponse.next(); // Allow the request to continue
                }
            }

            // Invalid session, redirect to login or an error page
            return NextResponse.redirect(new URL('/login', req.url));
        } catch (error) {
            console.error('Error fetching session:', error);
            return NextResponse.redirect(new URL('/login', req.url));
        }
    } else {
        // No token present, redirect to login
        return NextResponse.redirect(new URL('/login', req.url));
    }
}

// Define which paths the middleware should be applied to
export const config = {
    matcher: ['/admin/*'], // Apply middleware only to protected routes
};
