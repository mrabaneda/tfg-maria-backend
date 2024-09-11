// --------------------------------
// Requirements
// --------------------------------

import { Module } from '@nestjs/common';
import { SetUpModule } from './setup.module';
import { UserController } from './adapters/api/user/controllers/user.controller';
import AuthMiddlewareModule from './adapters/infrastructure/di/middleware/auth_middleware.module';
import { AuthRepositoryModule } from './adapters/infrastructure/di/repositories/auth_repository.module';
import { GetAllUsersUseCasesModule } from './adapters/infrastructure/di/use_cases/get_all_users_use_case.module';

// --------------------------------
// Helpers
// --------------------------------

@Module({
  imports: [SetUpModule, AuthRepositoryModule, GetAllUsersUseCasesModule, AuthMiddlewareModule],
  controllers: [UserController],
})
class AppModule { }

// --------------------------------
// Public Interface
// --------------------------------

export { AppModule };