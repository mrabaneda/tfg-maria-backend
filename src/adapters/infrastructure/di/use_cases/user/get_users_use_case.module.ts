// --------------------------------
// Requirements
// --------------------------------

import { Module } from '@nestjs/common';
import { GetUsersUseCase } from 'src/core/use_cases/user/get_users.use_case';
import { UserRepositoryModule } from '../../repositories/user_repository.module';
import { LoginRepositoryModule } from '../../repositories/login_repository.module';

// --------------------------------
// Helpers
// --------------------------------

@Module({
  imports: [UserRepositoryModule, LoginRepositoryModule],
  providers: [GetUsersUseCase],
  exports: [GetUsersUseCase],
})
class GetUsersUseCaseModule {}

// --------------------------------
// Public Interface
// --------------------------------

export { GetUsersUseCaseModule };
