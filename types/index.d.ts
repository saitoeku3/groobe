import { NextComponentType, NextPageContext } from 'next'
import { AppContext } from 'next/app'
import { IncomingMessage } from 'http'
import { Profile, CurrentUser } from '~/domains/user'

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
    Component: NextComponentType<NextPageContext, {}, unknown>
  }

  // https://qiita.com/Takepepe/items/56acedaf94cb0d0c388f
  type Override<T extends U, U> = Omit<T, keyof U> & U
  type AppPageProps = Override<AppProps<NextPageContext>, { currentUser: CurrentUser }>
}

declare module 'next' {
  export type GetServerSideSessionProps = (context: {
    req: IncomingMessage & {
      session?: {
        passport: {
          user?: Profile & { accessToken: string }
        }
      }
    }
    res: ServerResponse
    params?: ParsedUrlQuery
    query: ParsedUrlQuery
    preview?: boolean
    previewData?: unknown
  }) => Promise<{ [key: string]: unknown }>
}
