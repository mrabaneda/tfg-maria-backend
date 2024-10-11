// --------------------------------
// Requirements
// --------------------------------

import { Module } from '@nestjs/common';
import { AdminUserServiceModule } from '../../services/admin_user_service.module';
import { VerifyAdminTokenUseCase } from 'src/core/application/use_cases/admin/verify_admin_token.use_case';
import { GetAdminUserUseCaseModule } from './get_admin_user_use_case.module';

// --------------------------------
// Helpers
// --------------------------------

@Module({
  imports: [AdminUserServiceModule, GetAdminUserUseCaseModule],
  providers: [VerifyAdminTokenUseCase],
  exports: [VerifyAdminTokenUseCase],
})
class VerifyAdminTokenUseCaseModule {}

// --------------------------------
// Public Interface
// --------------------------------

export { VerifyAdminTokenUseCaseModule };
