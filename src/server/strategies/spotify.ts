import { Strategy } from 'passport-spotify'
import { env } from '../../constants/env'
import { UserRepository } from '../../domains/user'
import { firestore } from '../../lib/firebase'

const { DOMAIN, IS_DEV, SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } = env
const userRepository = new UserRepository(firestore)

export const spotifyStrategy = new Strategy(
  {
    clientID: SPOTIFY_CLIENT_ID,
    clientSecret: SPOTIFY_CLIENT_SECRET,
    callbackURL: `http${IS_DEV ? '' : 's'}://${DOMAIN}/sign-in-with-spotify/callback`
  },
  async (accessToken, refreshToken, expiresIn, profile, done) => {
    const user = await userRepository.find({ id: profile.id })
    if (!user) await userRepository.create({ profile, type: 'spotify' })
    done(null, { ...profile, accessToken })
  }
)
