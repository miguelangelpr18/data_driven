import { initializeApp, getApps, cert, ServiceAccount } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

// Firebase Admin configuration
const firebaseConfig: ServiceAccount = {
  projectId: process.env.FIREBASE_PROJECT_ID!,
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL!,
  privateKey: (process.env.FIREBASE_PRIVATE_KEY ?? '').replace(/\\n/g, '\n'),
};

// Initialize Firebase Admin app (idempotent)
const app = getApps().length === 0 
  ? initializeApp({
      credential: cert(firebaseConfig),
    })
  : getApps()[0];

// Export Firestore admin instance
export const adb = getFirestore(app);

// Export the app instance
export default app;
