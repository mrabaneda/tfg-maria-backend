// --------------------------------
// Requirements
// --------------------------------

import { Module } from '@nestjs/common';
import { GetAdminUserUseCase } from 'src/core/application/use_cases/get_admin_user.use_case';
import { AdminUserServiceModule } from '../services/admin_user_service.module';

// --------------------------------
// Helpers
// --------------------------------

@Module({
  imports: [AdminUserServiceModule],
  providers: [GetAdminUserUseCase],
  exports: [GetAdminUserUseCase],
})
class GetAdminUserUseCaseModule {}

// --------------------------------
// Public Interface
// --------------------------------

export { GetAdminUserUseCaseModule };
