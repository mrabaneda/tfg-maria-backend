// --------------------------------
// Requirements
// --------------------------------

import { Module } from '@nestjs/common';
import { VerifyTokenUseCase } from 'src/core/application/use_cases/verify_token.use_case';
import { AdminUserServiceModule } from '../services/admin_user_service.module';

// --------------------------------
// Helpers
// --------------------------------

@Module({
  imports: [AdminUserServiceModule],
  providers: [VerifyTokenUseCase],
  exports: [VerifyTokenUseCase],
})
class VerifyTokenUseCaseModule {}

// --------------------------------
// Public Interface
// --------------------------------

export { VerifyTokenUseCaseModule };
