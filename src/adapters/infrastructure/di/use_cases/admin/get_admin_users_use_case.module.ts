// --------------------------------
// Requirements
// --------------------------------

import { Module } from '@nestjs/common';
import { GetAdminUsersUseCase } from 'src/core/use_cases/admin/get_admin_users.use_case';
import { AdminUserRepositoryModule } from '../../repositories/admin_user_repository.module';

// --------------------------------
// Helpers
// --------------------------------

@Module({
  imports: [AdminUserRepositoryModule],
  providers: [GetAdminUsersUseCase],
  exports: [GetAdminUsersUseCase],
})
class GetAdminUsersUseCaseModule {}

// --------------------------------
// Public Interface
// --------------------------------

export { GetAdminUsersUseCaseModule };
