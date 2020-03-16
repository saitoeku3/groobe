import AppleStrategy from '@nicokaiser/passport-apple'
import { resolve } from 'path'
import { readFileSync } from 'fs'
import { env } from '../../constants/env'
import { UserRepository } from '../../domains/user'
import { firestore } from '../../lib/firebase'

const { DOMAIN, APPLE_CLIENT_ID, APPLE_KEY_ID, APPLE_TEAM_ID } = env
const userRepository = new UserRepository(firestore)

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
    const user = await userRepository.find({ id: profile.id })
    if (!user) await userRepository.create({ profile, type: 'apple' })
    done(null, { ...profile, accessToken })
  }
)
