import AppleStrategy from '@nicokaiser/passport-apple'
import { resolve } from 'path'
import { readFileSync } from 'fs'
import { env } from '../../constants/env'

const { DOMAIN, APPLE_CLIENT_ID, APPLE_KEY_ID, APPLE_TEAM_ID } = env

export const appleStrategy = new AppleStrategy(
  {
    clientID: APPLE_CLIENT_ID,
    teamID: APPLE_TEAM_ID,
    callbackURL: `https://${DOMAIN}/sign-in-with-apple/callback`,
    scope: [],
    keyID: APPLE_KEY_ID,
    key: readFileSync(resolve('config', 'apple-auth-key.p8'))
  },
  async (accessToken, refreshToken, profile, done) => {
    done(null, { ...profile, accessToken })
  }
)
