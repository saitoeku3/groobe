const {
  PORT,
  NODE_ENV,
  DOMAIN_DEVELOPMENT,
  DOMAIN_PRODUCTION,
  DATABSE_URL,
  APPLE_CLIENT_ID,
  APPLE_TEAM_ID,
  APPLE_KEY_ID
} = process.env

module.exports = {
  env: {
    PORT: PORT ? Number(PORT) : 3000,
    IS_DEV: NODE_ENV !== 'production',
    DOMAIN: (NODE_ENV === 'production' ? DOMAIN_PRODUCTION : DOMAIN_DEVELOPMENT) || '',
    DATABSE_URL: DATABSE_URL || '',
    APPLE_CLIENT_ID: APPLE_CLIENT_ID || '',
    APPLE_KEY_ID: APPLE_KEY_ID || '',
    APPLE_TEAM_ID: APPLE_TEAM_ID || ''
  }
}
