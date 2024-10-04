// --------------------------------
// Requirements
// --------------------------------

import { Module } from '@nestjs/common';
import { AdminUserServiceModule } from '../../services/admin_user_service.module';
import { VerifyAdminTokenUseCase } from 'src/core/application/use_cases/admin/verify_admin_token.use_case';

// --------------------------------
// Helpers
// --------------------------------

@Module({
  imports: [AdminUserServiceModule],
  providers: [VerifyAdminTokenUseCase],
  exports: [VerifyAdminTokenUseCase],
})
class VerifyAdminTokenUseCaseModule {}

// --------------------------------
// Public Interface
// --------------------------------

export { VerifyAdminTokenUseCaseModule };
