// --------------------------------
// Requirements
// --------------------------------

import { Module } from '@nestjs/common';
import { BaseAdminUserRepository } from 'src/core/domain/ports/repositories/admin_user.repository.';
import { FirebaseAuthAdminUserRepository } from '../../frameworks/firebase_auth/repositories/firebase_auth_admin_user.repository';

// --------------------------------
// Helpers
// --------------------------------

@Module({
  providers: [{ provide: BaseAdminUserRepository, useClass: FirebaseAuthAdminUserRepository }],
  exports: [BaseAdminUserRepository],
})
class AdminUserRepositoryModule {}

// --------------------------------
// Public Interface
// --------------------------------

export { AdminUserRepositoryModule };
