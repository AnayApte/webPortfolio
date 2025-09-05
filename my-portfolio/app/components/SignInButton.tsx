'use client'

import { useSession, signIn, signOut } from 'next-auth/react'
import { Button, Avatar } from '@mui/material'
import { Person, ExitToApp } from '@mui/icons-material'

export default function SignInButton() {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return <Button disabled size="small">Loading...</Button>
  }

  if (session) {
    return (
      <div className="flex items-center space-x-2">
        <Avatar
          src={session.user?.image || undefined}
          alt={session.user?.name || 'User'}
          sx={{ width: 32, height: 32 }}
        />
        <span className="text-sm hidden sm:inline">{session.user?.name}</span>
        <Button
          onClick={() => signOut()}
          variant="outlined"
          size="small"
          startIcon={<ExitToApp />}
          className="text-xs"
        >
          Sign Out
        </Button>
      </div>
    )
  }

  return (
    <Button
      onClick={() => signIn('google')}
      variant="contained"
      size="small"
      startIcon={<Person />}
      className="text-xs"
    >
      Sign In
    </Button>
  )
}
