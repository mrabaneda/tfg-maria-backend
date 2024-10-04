// --------------------------------
// Requirements
// --------------------------------

import { Module } from '@nestjs/common';
import { DeleteAdminUserUseCase } from 'src/core/application/use_cases/admin/delete_admin_user.use_case';
import { AdminUserServiceModule } from '../../services/admin_user_service.module';

// --------------------------------
// Helpers
// --------------------------------

@Module({
  imports: [AdminUserServiceModule],
  providers: [DeleteAdminUserUseCase],
  exports: [DeleteAdminUserUseCase],
})
class DeleteAdminUserUseCaseModule {}

// --------------------------------
// Public Interface
// --------------------------------

export { DeleteAdminUserUseCaseModule };
