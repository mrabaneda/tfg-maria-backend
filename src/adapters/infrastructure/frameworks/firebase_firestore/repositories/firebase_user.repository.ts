// --------------------------------
// Requirements
// --------------------------------

import { firestore } from 'firebase-admin';
import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/core/domain/entities/user.entity';
import { BaseUserRepository } from 'src/core/domain/ports/repositories/user_repository.abstract';
import { FirebaseUserModel } from '../models/firebase_user.model';
import { FirebaseUserFactory } from '../factory/firebase_user.factory';

// --------------------------------
// Helpers
// --------------------------------

@Injectable()
class FirebaseUserRepository implements BaseUserRepository {
  constructor() {}

  async getAll(): Promise<UserEntity[]> {
    const snapshot = await firestore().collection('users').get();
    return snapshot.docs.map((firebaseUser) =>
      FirebaseUserFactory.userModelToEntity(firebaseUser.data() as FirebaseUserModel),
    );
  }
}

// --------------------------------
// Public Interface
// --------------------------------

export default FirebaseUserRepository;
