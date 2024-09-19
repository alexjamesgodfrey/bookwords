export default function WelcomeEmail() {
  return (
    <div className="flex flex-col items-center w-full h-screen prose">
      <div className="mt-4 shadow-2xl border-spacing-0 pt-8 px-8 pb-4 border-gray-100 border rounded-xl bg-white">
        <h1 className="text-center text-xl font-bold mb-4">
          Welcome to 121Health
        </h1>

        <p className="mb-4">
          Hello and thank you for joining us at 121Health! We are thrilled to
          have you onboard.
        </p>

        <p className="mb-4">
          With advanced AI technology and algorithms, we analyze over 100 Apple
          Health metrics from nutrition to sleep to bloodwork to provide
          actionable insights tailored to your health data, enabling you to
          improve your health faster than every before. Discover patterns,
          receive recommendations, and take control of your health.
        </p>

        <p className="mb-4">
          Have any questions?{" "}
          <span className="font-bold">Simply reply to this email</span> and one
          of our health experts will get back to you.
        </p>

        <p className="mb-4">
          Otherwise,{" "}
          <a
            href="https://www.121health.com"
            className="text-blue-500 hover:underline"
          >
            jump into the app
          </a>{" "}
          to receive your first set of insights!
        </p>

        <hr className="my-3" />

        <div className="text-sm flex w-full justify-around">
          <a
            href="https://www.121health.com"
            className="text-gray-500 hover:underline"
          >
            plus
          </a>
          <a
            href="https://www.121health.com/unsubscribe"
            className="text-gray-500 hover:underline"
          >
            unsubscribe
          </a>
          <a
            href="https://www.121health.com/about"
            className="text-gray-500 hover:underline"
          >
            about
          </a>
        </div>
      </div>
    </div>
  )
}
