// --------------------------------
// Requirements
// --------------------------------

import { Module } from '@nestjs/common';
import { UserController } from 'src/adapters/api/user/controllers/user.controller';
import { CreateUserUseCaseModule } from '../use_cases/user/create_user_use_case.module';
import { DeleteUserUseCaseModule } from '../use_cases/user/delete_user_use_case.module';
import { GetUsersUseCaseModule } from '../use_cases/user/get_users_use_case.module';

// --------------------------------
// Helpers
// --------------------------------

@Module({
  imports: [CreateUserUseCaseModule, DeleteUserUseCaseModule, GetUsersUseCaseModule],
  controllers: [UserController],
})
class UserControllerModule {}

// --------------------------------
// Public Interface
// --------------------------------

export default UserControllerModule;
