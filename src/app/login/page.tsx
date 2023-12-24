"use client"
import { signIn, useSession } from "next-auth/react"
export default function User() {
    const { data: session } = useSession();
    if (session) {
        return (
            <>
                <button className="btn btn-primary">
                    Logout
                </button>
                <p>{session?.user?.image}</p>
            </>
        )
    } else {
        return (
            <>
                <button onClick={() => signIn()} className="btn btn-primary">
                    Login
                </button>
            </>
        )

    }
}