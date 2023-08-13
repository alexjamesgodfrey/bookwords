"use client"

import { Dialog, Transition } from "@headlessui/react"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { Auth } from "@supabase/auth-ui-react"
import { ThemeSupa } from "@supabase/auth-ui-shared"
import { Fragment } from "react"

interface Props {
  show: boolean
  setShow: (show: boolean) => void
}

export default function AuthPopup({ show, setShow }: Props) {
  const supabase = createClientComponentClient()

  return (
    <>
      <Transition appear show={show} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={() => setShow(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="mx-auto w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 pb-3 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-center text-lg font-medium leading-6 text-gray-900"
                  >
                    Become a Bookwords contributor
                  </Dialog.Title>
                  <div className="my-2">
                    <p className="text-sm text-gray-500 text-center">
                      Login to access our API and contribute your ebooks for
                      Bookwords analysis.
                    </p>
                  </div>
                  <div className="mx-auto w-64 pt-1">
                    <Auth
                      supabaseClient={supabase}
                      appearance={{ theme: ThemeSupa }}
                      providers={["google"]}
                      onlyThirdPartyProviders
                      redirectTo={`${process.env.NEXT_PUBLIC_BASE_URL}/auth/callback`}
                    />
                  </div>
                  <p
                    className="cursor-pointer text-center text-sm text-gray-500 underline"
                    onClick={() => setShow(false)}
                  >
                    No thanks
                  </p>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
