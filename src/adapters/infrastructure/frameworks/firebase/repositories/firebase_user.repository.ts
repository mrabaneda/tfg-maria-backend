// --------------------------------
// Requirements
// --------------------------------


import { firestore } from 'firebase-admin';
import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/core/entities/user.entity';
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

    async getAll(): Promise<UserEntity[]> {
        const snapshot = await firestore().collection('users').get();

        // TODO: remove before finish
        snapshot.docs.forEach(doc => {
            console.log(doc.data());
        });

        return [] as UserEntity[];
    }


}

// --------------------------------
// Public Interface
// --------------------------------

export default FirebaseUserRepository;