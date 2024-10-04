// --------------------------------
// Requirements
// --------------------------------

import { Module } from '@nestjs/common';
import { UserServiceModule } from '../../services/user_service.module';
import { CreateUserUseCase } from 'src/core/application/use_cases/user/create_user.use_case';

// --------------------------------
// Helpers
// --------------------------------

@Module({
  imports: [UserServiceModule],
  providers: [CreateUserUseCase],
  exports: [CreateUserUseCase],
})
class CreateUserUseCaseModule {}

// --------------------------------
// Public Interface
// --------------------------------

export { CreateUserUseCaseModule };
