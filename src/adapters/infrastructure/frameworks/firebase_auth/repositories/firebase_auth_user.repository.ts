// --------------------------------
// Requirements
// --------------------------------

import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { UserEntity } from 'src/core/domain/entities/user.entity';
import { UID } from 'src/core/domain/value_objects/types';
import { PreferencesTypeEnum } from 'src/core/domain/enum/preferences_type.enum';
import { UserCreateModel } from 'src/core/domain/models/user_create.model';
import { UserUpdateModel } from 'src/core/domain/models/user_update.model';
import { BaseUserRepository } from 'src/core/domain/ports/repositories/user_repository.abstract';
import { FirebaseAuthUserFactory } from '../factory/firebase_auth_user_factory';

// --------------------------------
// Helpers
// --------------------------------

@Injectable()
class FirebaseAuthUserRepository implements BaseUserRepository {
  constructor() {}

  async getUserOrFail(uid: UID): Promise<UserEntity> {
    const firebaseAuthUser = await admin.auth().getUser(uid);
    return FirebaseAuthUserFactory.firebaseAuthUserRecordToEntity(firebaseAuthUser);
  }

  async get(): Promise<UserEntity[]> {
    const firebaseAuthUsers = await admin.auth().listUsers();
    // TODO: revisar
    return firebaseAuthUsers.users
      .map((firebaseUser) => FirebaseAuthUserFactory.firebaseAuthUserRecordToEntity(firebaseUser))
      .filter((userEntity) => Object.values(PreferencesTypeEnum).includes(userEntity.preference!));
  }

  async create(createModel: UserCreateModel): Promise<void> {
    const createRequest = FirebaseAuthUserFactory.createUserModelToCreateRequest(createModel);
    const auth = admin.auth();
    const userRecord = await auth.createUser(createRequest);
    await auth.setCustomUserClaims(userRecord.uid, { preference: createModel.preference });
  }

  async update(updateModel: UserUpdateModel): Promise<UserEntity> {
    // TODO: implement
    throw new Error('Method not implemented.');
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

export { FirebaseAuthUserRepository };
