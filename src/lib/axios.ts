import Axios from 'axios'
import { env } from '../constants/env'

const { DOMAIN, IS_DEV } = env

export const axios = Axios.create({
  baseURL: `http${IS_DEV ? '' : 's'}://${DOMAIN}/api`
})
