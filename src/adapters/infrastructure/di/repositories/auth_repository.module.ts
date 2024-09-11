// --------------------------------
// Requirements
// --------------------------------

import { Module } from '@nestjs/common';
import BaseAuthRepository from 'src/core/abstract/repositories/auth_repository.abstract';
import FirebaseAuthRepository from 'src/adapters/infrastructure/frameworks/firebase/repositories/firebase_auth.repository';

// --------------------------------
// Helpers
// --------------------------------

@Module({
    providers: [{ provide: BaseAuthRepository, useClass: FirebaseAuthRepository }],
    exports: [BaseAuthRepository],
})
class AuthRepositoryModule { }

// --------------------------------
// Public Interface
// --------------------------------

export { AuthRepositoryModule };