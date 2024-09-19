import Upload from "@/components/Contribute/Upload"
// import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { Toaster } from "react-hot-toast"

export default async function Contribute() {
  // const supabase = createServerComponentClient({ cookies })

  const user = null

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
