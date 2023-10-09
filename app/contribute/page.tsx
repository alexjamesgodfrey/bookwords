import Upload from "@/components/Contribute/Upload"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { Toaster } from "react-hot-toast"

export default async function Contribute() {
  const supabase = createServerComponentClient({ cookies })

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    // This route can only be accessed by authenticated users.
    // Unauthenticated users will be redirected to the `/login` route.
    redirect("/?reason=unauthenticated")
  }

  return (
    <div>
      <Toaster />
      <Upload user={user} />
    </div>
  )
}
