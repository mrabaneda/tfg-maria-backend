// --------------------------------
// Requirements
// --------------------------------

import { Module } from '@nestjs/common';
import { GetAdminUsersUseCase } from 'src/core/application/use_cases/admin/get_admin_users.use_case';
import { AdminUserServiceModule } from '../../services/admin_user_service.module';

// --------------------------------
// Helpers
// --------------------------------

@Module({
  imports: [AdminUserServiceModule],
  providers: [GetAdminUsersUseCase],
  exports: [GetAdminUsersUseCase],
})
class GetAdminUsersUseCaseModule {}

// --------------------------------
// Public Interface
// --------------------------------

export { GetAdminUsersUseCaseModule };
