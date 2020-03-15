type Env = {
  PORT: number
  IS_DEV: boolean
  DOMAIN: string
  DATABSE_URL: string
  APPLE_CLIENT_ID: string
  APPLE_TEAM_ID: string
  APPLE_KEY_ID: string
}

export const env: Env = {
  PORT: process.env.PORT ? Number(process.env.PORT) : 9000,
  IS_DEV: process.env.IS_DEV !== 'false',
  DOMAIN:
    (process.env.IS_DEV !== 'false'
      ? process.env.DOMAIN_DEVELOPMENT
      : process.env.DOMAIN_PRODUCTION) || '',
  DATABSE_URL: process.env.DATABSE_URL || '',
  APPLE_CLIENT_ID: process.env.APPLE_CLIENT_ID || '',
  APPLE_KEY_ID: process.env.APPLE_KEY_ID || '',
  APPLE_TEAM_ID: process.env.APPLE_TEAM_ID || ''
}
