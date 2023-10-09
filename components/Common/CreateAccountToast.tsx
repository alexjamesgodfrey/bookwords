"use client"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect } from "react"
import { Toaster, toast } from "react-hot-toast"

export default function CreateAccountToast() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const reason = searchParams.get("reason")

  useEffect(() => {
    if (reason === "unauthenticated") {
      toast.error("please sign in before contributing")
      router.push("/")
    }
  }, [searchParams])

  return <Toaster />
}
