import { SpotifyProfile } from '../src/domains/user/model'

declare module 'passport-spotify' {
  type Options = {
    clientID: string
    clientSecret: string
    callbackURL: string
  }

  type Verify = (
    accessToken: string,
    refreshToken: string,
    expiresIn: unknown,
    profile: SpotifyProfile,
    done: Function
  ) => void

  export class Strategy {
    constructor(options: Options, verify: Verify)

    authenticate(
      req: IncomingMessage,
      options: { scope: string[]; showDialog: boolean; failureRedirect: string }
    ): void
  }
}
