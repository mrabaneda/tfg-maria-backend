// --------------------------------
// Requirements
// --------------------------------

import { Module } from '@nestjs/common';
import { BaseUserRepository } from 'src/core/domain/ports/repositories/user_repository.abstract';
import { FirebaseAuthUserRepository } from '../../frameworks/firebase_auth/repositories/firebase_auth_user.repository';

// --------------------------------
// Helpers
// --------------------------------

@Module({
  providers: [{ provide: BaseUserRepository, useClass: FirebaseAuthUserRepository }],
  exports: [BaseUserRepository],
})
class UserRepositoryModule {}

// --------------------------------
// Public Interface
// --------------------------------

export { UserRepositoryModule };
