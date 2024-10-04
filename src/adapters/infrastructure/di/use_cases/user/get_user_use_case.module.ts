// --------------------------------
// Requirements
// --------------------------------

import { Module } from '@nestjs/common';
import { UserServiceModule } from '../../services/user_service.module';
import { GetUserUseCase } from 'src/core/application/use_cases/user/get_user.use_case';

// --------------------------------
// Helpers
// --------------------------------

@Module({
  imports: [UserServiceModule],
  providers: [GetUserUseCase],
  exports: [GetUserUseCase],
})
class GetUserUseCaseModule {}

// --------------------------------
// Public Interface
// --------------------------------

export { GetUserUseCaseModule };
