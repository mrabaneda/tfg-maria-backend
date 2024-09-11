// --------------------------------
// Requirements
// --------------------------------

import { Module } from '@nestjs/common';
import { BaseUserRepository } from 'src/core/abstract/repositories/user_repository.abstract';
import FirebaseUserRepository from 'src/adapters/infrastructure/frameworks/firebase/repositories/firebase_user.repository';

// --------------------------------
// Helpers
// --------------------------------

@Module({
    providers: [{ provide: BaseUserRepository, useClass: FirebaseUserRepository }],
    exports: [BaseUserRepository],
})
class UserRepositoryModule { }

// --------------------------------
// Public Interface
// --------------------------------

export { UserRepositoryModule };