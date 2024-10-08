import Butterfly from "@/components/Butterfly"
import CreateAccountToast from "@/components/Common/CreateAccountToast"
import PrivateUtility from "@/components/Common/PrivateUtility"
import Header from "@/components/Header"
import Docs from "@/components/Main/DocsButton"
import FindABook from "@/components/Main/FindABook"
// import { cookies } from "next/headers"
import Link from "next/link"
import { Toaster } from "react-hot-toast"

// export const dynamic = "force-dynamic"

const resources = [
  {
    title: "readers submit digital books",
    subtitle:
      "generous readers submit .epub files. our algorithms then analyze the file.",
    url: "https://youtube.com/playlist?list=PL5S4mPUpp4OtMhpnp93EFSo42iQ40XjbF",
    icon: "M7 4V20M17 4V20M3 8H7M17 8H21M3 12H21M3 16H7M17 16H21M4 20H20C20.5523 20 21 19.5523 21 19V5C21 4.44772 20.5523 4 20 4H4C3.44772 4 3 4.44772 3 5V19C3 19.5523 3.44772 20 4 20Z",
  },
  {
    title: "data is published to our website",
    subtitle:
      "all data analyzed is made available to the public via a page on our website, which ranks in search engines.",
    url: "https://bookwords.org",
    icon: "M12 6.25278V19.2528M12 6.25278C10.8321 5.47686 9.24649 5 7.5 5C5.75351 5 4.16789 5.47686 3 6.25278V19.2528C4.16789 18.4769 5.75351 18 7.5 18C9.24649 18 10.8321 18.4769 12 19.2528M12 6.25278C13.1679 5.47686 14.7535 5 16.5 5C18.2465 5 19.8321 5.47686 21 6.25278V19.2528C19.8321 18.4769 18.2465 18 16.5 18C14.7535 18 13.1679 18.4769 12 19.2528",
  },
  {
    title: "developers build apps with our api",
    subtitle:
      "developers power their book-related apps with data from our, which is available for free.",
    url: "https://bookwords.org",
    icon: "M10 20L14 4M18 8L22 12L18 16M6 16L2 12L6 8",
  },
]

const examples = [
  { type: "Client Components", src: "app/_examples/client-component/page.tsx" },
  { type: "Server Components", src: "app/_examples/server-component/page.tsx" },
  { type: "Server Actions", src: "app/_examples/server-action/page.tsx" },
  { type: "Route Handlers", src: "app/_examples/route-handler.ts" },
]

export default async function Index() {
  // const supabase = createClient(
  //   process.env.NEXT_PUBLIC_SUPABASE_URL!,
  //   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  // )
  // const {
  //   data: { user },
  // } = await supabase.auth.getUser()
  const user = null

  return (
    <div className="w-full flex flex-col items-center">
      <Toaster />
      <CreateAccountToast />
      <Header user={user} />

      <div className="flex">
        <div className="w-1/2">{/* text and buttons will go here*/}</div>
      </div>

      <div className="animate-in flex flex-col gap-14 opacity-0 px-3 pt-16 lg:pt-24 text-foreground">
        <div className="flex justify-center items-center">
          <div className="flex flex-col items-center mb-4 lg:mb-12">
            <div className="flex gap-6 justify-center items-center">
              <Link href="https://privateutility.org" target="_blank">
                <span className="text-2xl font-bold !leading-tight text-center">
                  <PrivateUtility />
                </span>
              </Link>
              <span className="border-l rotate-45 h-6" />
              <Link href="https://privateutility.org" target="_blank">
                <span className="text-2xl font-bold !leading-tight text-center">
                  bookwords
                </span>
              </Link>
            </div>
            <h1 className="sr-only">Supabase and Next.js Starter Template</h1>
            <p className="text-3xl lg:text-4xl font-bold !leading-tight mx-auto max-w-xl text-center my-12 px-2">
              introducing the world's first <strong>word count</strong> api
            </p>

            <div className="flex w-full justify-around">
              <div className="cursor-pointer bg-foreground py-3 px-6 rounded-lg font-mono text-sm text-background">
                <FindABook />
              </div>
              <div className="cursor-pointer bg-foreground py-3 px-6 rounded-lg font-mono text-sm text-background">
                <Docs />
              </div>
            </div>
          </div>
          <div className="hidden md:flex">
            <Butterfly />
          </div>
        </div>

        <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />

        <div className="flex flex-col gap-8 text-foreground">
          <h2 className="text-lg font-bold text-center">how it works</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {resources.map(({ title, subtitle, url, icon }) => (
              <a
                key={title}
                className="relative flex flex-col group rounded-lg border p-6 hover:border-foreground"
                href={url}
                target="_blank"
                rel="noreferrer"
              >
                <h3 className="font-bold mb-2  min-h-[40px] lg:min-h-[60px]">
                  {title}
                </h3>
                <div className="flex flex-col grow gap-4 justify-between">
                  <p className="text-sm opacity-70">{subtitle}</p>
                  <div className="flex justify-between items-center">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="opacity-80 group-hover:opacity-100"
                    >
                      <path
                        d={icon}
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-2 h-4 w-4 opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* <div className="flex flex-col gap-8 text-foreground">
          <div className="grid gap-2 justify-center mx-auto text-center">
            <h2 className="text-lg font-bold text-center">Examples</h2>
            <p className="text-sm">
              Look in the <code>_examples</code> folder to see how to create a
              Supabase client in all the different contexts.
            </p>
          </div>
          <div className="w-full justify-center border rounded-lg overflow-hidden">
            {examples.map(({ type, src }) => (
              <div
                key={type}
                className="w-full grid grid-cols-3 border-b last:border-b-0 text-sm"
              >
                <div className="flex items-center font-bold p-4 min-h-12 w-full">
                  {type}
                </div>
                <div className="col-span-2 border-l p-4 flex items-center">
                  <code className="text-sm whitespace-pre-wrap">{src}</code>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        <div className="flex justify-center text-center text-xs my-10">
          <p>
            powered by{" "}
            <Link
              href="https://privateutility.org"
              target="_blank"
              className="font-bold"
            >
              <PrivateUtility />
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
