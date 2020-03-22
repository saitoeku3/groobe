import * as admin from 'firebase-admin'
import { env } from '../constants/env'

const { DATABSE_URL, FIREBASE_CONFIG } = env

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(JSON.parse(FIREBASE_CONFIG) as admin.ServiceAccount),
    databaseURL: DATABSE_URL
  })
}

export const firestore = admin.firestore()
