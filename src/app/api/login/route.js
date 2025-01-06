import { NextResponse } from "next/server";

export async function POST() {
    const response = NextResponse.json({ message: "Você está logado!" });

    response.cookies.set(
        'loggedIn', 'true', {
            httpOnly: true,
            maxAge: 60 * 60 * 24,
            path: '/',
        }
    );

    return response;
}