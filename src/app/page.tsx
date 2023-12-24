"use client"
import Image from 'next/image'
import Navbar from './components/navbar'
import { SessionProvider } from "next-auth/react"
import { signIn, useSession } from "next-auth/react"

export default function Home({
}) {
  return (
    <>

        <Navbar />
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
        </main>

    </>
  )
}
