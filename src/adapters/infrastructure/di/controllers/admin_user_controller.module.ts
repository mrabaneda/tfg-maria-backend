// --------------------------------
// Requirements
// --------------------------------

import { Module } from '@nestjs/common';
import { CreateAdminUserUseCaseModule } from '../use_cases/admin/create_admin_user_use_case.module';
import { DeleteAdminUserUseCaseModule } from '../use_cases/admin/delete_admin_user_use_case.module';
import { GetAdminUsersUseCaseModule } from '../use_cases/admin/get_admin_users_use_case.module';
import { AdminUserController } from 'src/adapters/api/admin/controllers/admin_user.controller';
import { VerifyTokenUseCaseModule } from '../use_cases/auth/verify_token_use_case.module';

// --------------------------------
// Helpers
// --------------------------------

@Module({
  imports: [
    VerifyTokenUseCaseModule,
    CreateAdminUserUseCaseModule,
    DeleteAdminUserUseCaseModule,
    GetAdminUsersUseCaseModule,
  ],
  controllers: [AdminUserController],
})
class AdminUserControllerModule {}

// --------------------------------
// Public Interface
// --------------------------------

export { AdminUserControllerModule };
