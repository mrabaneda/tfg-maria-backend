// --------------------------------
// Requirements
// --------------------------------

import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { AdminUserEntity } from 'src/core/domain/entities/admin_user.entity';
import { AdminUserCreateModel } from 'src/core/domain/models/admin_user_create.model';
import { BaseAdminUserRepository } from 'src/core/domain/ports/repositories/admin_user.repository.';
import { UID } from 'src/core/domain/value_objects/types';
import { FirestoreAdminUserModelScheme } from '../models/firestore_admin_user.model';
import { FirestoreAdminFactory } from '../factory/firestore_admin.factory';
import { AdminUserNotFoundException } from 'src/core/exceptions/admin_user_not_found.exception';

// --------------------------------
// Helpers
// --------------------------------

@Injectable()
class FirestoreAdminUserRepository implements BaseAdminUserRepository {
  async getOneOrFail(uid: UID): Promise<AdminUserEntity> {
    const snapshot = await admin.firestore().collection(FirestoreAdminUserModelScheme.collectionName).doc(uid).get();
    if (!snapshot.exists) throw new AdminUserNotFoundException();
    return FirestoreAdminFactory.documentDataToAdminUserEntity(uid, snapshot.data()!);
  }

  async get(): Promise<AdminUserEntity[]> {
    const { docs } = await admin.firestore().collection(FirestoreAdminUserModelScheme.collectionName).get();
    return docs.map((doc) => FirestoreAdminFactory.documentDataToAdminUserEntity(doc.id, doc.data()!));
  }

  async create(createModel: AdminUserCreateModel): Promise<void> {
    const firestoreAdminModel = FirestoreAdminFactory.adminUserCreateModelToFirestoreAdminModel(createModel);
    await admin
      .firestore()
      .collection(FirestoreAdminUserModelScheme.collectionName)
      .doc(createModel.uid)
      .set(firestoreAdminModel);
  }

  async delete(uid: UID): Promise<void> {
    await admin.firestore().collection(FirestoreAdminUserModelScheme.collectionName).doc(uid).delete();
  }
}

// --------------------------------
// Public Interface
// --------------------------------

export { FirestoreAdminUserRepository };
