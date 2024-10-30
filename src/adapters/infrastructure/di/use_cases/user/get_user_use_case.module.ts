// --------------------------------
// Requirements
// --------------------------------

import { Module } from '@nestjs/common';
import { GetUserUseCase } from 'src/core/use_cases/user/get_user.use_case';
import { UserRepositoryModule } from '../../repositories/user_repository.module';
import { LoginRepositoryModule } from '../../repositories/login_repository.module';

// --------------------------------
// Helpers
// --------------------------------

@Module({
  imports: [UserRepositoryModule, LoginRepositoryModule],
  providers: [GetUserUseCase],
  exports: [GetUserUseCase],
})
class GetUserUseCaseModule {}

// --------------------------------
// Public Interface
// --------------------------------

export { GetUserUseCaseModule };
