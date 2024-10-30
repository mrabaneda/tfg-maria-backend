// --------------------------------
// Requirements
// --------------------------------

import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { LoginEntity } from 'src/core/domain/entities/login.entity';
import { BaseLoginRepository } from 'src/core/domain/ports/repositories/login.repository';
import { UID } from 'src/core/domain/value_objects/types';
import { FirestoreLoginModelScheme } from '../models/firestore_login.model';
import { LoginNotFoundException } from 'src/core/exceptions/login_not_found.exception';
import { FirestoreLoginFactory } from '../factory/firestore_login.factory';

// --------------------------------
// Helpers
// --------------------------------

@Injectable()
class FirestoreLoginRepository implements BaseLoginRepository {
  async getOneOrFail(uid: UID): Promise<LoginEntity> {
    const snapshot = await admin.firestore().collection(FirestoreLoginModelScheme.collectionName).doc(uid).get();
    if (!snapshot.exists) throw new LoginNotFoundException();
    return FirestoreLoginFactory.documentDataToLoginEntity(uid, snapshot.data()!);
  }

  async get(): Promise<LoginEntity[]> {
    const { docs } = await admin.firestore().collection(FirestoreLoginModelScheme.collectionName).get();
    return docs.map((doc) => FirestoreLoginFactory.documentDataToLoginEntity(doc.id, doc.data()!));
  }

  async create(loginEntity: LoginEntity): Promise<void> {
    const firestoreLoginModel = FirestoreLoginFactory.loginEntityToModel(loginEntity);
    await admin
      .firestore()
      .collection(FirestoreLoginModelScheme.collectionName)
      .doc(loginEntity.uid)
      .set(firestoreLoginModel);
  }

  async delete(uid: UID): Promise<void> {
    await admin.firestore().collection(FirestoreLoginModelScheme.collectionName).doc(uid).delete();
  }
}

// --------------------------------
// Public Interface
// --------------------------------

export { FirestoreLoginRepository };
