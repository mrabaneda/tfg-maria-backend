// --------------------------------
// Requirements
// --------------------------------

import { Module } from '@nestjs/common';
import { BaseLoginRepository } from 'src/core/domain/ports/repositories/login.repository';
import { FirestoreLoginRepository } from '../../frameworks/firestore/repositories/firestore_login.repository';

// --------------------------------
// Helpers
// --------------------------------

@Module({
  providers: [{ provide: BaseLoginRepository, useClass: FirestoreLoginRepository }],
  exports: [BaseLoginRepository],
})
class LoginRepositoryModule {}

// --------------------------------
// Public Interface
// --------------------------------

export { LoginRepositoryModule };
