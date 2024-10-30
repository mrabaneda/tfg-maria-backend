// --------------------------------
// Requirements
// --------------------------------

import { Module } from '@nestjs/common';
import { BaseAdminUserRepository } from 'src/core/domain/ports/repositories/admin_user.repository.';
import { FirestoreAdminUserRepository } from '../../frameworks/firestore/repositories/firestore_admin_user.repository';

// --------------------------------
// Helpers
// --------------------------------

@Module({
  providers: [{ provide: BaseAdminUserRepository, useClass: FirestoreAdminUserRepository }],
  exports: [BaseAdminUserRepository],
})
class AdminUserRepositoryModule {}

// --------------------------------
// Public Interface
// --------------------------------

export { AdminUserRepositoryModule };
