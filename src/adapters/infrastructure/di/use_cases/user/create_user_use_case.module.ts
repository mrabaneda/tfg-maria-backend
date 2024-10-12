// --------------------------------
// Requirements
// --------------------------------

import { Module } from '@nestjs/common';
import { CreateUserUseCase } from 'src/core/use_cases/user/create_user.use_case';
import { UserRepositoryModule } from '../../repositories/user_repository.module';
import { AuthServiceModule } from '../../services/auth_service.module';
import { StorageServiceModule } from '../../services/storage_service.module';
import { LoginRepositoryModule } from '../../repositories/login_repository.module';

// --------------------------------
// Helpers
// --------------------------------

@Module({
  imports: [UserRepositoryModule, AuthServiceModule, StorageServiceModule, LoginRepositoryModule],
  providers: [CreateUserUseCase],
  exports: [CreateUserUseCase],
})
class CreateUserUseCaseModule {}

// --------------------------------
// Public Interface
// --------------------------------

export { CreateUserUseCaseModule };
