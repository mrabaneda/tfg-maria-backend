// --------------------------------
// Requirements
// --------------------------------

import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { UserEntity } from 'src/core/domain/entities/user.entity';
import { UserCreateModel } from 'src/core/domain/models/user_create.model';
import { UserUpdateModel } from 'src/core/domain/models/user_update.model';
import { BaseUserRepository } from 'src/core/domain/ports/repositories/user.repository';
import { UID } from 'src/core/domain/value_objects/types';
import { FirestoreUserModelScheme } from '../models/firestore_user.model';
import { FirestoreUserFactory } from '../factory/firestore_user.factory';
import { UserNotFoundException } from 'src/core/exceptions/user_not_found.exception';

// --------------------------------
// Helpers
// --------------------------------

@Injectable()
class FirestoreUserRepository implements BaseUserRepository {
  async getOneOrFail(uid: UID): Promise<UserEntity> {
    const snapshot = await admin.firestore().collection(FirestoreUserModelScheme.collectionName).doc(uid).get();
    if (!snapshot.exists) throw new UserNotFoundException();
    return FirestoreUserFactory.documentDataToUserEntity(uid, snapshot.data()!);
  }

  async get(): Promise<UserEntity[]> {
    const { docs } = await admin.firestore().collection(FirestoreUserModelScheme.collectionName).get();
    return docs.map((doc) => FirestoreUserFactory.documentDataToUserEntity(doc.id, doc.data()!));
  }

  async create(createModel: UserCreateModel): Promise<void> {
    const firestoreUserModel = FirestoreUserFactory.createUserModelToFirestoreUserModel(createModel);
    await admin
      .firestore()
      .collection(FirestoreUserModelScheme.collectionName)
      .doc(createModel.uid)
      .set(firestoreUserModel);
  }

  async update(updateModel: UserUpdateModel): Promise<void> {
    const updateDocumentData = FirestoreUserFactory.updateUserModelToDocumentData(updateModel);
    await admin
      .firestore()
      .collection(FirestoreUserModelScheme.collectionName)
      .doc(updateModel.uid)
      .update(updateDocumentData);
  }

  async delete(uid: UID): Promise<void> {
    await admin.firestore().collection(FirestoreUserModelScheme.collectionName).doc(uid).delete();
  }
}

// --------------------------------
// Public Interface
// --------------------------------

export { FirestoreUserRepository };
