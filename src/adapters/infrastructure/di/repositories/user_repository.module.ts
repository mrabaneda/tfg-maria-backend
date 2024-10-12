// --------------------------------
// Requirements
// --------------------------------

import { Module } from '@nestjs/common';
import { BaseUserRepository } from 'src/core/domain/ports/repositories/user.repository';
import { FirestoreUserRepository } from '../../frameworks/firestore/repositories/firestore_user.repository';

// --------------------------------
// Helpers
// --------------------------------

@Module({
  providers: [{ provide: BaseUserRepository, useClass: FirestoreUserRepository }],
  exports: [BaseUserRepository],
})
class UserRepositoryModule {}

// --------------------------------
// Public Interface
// --------------------------------

export { UserRepositoryModule };
