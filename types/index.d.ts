import { NextComponentType, NextPageContext } from 'next'
import { AppContext } from 'next/app'
import { IncomingMessage } from 'http'
import { Profile, CurrentUser } from '../src/domains/user'

declare module 'next' {
  export type SessionNextPage<P = {}, IP = P> = NextComponentType<
    NextPageContext,
    IP,
    P & { currentUser: CurrentUser }
  >
}

declare module 'next/app' {
  interface SessionAppContext extends AppContext {
    ctx: {
      req: IncomingMessage & {
        session?: {
          passport: {
            user?: Profile & { accessToken: string }
          }
        }
      }
    } & AppContext['ctx']
    Component: NextComponentType<NextPageContext, {}, { currentUser?: CurrentUser }>
  }
}
