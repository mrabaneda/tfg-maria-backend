// --------------------------------
// Requirements
// --------------------------------

import { Module } from '@nestjs/common';
import { BaseAdminUserService } from 'src/core/domain/ports/services/admin_user.service';
import { AdminUserService } from 'src/core/application/services/admin_user.service';
import { AdminUserRepositoryModule } from '../repositories/admin_user_repository.module';

// --------------------------------
// Helpers
// --------------------------------

@Module({
  imports: [AdminUserRepositoryModule],
  providers: [{ provide: BaseAdminUserService, useClass: AdminUserService }],
  exports: [BaseAdminUserService],
})
class AdminUserServiceModule {}

// --------------------------------
// Public Interface
// --------------------------------

export { AdminUserServiceModule };
