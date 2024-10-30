// --------------------------------
// Requirements
// --------------------------------

import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { DecodedAuthUserModel } from 'src/core/domain/models/decoded_auth_user.model';
import { BaseAuthService } from 'src/core/domain/ports/services/auth.service.';
import { FirebaseAuthFactory } from '../factory/firebase_auth.factory';
import { UID } from 'src/core/domain/value_objects/types';
import { AuthUserCreateModel } from 'src/core/domain/models/auth_user_create.model';

// --------------------------------
// Helpers
// --------------------------------

@Injectable()
class FirebaseAuthService implements BaseAuthService {
  async create(createModel: AuthUserCreateModel): Promise<UID> {
    const createRequest = FirebaseAuthFactory.authUserCreateModelToCreateRequest(createModel);
    const auth = admin.auth();
    const userRecord = await auth.createUser(createRequest);
    await auth.setCustomUserClaims(userRecord.uid, { admin: createModel.isAdmin });
    return userRecord.uid;
  }

  async delete(uid: UID): Promise<void> {
    await admin.auth().deleteUser(uid);
  }

  async verifyToken(token: string): Promise<DecodedAuthUserModel> {
    const decodedIdToken = await admin.auth().verifyIdToken(token);
    return FirebaseAuthFactory.decodedIdTokenToDecodedAuthModel(decodedIdToken);
  }
}

// --------------------------------
// Public Interface
// --------------------------------

export { FirebaseAuthService };
