import express, { Request, Response, NextFunction } from 'express'
import session from 'express-session'
import http from 'http'
import next from 'next'
import passport from 'passport'
import uid from 'uid-safe'
import { appleStrategy } from './strategies/apple'
import { env } from '../constants/env'
import { Profile, UserRepository } from '../domains/user'
import { firestore } from '../lib/firebase'

const { PORT, IS_DEV } = env
const app = next({ dev: IS_DEV })
const handle = app.getRequestHandler()
const userRepository = new UserRepository(firestore)

const sessionConfig = {
  secret: uid.sync(18),
  cookie: {
    maxAge: 86400 * 1000 // 24 hours in milliseconds
  },
  resave: false,
  saveUninitialized: true
}

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
          const user = await userRepository.find({ id: profile.id })
          if (!user) await userRepository.create({ profile })
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
