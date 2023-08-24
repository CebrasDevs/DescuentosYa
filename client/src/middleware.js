import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(req) {
    const jwt = req.cookies.get('accessTrue');

    if (jwt === undefined) {
        if(req.nextUrl.pathname === '/login'){
            return NextResponse.next();
        }
        return NextResponse.redirect(new URL('/', req.url));
    }
    try {
        const { payload } = await jwtVerify(jwt.value, new TextEncoder().encode(process.env.JWT_SECRET));
        if(req.nextUrl.pathname === '/admin' && payload.role !== 'ADMIN'){
            return NextResponse.redirect(new URL('/', req.url));
        }
        if(req.nextUrl.pathname === '/create' && payload.role !== 'COMPANY'){
            return NextResponse.redirect(new URL('/', req.url));
        }
        if(req.nextUrl.pathname === '/shoppingcart' && payload.role !== 'MEMBER'){
            return NextResponse.redirect(new URL('/', req.url));
        }
        if(req.nextUrl.pathname === '/login'){
            return NextResponse.redirect(new URL('/', req.url));
        }
        return NextResponse.next();
    } catch (error) {
        console.error(error);
        return NextResponse.redirect(new URL('/', req.url));
    }
}

export const config = {
    matcher: ['/admin/:path*', '/profile/:path*', '/create', '/login', '/shoppingcart']
}