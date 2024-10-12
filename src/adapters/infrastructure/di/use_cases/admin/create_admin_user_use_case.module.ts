// --------------------------------
// Requirements
// --------------------------------

import { Module } from '@nestjs/common';
import { CreateAdminUserUseCase } from 'src/core/use_cases/admin/create_admin_user.use_case';
import { AdminUserRepositoryModule } from '../../repositories/admin_user_repository.module';
import { AuthServiceModule } from '../../services/auth_service.module';
import { StorageServiceModule } from '../../services/storage_service.module';

// --------------------------------
// Helpers
// --------------------------------

@Module({
  imports: [AdminUserRepositoryModule, AuthServiceModule, StorageServiceModule],
  providers: [CreateAdminUserUseCase],
  exports: [CreateAdminUserUseCase],
})
class CreateAdminUserUseCaseModule {}

// --------------------------------
// Public Interface
// --------------------------------

export { CreateAdminUserUseCaseModule };
