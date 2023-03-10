import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react'
import classNames from 'classnames'
import TopLevelNavItem from 'components/Header/TopLevelNavItem'
import Search from 'components/Search'
import { Database } from 'types/supabase'
import { Button } from 'ui'

interface Props {
  setShowLogin: (show: boolean) => void
  className?: string
}

export default function Header({ setShowLogin, className }: Props) {
  const supabase = useSupabaseClient<Database>()
  const user = useUser()

  return (
    <div
      className={classNames(
        className,
        'z-50 flex  h-14 items-center justify-between gap-12 bg-white/20 px-4 py-8 backdrop-blur-[1px] transition dark:backdrop-blur sm:px-6 lg:z-30 lg:px-8'
      )}
    >
      <Search />
      <div className="flex items-center md:gap-2 lg:gap-6">
        <nav className="hidden md:block">
          <ul role="list" className="flex items-center gap-2 lg:gap-4">
            <TopLevelNavItem href="#">About</TopLevelNavItem>
            <TopLevelNavItem href="#">Charts</TopLevelNavItem>
            <TopLevelNavItem href="/">Contribute</TopLevelNavItem>
            <TopLevelNavItem href="#">Docs</TopLevelNavItem>
          </ul>
        </nav>
        <div className="md:dark:bg-white/15 hidden md:block md:h-5 md:w-px md:bg-zinc-900/10" />
        {/* <div className="flex gap-4">
          <MobileSearch />
          <ModeToggle />
        </div> */}
        {user ? (
          <>
            {/* @ts-ignore */}
            <Button variant="danger" onClick={() => supabase.auth.signOut()}>
              Sign out
            </Button>
          </>
        ) : (
          <Button
            variant="primary"
            arrow="right"
            onClick={() => setShowLogin(true)}
          >
            Sign in
          </Button>
        )}
      </div>
    </div>
  )
}
