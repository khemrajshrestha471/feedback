'use client'

import { SessionProvider } from "next-auth/react"
export default function AuthProvider({
  children,
}: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
} 

// 3:14:30
// send email and check for otp in the email