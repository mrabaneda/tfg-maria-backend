// --------------------------------
// Requirements
// --------------------------------

import { Module } from '@nestjs/common';
import { CreateAdminUserUseCase } from 'src/core/application/use_cases/admin/create_admin_user.use_case';
import { AdminUserServiceModule } from '../../services/admin_user_service.module';

// --------------------------------
// Helpers
// --------------------------------

@Module({
  imports: [AdminUserServiceModule],
  providers: [CreateAdminUserUseCase],
  exports: [CreateAdminUserUseCase],
})
class CreateAdminUserUseCaseModule {}

// --------------------------------
// Public Interface
// --------------------------------

export { CreateAdminUserUseCaseModule };
