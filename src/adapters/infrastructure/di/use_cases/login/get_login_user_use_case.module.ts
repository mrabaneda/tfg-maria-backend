// --------------------------------
// Requirements
// --------------------------------

import { Module } from '@nestjs/common';
import { LoginRepositoryModule } from '../../repositories/login_repository.module';
import { GetLoginUserUseCase } from 'src/core/use_cases/login/get_login_user.use_case';

// --------------------------------
// Helpers
// --------------------------------

@Module({
  imports: [LoginRepositoryModule],
  providers: [GetLoginUserUseCase],
  exports: [GetLoginUserUseCase],
})
class GetLoginUserUseCaseModule {}

// --------------------------------
// Public Interface
// --------------------------------

export { GetLoginUserUseCaseModule };
