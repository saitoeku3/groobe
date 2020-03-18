import React, { useContext, createContext, useState } from 'react'
import { CurrentUser } from '../domains/user'

const CurrentUserContext = createContext<CurrentUser | undefined>(undefined)

export const CurrentUserProvider: React.FC<{ currentUser?: CurrentUser }> = ({
  children,
  currentUser
}) => {
  const [user] = useState<CurrentUser | undefined>(currentUser)
  return <CurrentUserContext.Provider value={user}>{children}</CurrentUserContext.Provider>
}

export const useCurrentUser = () => {
  return useContext(CurrentUserContext)
}
