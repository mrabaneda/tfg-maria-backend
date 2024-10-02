// --------------------------------
// Requirements
// --------------------------------

import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { UID } from 'src/core/domain/value_objects/types';
import { AdminUserEntity } from 'src/core/domain/entities/admin_user.entity';
import { AdminUserCreateModel } from 'src/core/domain/models/admin_user_create.model';
import { BaseAdminUserRepository } from 'src/core/domain/ports/repositories/admin_user.repository.';
import { FirebaseAuthAdminUserFactory } from '../factory/firebase_auth_admin_user.factory';

// --------------------------------
// Helpers
// --------------------------------

@Injectable()
class FirebaseAuthAdminUserRepository implements BaseAdminUserRepository {
  constructor() {}

  async getOneOrFail(uid: UID): Promise<AdminUserEntity> {
    const firebaseAuthUser = await admin.auth().getUser(uid);
    return FirebaseAuthAdminUserFactory.firebaseAuthUserRecordToEntity(firebaseAuthUser);
  }

  async get(): Promise<AdminUserEntity[]> {
    const firebaseAuthUsers = await admin.auth().listUsers();
    // TODO: revisar
    return firebaseAuthUsers.users
      .map((firebaseUser) => FirebaseAuthAdminUserFactory.firebaseAuthUserRecordToEntity(firebaseUser))
      .filter((userEntity) => userEntity.isAdmin);
  }

  async create(createModel: AdminUserCreateModel): Promise<void> {
    const createRequest = FirebaseAuthAdminUserFactory.createAdminUserModelToCreateRequest(createModel);
    const auth = admin.auth();
    const userRecord = await auth.createUser(createRequest);
    await auth.setCustomUserClaims(userRecord.uid, { admin: true });
  }

  async delete(uid: UID): Promise<void> {
    await admin.auth().deleteUser(uid);
  }

  async verifyToken(token: string): Promise<UID> {
    const { uid } = await admin.auth().verifyIdToken(token);
    return uid;
  }
}

// --------------------------------
// Public Interface
// --------------------------------

export { FirebaseAuthAdminUserRepository };
