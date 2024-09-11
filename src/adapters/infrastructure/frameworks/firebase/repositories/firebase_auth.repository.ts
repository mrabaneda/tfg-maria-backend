// --------------------------------
// Requirements
// --------------------------------

import * as admin from 'firebase-admin';
import { Injectable } from '@nestjs/common';
import { UID } from 'src/core/value_objects/types';
import BaseAuthRepository from 'src/core/abstract/repositories/auth_repository.abstract';

// --------------------------------
// Helpers
// --------------------------------

@Injectable()
class FirebaseAuthRepository implements BaseAuthRepository {
    private app: admin.app.App;

    constructor() {
        this.app = admin.initializeApp({
            credential: admin.credential.cert({
                projectId: process.env.PROJECT_ID,
                clientEmail: process.env.CLIENT_EMAIL,
                privateKey: process.env.PRIVATE_KEY,
            }),
            databaseURL: process.env.FIREBASE_PROJECT_URL,
        }
        );
    }

    async verifyTokenId(token: string): Promise<UID> {
        const { uid } = await this.app.auth().verifyIdToken(token);
        return uid;
    }
}

// --------------------------------
// Public Interface
// --------------------------------

export default FirebaseAuthRepository;