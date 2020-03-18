import { NextComponentType, NextPageContext } from 'next'
import { AppContext } from 'next/app'
import { IncomingMessage } from 'http'
import { Profile, CurrentUser } from '../src/domains/user'

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
    currentUser?: CurrentUser
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Component: NextComponentType<NextPageContext, {}, any>
  }
}
