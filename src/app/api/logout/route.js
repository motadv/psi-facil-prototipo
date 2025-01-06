import { NextResponse } from "next/server";

export async function POST() {
    const response = NextResponse.json({ message: "Você foi deslogado!" });

    response.cookies.set(
        'loggedIn', 'false', {
            httpOnly: true,
            expires: new Date(0),
            path: '/',
        }
    );

    return response;
}