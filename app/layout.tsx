import Script from "next/script"
import "./globals.css"

export const metadata = {
  title: "bookwords.org",
  description: "the world's first word count api",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Script src="https://www.googletagmanager.com/gtag/js?id=P3ZT0WM0PN" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'P3ZT0WM0PN');
        `}
      </Script>
      <body>
        <main className="min-h-screen flex px:4 sm:px-6 lg:px-8 flex-col items-center">
          {children}
        </main>
      </body>
    </html>
  )
}
