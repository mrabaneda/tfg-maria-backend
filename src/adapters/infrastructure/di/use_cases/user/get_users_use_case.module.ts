// --------------------------------
// Requirements
// --------------------------------

import { Module } from '@nestjs/common';
import { UserServiceModule } from '../../services/user_service.module';
import { GetUsersUseCase } from 'src/core/application/use_cases/user/get_users.use_case';

// --------------------------------
// Helpers
// --------------------------------

@Module({
  imports: [UserServiceModule],
  providers: [GetUsersUseCase],
  exports: [GetUsersUseCase],
})
class GetUsersUseCaseModule {}

// --------------------------------
// Public Interface
// --------------------------------

export { GetUsersUseCaseModule };
