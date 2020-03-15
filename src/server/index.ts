import AppleStrategy from '@nicokaiser/passport-apple'
import express, { Request, Response, NextFunction } from 'express'
import session from 'express-session'
import { readFileSync } from 'fs'
import http from 'http'
import next from 'next'
import passport from 'passport'
import { resolve } from 'path'
import uid from 'uid-safe'
import { env } from '../constants/env'
import { Profile, UserService } from '../domains/user'
import { firestore } from '../lib/firebase'

const { PORT, IS_DEV, DOMAIN, APPLE_CLIENT_ID, APPLE_KEY_ID, APPLE_TEAM_ID } = env
const app = next({ dev: IS_DEV })
const handle = app.getRequestHandler()
const userService = new UserService(firestore)

const sessionConfig = {
  secret: uid.sync(18),
  cookie: {
    maxAge: 86400 * 1000 // 24 hours in milliseconds
  },
  resave: false,
  saveUninitialized: true
}

const appleStrategy = new AppleStrategy(
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

app.prepare().then(() => {
  const server = express()
  server.use(session(sessionConfig))

  passport.serializeUser((user, done) => done(null, user))
  passport.deserializeUser((user, done) => done(null, user))
  passport.use(appleStrategy)

  server.use(passport.initialize())
  server.use(passport.session())

  server.get('/sign-in-with-apple', passport.authenticate('apple'))
  server.post(
    '/sign-in-with-apple/callback',
    express.urlencoded({ extended: true }),
    (req: Request, res: Response, next: NextFunction) => {
      passport.authenticate('apple', (_, profile: Profile) => {
        req.logIn(profile, async () => {
          const exists = await userService.exists({ id: profile.id })
          if (!exists) await userService.create({ profile })
          res.redirect('/')
        })
      })(req, res, next)
    }
  )

  server.get('*', (req: Request, res: Response) => handle(req, res))

  http.createServer(server).listen(PORT, () => {
    console.log(`[ info ]  listening on http://localhost:${PORT}`)
  })
})
