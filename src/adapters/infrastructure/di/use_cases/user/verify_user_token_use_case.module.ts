// --------------------------------
// Requirements
// --------------------------------

import { Module } from '@nestjs/common';
import { UserServiceModule } from '../../services/user_service.module';
import { VerifyUserTokenUseCase } from 'src/core/application/use_cases/user/verify_user_token.use_case';

// --------------------------------
// Helpers
// --------------------------------

@Module({
  imports: [UserServiceModule],
  providers: [VerifyUserTokenUseCase],
  exports: [VerifyUserTokenUseCase],
})
class VerifyTokenUseCaseModule {}

// --------------------------------
// Public Interface
// --------------------------------

export { VerifyTokenUseCaseModule };
