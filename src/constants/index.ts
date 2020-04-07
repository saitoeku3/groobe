import { env } from '~/constants/env'

const { DOMAIN, IS_DEV } = env

export const baseURL = `http${IS_DEV ? '' : 's'}://${DOMAIN}`
