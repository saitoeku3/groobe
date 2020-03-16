import Axios from 'axios'
import { env } from '../constants/env'

export const axios = Axios.create({
  baseURL: `https://${env.DOMAIN}/api`
})
