// --------------------------------
// Requirements
// --------------------------------

import { Module } from '@nestjs/common';
import { UserServiceModule } from '../../services/user_service.module';
import { DeleteUserUseCase } from 'src/core/application/use_cases/user/delete_user.use_case';

// --------------------------------
// Helpers
// --------------------------------

@Module({
  imports: [UserServiceModule],
  providers: [DeleteUserUseCase],
  exports: [DeleteUserUseCase],
})
class DeleteUserUseCaseModule {}

// --------------------------------
// Public Interface
// --------------------------------

export { DeleteUserUseCaseModule };
