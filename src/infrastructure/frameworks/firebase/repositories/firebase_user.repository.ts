// --------------------------------
// Requirements
// --------------------------------


import { Injectable } from '@nestjs/common';
import { User } from 'src/core/entities/user.entity';
import { firestore } from 'firebase-admin';
import { FirebaseUserModel } from '../models/firebase_user.model';
import { FirebaseUserFactory } from '../factory/firebase_user.factory';
import { BaseUserRepository } from 'src/core/abstract/repositories/user_repository.abstract';

// --------------------------------
// Helpers
// --------------------------------

@Injectable()
class FirebaseUserRepository implements BaseUserRepository {
    private firebaseUserFactory: FirebaseUserFactory;

    constructor() {
        this.firebaseUserFactory = new FirebaseUserFactory();
    }

    async getAll(): Promise<User[]> {
        const snapshot = await firestore().collection('users').get();
        // TODO: remove before finish
        // snapshot.docs.forEach(doc => {
        //     console.log(doc.data());
        // });
        return snapshot.docs.map(doc => this.firebaseUserFactory.userModelToEntity(doc.data()));
    }


}

// --------------------------------
// Public Interface
// --------------------------------

export default FirebaseUserRepository;