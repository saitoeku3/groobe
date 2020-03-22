type Env = {
  PORT: number
  IS_DEV: boolean
  DOMAIN: string
  DATABSE_URL: string
  FIREBASE_CONFIG: string
  APPLE_CLIENT_ID: string
  APPLE_TEAM_ID: string
  APPLE_KEY_ID: string
  SPOTIFY_CLIENT_ID: string
  SPOTIFY_CLIENT_SECRET: string
}

export const env: Env = {
  PORT: process.env.PORT ? Number(process.env.PORT) : 9000,
  IS_DEV: process.env.NODE_ENV !== 'production',
  DOMAIN:
    (process.env.NODE_ENV !== 'production'
      ? process.env.DOMAIN_DEVELOPMENT
      : process.env.DOMAIN_PRODUCTION) || '',
  DATABSE_URL: process.env.DATABSE_URL || '',
  FIREBASE_CONFIG: process.env.FIREBASE_CONFIG || '',
  APPLE_CLIENT_ID: process.env.APPLE_CLIENT_ID || '',
  APPLE_KEY_ID: process.env.APPLE_KEY_ID || '',
  APPLE_TEAM_ID: process.env.APPLE_TEAM_ID || '',
  SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID || '',
  SPOTIFY_CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET || ''
}
