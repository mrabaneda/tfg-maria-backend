// --------------------------------
// Requirements
// --------------------------------

import { Module } from '@nestjs/common';
import { VerifyTokenUseCaseModule } from '../use_cases/auth/verify_token_use_case.module';
import { LoginController } from 'src/adapters/api/login/controllers/login.controller';
import { GetLoginUserUseCaseModule } from '../use_cases/login/get_login_user_use_case.module';

// --------------------------------
// Helpers
// --------------------------------

@Module({
  imports: [VerifyTokenUseCaseModule, GetLoginUserUseCaseModule],
  controllers: [LoginController],
})
class LoginControllerModule {}

// --------------------------------
// Public Interface
// --------------------------------

export { LoginControllerModule };
