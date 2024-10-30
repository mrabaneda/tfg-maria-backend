// --------------------------------
// Requirements
// --------------------------------

import { Module } from '@nestjs/common';
import { AuthServiceModule } from '../../services/auth_service.module';
import { VerifyTokenUseCase } from 'src/core/use_cases/auth/verify_token.use_case';

// --------------------------------
// Helpers
// --------------------------------

@Module({
  imports: [AuthServiceModule],
  providers: [VerifyTokenUseCase],
  exports: [VerifyTokenUseCase],
})
class VerifyTokenUseCaseModule {}

// --------------------------------
// Public Interface
// --------------------------------

export { VerifyTokenUseCaseModule };
