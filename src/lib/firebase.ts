import * as admin from 'firebase-admin'
import { env } from '../constants/env'
import serviceAccount from '../../config/serviceAccount.json'

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
    databaseURL: env.DATABSE_URL
  })
}

export const firestore = admin.firestore()
