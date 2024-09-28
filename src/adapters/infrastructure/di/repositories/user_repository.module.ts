// --------------------------------
// Requirements
// --------------------------------

import { Module } from '@nestjs/common';
import { BaseUserRepository } from 'src/core/domain/ports/repositories/user_repository.abstract';
import FirebaseUserRepository from '../../frameworks/firebase_firestore/repositories/firebase_user.repository';

// --------------------------------
// Helpers
// --------------------------------

@Module({
  providers: [{ provide: BaseUserRepository, useClass: FirebaseUserRepository }],
  exports: [BaseUserRepository],
})
class UserRepositoryModule {}

// --------------------------------
// Public Interface
// --------------------------------

export { UserRepositoryModule };
