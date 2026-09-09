import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    // Look for the HttpOnly cookie we named 'token' in the Node.js backend
    const token = request.cookies.get('token');
    
    // Check if the user is trying to access ANY route inside /dashboard
    if (request.nextUrl.pathname.startsWith('/dashboard')) {
        
        // If there is no token, redirect them to the login page immediately
        if (!token) {
            const loginUrl = new URL('/login', request.url);
            return NextResponse.redirect(loginUrl);
        }
    }
    
    // Allow the request to continue if they have a token or are on a public page
    return NextResponse.next();
}

// Optional: Optimize performance by only running middleware on specific paths
export const config = {
    matcher: ['/dashboard/:path*'],
};