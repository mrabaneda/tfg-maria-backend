// --------------------------------
// Requirements
// --------------------------------

import { Module } from '@nestjs/common';
import { DeleteAdminUserUseCase } from 'src/core/use_cases/admin/delete_admin_user.use_case';
import { StorageServiceModule } from '../../services/storage_service.module';
import { AdminUserRepositoryModule } from '../../repositories/admin_user_repository.module';
import { AuthServiceModule } from '../../services/auth_service.module';

// --------------------------------
// Helpers
// --------------------------------

@Module({
  imports: [AdminUserRepositoryModule, AuthServiceModule, StorageServiceModule],
  providers: [DeleteAdminUserUseCase],
  exports: [DeleteAdminUserUseCase],
})
class DeleteAdminUserUseCaseModule {}

// --------------------------------
// Public Interface
// --------------------------------

export { DeleteAdminUserUseCaseModule };
