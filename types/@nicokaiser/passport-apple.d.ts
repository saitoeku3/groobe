import { AppleProfile } from '../../src/domains/user'

declare module '@nicokaiser/passport-apple' {
  import { IncomingMessage } from 'http'

  type Options = {
    clientID: string
    teamID: string
    callbackURL: string
    scope: string[]
    keyID: string
    key: Buffer
  }

  type Verify = (
    accessToken: string,
    refreshToken: string,
    profile: AppleProfile,
    done: Function
  ) => void

  export default class AppleStrategy {
    constructor(options: Options, verify: Verify)

    authenticate(req: IncomingMessage, options: object): void
  }
}
